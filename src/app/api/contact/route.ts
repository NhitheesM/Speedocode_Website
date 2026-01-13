import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

interface ContactRequest {
    name: string;
    email: string;
    projectType: string;
    message: string;
}

// Basic spam protection
function isSpam(data: ContactRequest): boolean {
    const spamPatterns = [
        /\[url=/i,
        /\[link=/i,
        /<a\s+href/i,
        /viagra|cialis|casino|poker|lottery/i,
    ];

    const checkFields = [data.name, data.email, data.message];

    return checkFields.some(field =>
        spamPatterns.some(pattern => pattern.test(field || ''))
    );
}

export async function POST(request: NextRequest) {
    try {
        // Initialize Resend inside the function to avoid build-time errors
        const resend = new Resend(process.env.RESEND_API_KEY);
        const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'speedocode.systems@gmail.com';
        const FROM_EMAIL = process.env.FROM_EMAIL || 'Speedocode <onboarding@resend.dev>';

        const body = await request.json() as ContactRequest;

        // Validate required fields
        if (!body.name || !body.email || !body.projectType || !body.message) {
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
            return NextResponse.json({ success: true });
        }

        // Send notification email to admin
        await resend.emails.send({
            from: FROM_EMAIL,
            to: ADMIN_EMAIL,
            subject: `New Project Inquiry: ${body.projectType}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #085078;">New Project Inquiry</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Project Type:</strong> ${body.projectType}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #fff; padding: 15px; border-radius: 4px; border: 1px solid #e2e8f0;">${body.message}</p>
          </div>
          
          <p style="color: #64748b; font-size: 12px;">
            Submitted at: ${new Date().toISOString()}
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
