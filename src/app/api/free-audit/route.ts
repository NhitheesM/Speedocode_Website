import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Admin email to receive notifications
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'speedocode.systems@gmail.com';
// Must use onboarding@resend.dev if you haven't verified your own domain
const FROM_EMAIL = process.env.FROM_EMAIL || 'Speedocode <onboarding@resend.dev>';

interface AuditRequest {
  name: string;
  email: string;
  urlOrIdea: string;
  businessType: string;
  message: string;
  reviewType: 'website' | 'idea';
}

// Basic spam protection - check for common spam patterns
function isSpam(data: AuditRequest): boolean {
  const spamPatterns = [
    /\[url=/i,
    /\[link=/i,
    /<a\s+href/i,
    /viagra|cialis|casino|poker|lottery/i,
  ];

  const checkFields = [data.name, data.email, data.urlOrIdea, data.message];

  return checkFields.some(field =>
    spamPatterns.some(pattern => pattern.test(field || ''))
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as AuditRequest;

    // Validate required fields
    if (!body.name || !body.email || !body.urlOrIdea) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Spam protection
    if (isSpam(body)) {
      // Return success to not alert spammers, but don't send emails
      return NextResponse.json({ success: true });
    }

    const reviewTypeLabel = body.reviewType === 'website' ? 'Website Audit' : 'Idea Validation';
    const urlOrIdeaLabel = body.reviewType === 'website' ? 'Website URL' : 'Idea Description';

    // Send notification email to admin
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Free Audit Request: ${reviewTypeLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4;">New ${reviewTypeLabel} Request</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Review Type:</strong> ${reviewTypeLabel}</p>
            <p><strong>${urlOrIdeaLabel}:</strong> ${body.urlOrIdea}</p>
            ${body.businessType ? `<p><strong>Business Type:</strong> ${body.businessType}</p>` : ''}
            ${body.message ? `<p><strong>Additional Notes:</strong> ${body.message}</p>` : ''}
          </div>
          
          <p style="color: #64748b; font-size: 12px;">
            Submitted at: ${new Date().toISOString()}
          </p>
        </div>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: FROM_EMAIL,
      to: body.email,
      subject: 'We received your request - Speedocode Systems',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4;">Thanks for reaching out, ${body.name}!</h2>
          
          <p>We've received your ${reviewTypeLabel.toLowerCase()} request and are excited to help.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">What happens next?</h3>
            <ul style="color: #475569;">
              <li>Our team will review your submission within 24 hours</li>
              <li>You'll receive a personalized response with actionable insights</li>
              <li>No sales pressure – just helpful feedback</li>
            </ul>
          </div>
          
          <p>In the meantime, feel free to explore our <a href="https://speedocode.com" style="color: #06b6d4;">website</a> to learn more about what we do.</p>
          
          <p>Best regards,<br/>
          <strong>The Speedocode Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
          
          <p style="color: #94a3b8; font-size: 12px;">
            This is an automated confirmation. Please don't reply to this email.
            If you have questions, contact us at speedocode.systems@gmail.com
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
