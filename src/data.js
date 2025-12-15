import { Github, Linkedin, Mail, Instagram, Award, BookOpen, Users } from 'lucide-react';

export const personalInfo = {
    name: "Gowtham C K",
    role: "Software Engineer | AI & Full-Stack Developer",
    tagline: "Blockchain Enthusiast",
    bio: "A passionate Information Science Engineer with a strong foundation in building scalable web applications and AI solutions. I specialize in Python, Django, and Computer Vision, with a proven track record of winning national hackathons and architecting funded projects.",
    email: "ckgowtham12@gmail.com",
    phone: "+91 9738686282",
    place: "Bangalore, India",
    socials: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/gowtham-c-k/", icon: Linkedin },
        { name: "GitHub", url: "https://github.com/GowthamCK", icon: Github },
        { name: "Email", url: "mailto:ckgowtham12@gmail.com", icon: Mail },
    ]
};

export const skills = [
    { category: "Languages", items: ["Java", "Python", "C", "SQL (MySQL, PostgreSQL)", "JavaScript", "HTML5", "CSS3"] },
    { category: "Web Frameworks", items: ["Django", "Django Ninja", "React", "REST APIs"] },
    { category: "AI/ML", items: ["OpenCV", "YOLO", "Object Detection", "Model Fine-Tuning", "RAG", "LLMs"] },
    { category: "Cloud", items: ["Oracle Cloud (OCI)", "AWS", "Google Cloud Platform (GCP)"] },
    { category: "Tools & DevOps", items: ["Docker", "Git", "GitHub", "n8n Automation", "Jira", "VS Code", "Figma"] }
];

export const education = [
    {
        title: "Bachelor of Engineering in Information Science and Engineering",
        school: "P.E.S. College of Engineering, Mandya",
        year: "2021 – 2025",
        result: "CGPA: 8.2",
        image: "/images/educat/college.jpg"
    }
];

export const projects = [
    {
        title: "Polygnan Learning Management System (LMS)",
        tech: ["Django Ninja", "React", "PostgreSQL", "Docker", "RBAC"],
        description: "Architected a scalable LMS to support cohort-based learning for 500+ concurrent users. Designed a polymorphic assessment engine using PostgreSQL & JSONField for dynamic quiz creation. Implemented Role-Based Access Control (RBAC) with JWT authentication, reducing administrative overhead by 40%.",
        link: "#",
        code: "https://github.com/GowthamCK"
    },
    {
        title: "Real-Time Friend-or-Foe Detection System",
        tech: ["Python", "Raspberry Pi", "YOLO", "OpenCV"],
        description: "Engineered an end-to-end detection system by creating a custom dataset of 2,000+ IR images and deploying a fine-tuned YOLO model on a Raspberry Pi for real-time edge inference. Developed a unified control center UI for live GPS visualization and geotagged alerts.",
        link: "#",
        code: "https://github.com/GowthamCK"
    },
    {
        title: "Real-Time Exercise Tracking (Research Project)",
        tech: ["YOLOv8", "CUDA", "Deep Learning"],
        description: "Fine-tuned a YOLO nano model for a real-time tracking application (Kreeda.ai). Engineered a 30% dataset increase (6,000+ images) via strategic augmentation to mitigate overfitting and benchmarked model accuracy against open-source solutions for optimal web deployment.",
        link: "#",
        code: "https://github.com/GowthamCK"
    },
    {
        title: "E-commerce Platform with Shopify API",
        tech: ["React", "Shopify Storefront API"],
        description: "Engineered a headless e-commerce platform supporting 100+ concurrent users. Reduced maintenance overhead by 90% by empowering non-technical staff to manage content via API integration.",
        link: "#",
        code: "https://github.com/GowthamCK"
    }
];

export const certifications = [
    "Oracle AI Vector Search Certified Professional (1Z0-184-25)",
    "Oracle Cloud Infrastructure 2025 AI Foundations Associate (1Z0-1122-25)",
    "Oracle Cloud Infrastructure 2025 Certified Foundations Associate (1Z0-1085-25)",
    "AWS Academy: Cloud Foundations & Cloud Architecting",
    "Google Cloud: Cloud Computing Foundations & Digital Transformation"
];

export const achievements = [
    {
        title: "Winner, MSME Hackathon 4.0 (2025)",
        desc: "Secured ₹15 Lakhs in project funding from the Ministry of MSME for a novel blockchain tech solution."
    },
    {
        title: "Excellent Student of the Chapter Award 2025",
        desc: "Awarded by ISTE-PESCE."
    },
    {
        title: "Best Performer of 2023",
        desc: "Awarded by ISTE-PESCE for leadership and contribution."
    },
    {
        title: "State Finalist, Manthan 2023 & Top 100, SmartIDEAthon",
        desc: "Recognized for sustainable startup concepts."
    },
    {
        title: "Finalist, Rajasthan Police Hackathon 1.0",
        desc: "Developed a drone prototype for defense use cases."
    }
];

export const leadership = [
    {
        role: "Former Vice President, ISTE-PESCE",
        desc: "Spearheaded 40+ technical events, growing club participation by 60%."
    },
    {
        role: "Ex-Co-organizer, GDG on Campus-PESCE",
        desc: "Organized workshops focused on Google technologies."
    },
    {
        role: "Former Placement Coordinator",
        desc: "Mentored juniors in technical skills and resume building."
    }
];
