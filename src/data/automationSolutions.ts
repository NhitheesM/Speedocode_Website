import { SolutionType } from "./websiteSolutions";

export const automationSolutions: SolutionType[] = [
    {
        id: "workflow",
        title: "Workflow Automation",
        description: "Streamline repetitive business processes with automated workflows that connect systems, trigger actions, and eliminate manual data entry.",
        solutionTypes: ["Process Automation", "Task Scheduling", "Approval Flows", "Document Routing", "Email Automation"],
        businessUseCases: [
            "Eliminate manual data entry across systems",
            "Automate employee onboarding processes",
            "Create approval workflows for expenses",
            "Route documents automatically for review",
            "Schedule recurring reports and notifications"
        ]
    },
    {
        id: "ai",
        title: "AI Integration",
        description: "Enhance your applications with artificial intelligence capabilities including natural language processing, computer vision, and predictive analytics.",
        solutionTypes: ["ChatGPT Integration", "Document Analysis", "Image Recognition", "Predictive Models", "Voice Assistants"],
        businessUseCases: [
            "Add intelligent chatbots for customer support",
            "Extract data from documents automatically",
            "Analyze images for quality control",
            "Predict customer churn or demand",
            "Enable voice commands in applications"
        ]
    },
    {
        id: "data-pipeline",
        title: "Data Pipelines",
        description: "Build robust data infrastructure that collects, transforms, and delivers data across your organization for analytics and decision-making.",
        solutionTypes: ["ETL Processes", "Real-time Streaming", "Data Warehousing", "API Integration", "Data Quality"],
        businessUseCases: [
            "Consolidate data from multiple sources",
            "Enable real-time analytics dashboards",
            "Maintain data quality and consistency",
            "Feed machine learning models with clean data",
            "Comply with data governance requirements"
        ]
    },
    {
        id: "process-optimization",
        title: "Process Optimization",
        description: "Analyze and improve business processes using data-driven insights, identifying bottlenecks and implementing efficiency improvements.",
        solutionTypes: ["Process Mining", "Bottleneck Analysis", "KPI Tracking", "Continuous Improvement", "Benchmarking"],
        businessUseCases: [
            "Identify inefficiencies in operations",
            "Reduce processing times and costs",
            "Track key performance indicators",
            "Implement continuous improvement programs",
            "Benchmark against industry standards"
        ]
    }
];
