import { Github, Linkedin, Mail, Globe } from 'lucide-react';

export const personalInfo = {
    name: "Gowtham C K",
    subtitle: "Tech Explorer & Software Engineer passionate about Deep Tech. ICCSSE Scholar @ RV University. Focused on AI, Edge Computing & Quantum Algorithms. Skilled in Full-Stack Architecture & Rapid Prototyping.",
    designation: "NEURAL_ARCHITECT // DEEP_TECH_ENGINEER",
    systemStatus: "ONLINE",
    email: "ckgowtham12@gmail.com",
    socials: [
        { name: "GitHub", url: "https://github.com/GowthamCK", icon: Github, label: "git_hub" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/gowtham-c-k/", icon: Linkedin, label: "linked_in" },
        { name: "g.dev", url: "https://g.dev/gowthamck", icon: Globe, label: "g_dev" },
        { name: "Email", url: "mailto:ckgowtham12@gmail.com", icon: Mail, label: "e_mail" },
    ]
};

export const aboutText = [
    "I'm Gowtham — an Information Science Engineer with deep roots in AI, systems architecture, and emerging technologies. My academic journey through RV University & PESCE shaped a relentless curiosity for building things that matter.",
    "I believe in tech-for-good — engineering solutions that scale, serve, and sustain. From fine-tuning vision models for edge deployment to architecting full-stack platforms that power education, I work at the intersection of research and production.",
    "With a foundation spanning AI research at IISc Bangalore to building scalable platforms at Polygnan Foundation, I bring disciplined execution and creative problem-solving to every system I architect."
];

export const systemSpecs = [
    { key: "LOCATION", value: "Mysore / Bangalore, India", code: "KA_IN" },
    { key: "EDUCATION", value: "RV University & PESCE", code: "DUAL_DEG" },
    { key: "NEURAL_FOCUS", value: "AI & Deep Tech", code: "ACTIVE" },
    { key: "LANGUAGES", value: "EN / HI / KN", code: "TRILINGUAL" },
];

export const education = [
    {
        institution: "RV University",
        degree: "International Certification in Computer Science & Software Engineering",
        location: "Bangalore, Karnataka, India",
        period: "Dec 2025 – Apr 2026",
        result: "CGPA: 10",
        status: "IN_PROGRESS"
    },
    {
        institution: "P.E.S. College of Engineering",
        degree: "B.E. in Information Science and Engineering",
        location: "Mandya, Karnataka, India",
        period: "2021 – 2025",
        result: "CGPA: 8.2",
        status: "COMPLETED"
    }
];

export const experience = [
    {
        role: "AI Intern",
        company: "Polygnan Foundation",
        period: "Nov 2025 – Dec 2025",
        location: "Bangalore, India",
        status: "COMPLETED",
        points: [
            "Architected a scalable LMS using Django Ninja & React with RBAC, supporting learning for 500+ concurrent users.",
            "Engineered n8n automation workflows and RAG-based AI agents to optimize internal operations and user guidance."
        ]
    },
    {
        role: "Fellow (Part-time)",
        company: "Polygnan Foundation",
        period: "Apr 2025 – Nov 2025",
        location: "Bangalore, India",
        status: "COMPLETED",
        points: [
            "Orchestrated 4 STEM programs for 150+ students; authored and deployed K-12 curricula for Robotics and Design Thinking.",
            "Mentored undergraduate students in building IoT and innovation modules, bridging the gap between theory and practice."
        ]
    },
    {
        role: "Engineering Intern",
        company: "Polygnan Foundation",
        period: "Feb 2025 – Mar 2025",
        location: "Bangalore, India",
        status: "COMPLETED",
        points: [
            "Contributed to strategic brainstorming and initial web development research for the foundation's digitalization.",
            "Collaborated on educational initiatives, gaining deep insights into startup culture and service-minded leadership."
        ]
    },
    {
        role: "Research / Project Intern",
        company: "Aerospace Dept, IISc Bangalore",
        period: "Oct 2024 – Jan 2025",
        location: "Bangalore, India",
        status: "COMPLETED",
        points: [
            "Researched and developed real-time exercise tracking systems (Kreeda.ai) by fine-tuning YOLO nano architectures.",
            "Accelerated model inference using CUDA, benchmarking latency metrics to ensure seamless web deployment.",
            "Strategically augmented training datasets by 30% (6,000+ custom samples) to mitigate model overfitting and improve robust tracking.",
            "Analyzed accuracy and size metrics against open-source solutions to ensure optimal performance on resource-constrained platforms."
        ]
    }
];

export const projects = [
    {
        title: "Real-Time Friend-or-Foe Detection System",
        codename: "PROJECT_SENTINEL",
        description: "Engineered an end-to-end edge detection system by deploying a fine-tuned YOLO model on a Raspberry Pi. Developed a Python control center for wireless IR video streaming, live GPS visualization, and geotagged alerts. Optimized inference speed using ONNX runtime, achieving <50ms latency per frame.",
        tags: ["Python", "Raspberry Pi", "YOLO", "ONNX", "Edge AI"],
        size: "large",
        status: "DEPLOYED"
    },
    {
        title: "E-commerce Platform with Shopify API",
        codename: "PROJECT_NEXUS",
        description: "Built a headless platform supporting 100+ concurrent users, reducing maintenance overhead by 90% via API integration. Implemented secure checkout flows and dynamic cart state management using React Context API and local storage.",
        tags: ["React", "Shopify API", "Context API", "Headless CMS"],
        size: "small",
        status: "LIVE"
    },
    {
        title: "Scalable LMS Platform",
        codename: "PROJECT_CORTEX",
        description: "Architected a cohort-based learning platform with RBAC, JWT authentication, and polymorphic assessment engine powering 500+ active users with Django Ninja & React.",
        tags: ["Django Ninja", "React", "PostgreSQL", "Docker", "RBAC"],
        size: "small",
        status: "ACTIVE"
    }
];

export const achievements = [
    {
        title: "National MSME Hackathon 4.0 Winner",
        description: "Secured ₹15 Lakhs in project funding from the Ministry of MSME for a novel blockchain technology solution.",
        highlight: "₹15L GRANT SECURED",
        code: "HACK_WIN_01",
        year: "2025"
    },
    {
        title: "Blockchain Patent Published",
        description: "Co-Inventor of \"Blockchain-Enabled System for Carbon Capture Verification and Automated Emission Credit Trading\".",
        highlight: "PATENT PUBLISHED",
        code: "PAT_BLC_02",
        year: "2026"
    },
    {
        title: "Excellent Student of the Chapter",
        description: "Awarded by ISTE-PESCE for outstanding technical contributions and leadership.",
        highlight: "ISTE AWARD",
        code: "AWD_ISTE_03",
        year: "2025"
    },
    {
        title: "Best Performer Award",
        description: "Recognized by ISTE-PESCE for exceptional performance and consistent contributions to technical excellence.",
        highlight: "BEST PERFORMER",
        code: "AWD_PERF_04",
        year: "2023"
    }
];

export const certifications = [
    { name: "Oracle AI Vector Search Certified Professional", code: "1Z0-184-25" },
    { name: "OCI 2025 AI Foundations Associate", code: "1Z0-1122-25" },
    { name: "OCI 2025 Foundations Associate", code: "1Z0-1085-25" },
    { name: "AWS Academy Cloud Foundations & Architecting", code: "AWS_CLD" },
    { name: "Google Cloud Computing Foundations", code: "GCP_FND" },
    { name: "Azure AI Vision Solution", code: "AZ_VIS" },
    { name: "Agile Software Development", code: "AGILE" },
    { name: "Quantum Computing for Beginners", code: "QC_101" },
    { name: "DevOps Training (HCL)", code: "HCL_DVO" },
];

export const leadershipRoles = [
    { role: "Vice President", org: "ISTE-PESCE", period: "Jul 2024 – Jun 2025", desc: "Spearheaded 40+ technical events, growing club participation by 60%." },
    { role: "Senior Club Advisor", org: "IIC PESCE", period: "Dec 2024 – Jul 2025", desc: "Advised on innovation strategies, guiding teams to state/national competitions." },
    { role: "Student Coordinator", org: "Placement & Training, PESCE", period: "Jul 2022 – Jun 2025", desc: "Mentored junior students in resume building and technical interview skills for 3 years." },
    { role: "Co-organizer", org: "GDG on Campus-PESCE", period: "Sep 2024 – Aug 2025", desc: "Boosted student engagement in tech by co-organizing workshops and events." },
    { role: "Student Outreach", org: "GDSC PESCE", period: "Aug 2023 – Jul 2024", desc: "Drove Google Developer Student Club outreach and community engagement initiatives." },
];

export const techStack = [
    { name: "Python", category: "core" },
    { name: "Java", category: "core" },
    { name: "JavaScript", category: "core" },
    { name: "SQL", category: "core" },
    { name: "React", category: "core" },
    { name: "Django", category: "core" },
    { name: "Django Ninja", category: "core" },
    { name: "REST APIs", category: "core" },
    { name: "YOLO", category: "ai" },
    { name: "OpenCV", category: "ai" },
    { name: "Deep Learning", category: "ai" },
    { name: "RAG", category: "ai" },
    { name: "LLMs", category: "ai" },
    { name: "Model Fine-Tuning", category: "ai" },
    { name: "AWS", category: "cloud" },
    { name: "Oracle Cloud", category: "cloud" },
    { name: "GCP", category: "cloud" },
    { name: "Azure", category: "cloud" },
    { name: "Docker", category: "devops" },
    { name: "Git", category: "devops" },
    { name: "n8n", category: "devops" },
    { name: "Jira", category: "devops" },
    { name: "PostgreSQL", category: "core" },
    { name: "HTML5/CSS3", category: "core" },
];
