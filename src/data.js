import { Github, Linkedin, Mail, Globe, Award } from 'lucide-react';

export const personalInfo = {
    name: "Gowtham C K",
    headline: "Hi, I'm Gowtham C K.",
    subtitle: "I architect hybrid Web2/Web3 enterprise systems and conduct applied research in Edge AI and AI-Assisted Software Engineering, deploying low-latency computer vision models on resource-constrained hardware.",
    designation: "Software Engineer & Applied AI Researcher",
    systemStatus: "ONLINE",
    email: "ckgowtham12@gmail.com",
    socials: [
        { name: "GitHub", url: "https://github.com/GowthamCK", icon: Github, label: "git_hub" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/gowtham-c-k/", icon: Linkedin, label: "linked_in" },
        { name: "Credly", url: "https://www.credly.com/users/gowtham-c-k/badges/credly", icon: Award, label: "credly_profile" },
        { name: "g.dev", url: "https://g.dev/gowthamck", icon: Globe, label: "g_dev" },
        { name: "Email", url: "mailto:ckgowtham12@gmail.com", icon: Mail, label: "e_mail" },
    ]
};

export const aboutText = [
    "I am a Software Engineer and Applied AI Researcher passionate about solving complex, real-world problems at the intersection of Artificial Intelligence, Edge Computing, and System Architecture.",
    "My research focuses on **Edge AI** and **Computer Vision**. At the Indian Institute of Science (IISc Bangalore), I conducted applied research in real-time computer vision, fine-tuning YOLO models to evaluate accuracy-latency trade-offs on edge hardware. In the enterprise space, I architected an MSME Blockchain Supply Chain Traceability Platform, securing a ₹15 Lakh central government grant to deliver high-assurance provenance tracking and tamper-evident audit trails.",
    "From deploying RAG-based AI agents for learning management systems at the Polygnan Foundation to co-inventing a published patent in blockchain-enabled carbon capture, I am driven by building secure, scalable, and trustworthy systems. I am currently seeking applied research fellowships and PhD opportunities to further explore autonomous multi-agent systems, AI reliability, and large-scale architectural innovation."
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
            "Architected a scalable Learning Management System (LMS) using Django Ninja and React with strict Role-Based Access Control (RBAC), supporting 500+ active users.",
            "Engineered multi-agent n8n automation workflows and RAG-based AI agents to optimize internal data retrieval, operations, and user guidance.",
            "Deployed deterministic AI governance guardrails to ensure reliable, context-aware, and secure responses from Large Language Models (LLMs).",
            "Integrated advanced product analytics pipelines to track user engagement metrics and optimize educational delivery."
        ]
    },
    {
        role: "Fellow & Engineering Intern",
        company: "Polygnan Foundation",
        period: "Feb 2025 – Nov 2025",
        location: "Bangalore, India",
        status: "COMPLETED",
        points: [
            "Orchestrated 4 STEM programs for 150+ students, authoring comprehensive K-12 curricula focused on Robotics, IoT, and hardware design.",
            "Mentored undergraduates in building modular IoT systems, successfully bridging theoretical kinematics with practical hardware assembly and programming.",
            "Collaborated directly with founders on B2B zero-to-one SaaS growth strategies, conducting competitive market teardowns for enterprise digitalization."
        ]
    },
    {
        role: "Research Intern (Computer Vision)",
        company: "IISc Bangalore",
        period: "Oct 2024 – Jan 2025",
        location: "Bangalore, India",
        status: "COMPLETED",
        points: [
            "Conducted applied R&D on real-time computer vision systems, fine-tuning YOLO deep learning models utilizing PyTorch and CUDA.",
            "Engineered a 30% expansion in training datasets (6,000+ images) via photometric transformations to mitigate model overfitting in dynamic lighting environments.",
            "Evaluated Edge AI deployment tradeoffs, balancing bounding-box accuracy with hardware computational limits for resource-constrained devices.",
            "Benchmarked inference latency across edge hardware, optimizing perception algorithms to achieve production-ready performance for robotics integration."
        ]
    }
];

export const projects = [
    {
        title: "Enterprise Blockchain Supply Chain Traceability Platform",
        role: "Project Lead / Lead Architect",
        codename: "SYS_NEXUS // MOMSME_PLATFORM",
        description: "Lead architect for an enterprise supply chain traceability platform supported by a ₹15 Lakh MoMSME central government grant. Engineered a high-assurance hybrid Web2/Web3 architecture bridging tamper-evident distributed ledgers with scalable enterprise SaaS services, delivering milestone verification, transparent audit trails, and role-based data access for manufacturing consortia.",
        tags: ["Hybrid Web2/Web3", "Enterprise Architecture", "Next.js", "Polygon PoS", "PostgreSQL", "Smart Contracts"],
        size: "large",
        status: "DEPLOYED"
    },
    {
        title: "Real-Time Edge AI Surveillance System",
        role: "Applied AI Researcher",
        codename: "SYS_SENTINEL // NOCTURNAL_VISION",
        description: "Engineered a nocturnal \"Friend-or-Foe\" detection system for resource-constrained edge environments. Fine-tuned and deployed YOLO11s on a Raspberry Pi 4 B with an OV5647 IR camera. Optimized the PyTorch inference pipeline using ONNX Runtime to achieve under 50 ms latency per frame in low-light conditions.",
        tags: ["YOLO11s", "Raspberry Pi 4B", "PyTorch", "ONNX Runtime", "Edge AI", "Computer Vision"],
        size: "small",
        status: "DEPLOYED"
    },
    {
        title: "Polygnan LMS & Autonomous AI Agents",
        role: "AI Intern",
        codename: "SYS_CORTEX // AGENTIC_LMS",
        description: "Architected a scalable Learning Management System using Django Ninja and React with strict Role-Based Access Control (RBAC) for 500+ users. Engineered multi-agent n8n automation workflows and RAG-based AI agents to optimize internal data retrieval and user guidance.",
        tags: ["Django Ninja", "React", "PostgreSQL", "n8n Automation", "RAG Agents", "RBAC"],
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
    { name: "Google Cloud Computing Foundations", code: "GCP_FND" },
    { name: "Azure AI Vision Solution", code: "AZ_VIS" },
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
    // Applied Research & AI
    { name: "Machine Learning", category: "ai" },
    { name: "Deep Learning", category: "ai" },
    { name: "PyTorch", category: "ai" },
    { name: "YOLO11s", category: "ai" },
    { name: "RAG (Retrieval-Augmented Generation)", category: "ai" },
    { name: "Autonomous AI Agents", category: "ai" },
    { name: "Computer Vision", category: "ai" },
    { name: "ONNX Runtime", category: "ai" },
    { name: "Edge AI", category: "ai" },

    // Software Engineering
    { name: "System Architecture", category: "se" },
    { name: "Code Translation & Migration", category: "se" },
    { name: "Static Analysis concepts", category: "se" },
    { name: "REST APIs", category: "se" },
    { name: "Git", category: "se" },
    { name: "CI/CD", category: "se" },
    { name: "Code Review", category: "se" },

    // Systems & Infrastructure
    { name: "Linux", category: "systems" },
    { name: "Ubuntu", category: "systems" },
    { name: "AWS", category: "systems" },
    { name: "Oracle Cloud Infrastructure (OCI)", category: "systems" },
    { name: "GCP", category: "systems" },
    { name: "Docker", category: "systems" },
    { name: "Jenkins", category: "systems" },
    { name: "n8n Automation", category: "systems" },

    // Languages & Frameworks
    { name: "Python", category: "languages" },
    { name: "Java", category: "languages" },
    { name: "C", category: "languages" },
    { name: "TypeScript", category: "languages" },
    { name: "JavaScript", category: "languages" },
    { name: "SQL", category: "languages" },
    { name: "Next.js", category: "languages" },
    { name: "React", category: "languages" },
    { name: "Django Ninja", category: "languages" },
    { name: "PostgreSQL", category: "languages" },
];
