import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Sparkles, RotateCcw, ShieldCheck } from 'lucide-react';
import { experience } from '../data';
import { SectionHeader } from './About';

// Suggestion chips for quick one-touch mobile/desktop queries
const SUGGESTION_CHIPS = [
    { label: "⚡ MSME ₹15L Grant", query: "Tell me about the MSME hackathon grant" },
    { label: "🛡️ Friend-or-Foe AI", query: "Explain the Friend-or-Foe detection project" },
    { label: "🔬 IISc Bangalore Research", query: "What did you work on at IISc Bangalore?" },
    { label: "📜 13 Verified Badges", query: "What certifications and badges do you have?" },
    { label: "💻 Tech Stack", query: "What technologies and languages do you use?" },
    { label: "🎓 Education & CGPA", query: "Tell me about your education and CGPA" },
    { label: "📬 Contact Gowtham", query: "How do I contact Gowtham?" }
];

const INITIAL_MESSAGES = [
    {
        id: 'init-1',
        type: 'system',
        text: 'GCK_NEURAL_CLI [Version 2.4.0-ghpages]\nInteractive terminal grounded strictly on Gowtham C K\'s verified profile.\nType a question, enter a command (e.g. `help`, `projects`, `certs`), or tap a quick chip below.'
    },
    {
        id: 'init-2',
        type: 'bot',
        text: 'Greetings! I am Gowtham\'s interactive portfolio bot. Ask me anything about his AI research at IISc Bangalore, the MSME ₹15L grant, his published patent, engineering projects, or verified cloud credentials.'
    }
];

export default function ChatTerminal() {
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const logContainerRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom of terminal log when new messages arrive
    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    // Query processing engine: 100% client-side, zero backend required
    const processQuery = (rawText) => {
        const q = rawText.trim().toLowerCase();

        // 1. Clear command
        if (q === 'clear' || q === 'cls' || q === 'reset') {
            setMessages(INITIAL_MESSAGES);
            return;
        }

        // 2. Help command
        if (q === 'help' || q === 'commands' || q === 'man' || q === '?') {
            return {
                text: `Available Terminal Commands & Queries:
• \`about\`      : Summary of Gowtham's profile & focus areas
• \`projects\`   : Key engineering projects (Sentinel, LMS, E-Commerce)
• \`msme\`       : ₹15 Lakh MSME grant & Blockchain patent details
• \`iisc\`       : Research internship at Aerospace Dept, IISc Bangalore
• \`certs\`      : 13 verified credentials (Oracle, AWS Credly, Gemini, Coursera)
• \`exp\`        : Professional experience (Polygnan, IISc)
• \`edu\`        : RV University (CGPA 10) & PESCE (CGPA 8.2)
• \`stack\`      : Core languages, AI/ML, Cloud & DevOps toolkit
• \`contact\`    : Direct email and social links
• \`clear\`      : Reset the terminal log

You can also ask natural questions like: "Where did he intern?", "What is his CGPA?", or "Tell me about his YOLO project".`
            };
        }

        // 3. MSME Hackathon / ₹15 Lakhs / Grant / Funding
        if (q.includes('msme') || q.includes('15 lakh') || q.includes('15l') || q.includes('grant') || q.includes('hackathon') || q.includes('funding')) {
            return {
                text: `🏆 NATIONAL MSME HACKATHON 4.0 WINNER:
• Award: Secured ₹15 Lakhs in project grant funding from the Ministry of MSME, Government of India.
• Project: Blockchain-Enabled Carbon Capture Verification & Automated Emission Credit Trading System.
• Patent Status: Co-Inventor of a published patent for this novel blockchain architecture (Published 2026).
• Key Tech: Blockchain, Smart Contracts, Carbon Verification, IoT Integration.`
            };
        }

        // 4. Patent
        if (q.includes('patent') || q.includes('carbon capture') || q.includes('emission credit')) {
            return {
                text: `📜 PUBLISHED PATENT:
• Title: "Blockchain-Enabled System for Carbon Capture Verification and Automated Emission Credit Trading"
• Role: Co-Inventor (Published 2026)
• Impact: Automates verification of carbon credits and eliminates double-counting using decentralized cryptographic ledgers.`
            };
        }

        // 5. IISc Bangalore / Aerospace / Kreeda / YOLO
        if (q.includes('iisc') || q.includes('aerospace') || q.includes('kreeda') || q.includes('exercise') || q.includes('cuda')) {
            return {
                text: `🔬 RESEARCH / PROJECT INTERN — Aerospace Dept, IISc Bangalore (Oct 2024 – Jan 2025):
• Project Kreeda.ai: Engineered real-time exercise pose tracking by fine-tuning YOLO nano architectures for edge efficiency.
• CUDA Acceleration: Benchmarked and optimized model inference using CUDA to ensure sub-second latency for seamless web deployment.
• Dataset Augmentation: Strategically augmented training datasets by +30% (6,000+ custom samples) to mitigate overfitting.
• Performance: Analyzed size vs accuracy tradeoffs against open-source benchmarks to guarantee high fps on low-power devices.`
            };
        }

        // 6. Polygnan Foundation / LMS
        if (q.includes('polygnan') || q.includes('lms') || q.includes('cortex') || q.includes('stem') || q.includes('robotics')) {
            return {
                text: `🏢 POLYGNAN FOUNDATION EXPERIENCE:
• AI Intern (Nov 2025 – Dec 2025): Architected a scalable LMS using Django Ninja & React with RBAC supporting 500+ active users. Built automated n8n workflows and RAG-based AI agents.
• Fellow (Apr 2025 – Nov 2025): Directed 4 STEM programs for 150+ students; authored K-12 curricula for Robotics & Design Thinking.
• Engineering Intern (Feb 2025 – Mar 2025): Spearheaded web development research for the foundation's digital modernization.`
            };
        }

        // 7. Friend-or-Foe / Sentinel / Raspberry Pi
        if (q.includes('friend') || q.includes('foe') || q.includes('sentinel') || q.includes('raspberry') || q.includes('onnx')) {
            return {
                text: `🛡️ REAL-TIME FRIEND-OR-FOE DETECTION SYSTEM [PROJECT_SENTINEL]:
• Edge Detection: Deployed fine-tuned YOLO model directly onto a Raspberry Pi for low-latency target classification.
• Optimization: Accelerated ONNX runtime inference, achieving sub-50ms latency (<50ms/frame).
• Control Center: Python ground control software featuring wireless IR video streaming, live GPS mapping, and automated geotagged alerts.`
            };
        }

        // 8. Projects general
        if (q === 'projects' || q === 'proj' || q.includes('project') || q.includes('portfolio') || q.includes('built')) {
            return {
                text: `🚀 KEY ENGINEERING PROJECTS:
1. Friend-or-Foe Detection System (Raspberry Pi, YOLO, ONNX, Edge AI) — <50ms latency wireless IR target classification.
2. Scalable LMS Platform (Django Ninja, React, PostgreSQL, Docker, RBAC) — 500+ active users with assessment engine.
3. MSME Carbon Credit Trading System (Blockchain, Smart Contracts) — ₹15L grant-funded & published patent.
4. Headless E-commerce Platform (React, Shopify API, Context API) — 90% reduction in maintenance overhead.`
            };
        }

        // 9. Certifications / Badges / Credly / Oracle / Google / AWS
        if (q === 'certs' || q === 'certifications' || q.includes('badge') || q.includes('credential') || q.includes('oracle') || q.includes('aws') || q.includes('gemini') || q.includes('credly')) {
            return {
                text: `🎖️ 13 VERIFIED OFFICIAL CREDENTIALS:
• Oracle (6 Badges): OCI 2025 DevOps Professional, Generative AI Professional, Developer Professional, AI Vector Search Professional, OCI Foundations, AI Foundations.
• AWS (2 Credly Badges): AWS Academy Cloud Architecting & Cloud Foundations.
• Google for Education (1 Badge): Gemini Certified University Student (Credential.net).
• Coursera (4 Certificates): Quantum Computing Specialization (Packt), Qiskit, Python for QC, Agile Software Dev (Univ of Minnesota).
• Live Directory: View the verified badges in the SYS_07 registry above or on Credly: https://www.credly.com/users/gowtham-c-k/badges/credly`
            };
        }

        // 10. Education / College / CGPA / Degrees
        if (q === 'edu' || q === 'education' || q.includes('college') || q.includes('university') || q.includes('cgpa') || q.includes('degree') || q.includes('rvu') || q.includes('pesce') || q.includes('study')) {
            return {
                text: `🎓 ACADEMIC BACKGROUND:
1. RV University (Dec 2025 – Apr 2026):
   • International Certification in Computer Science & Software Engineering (ICCSSE)
   • Current Result: CGPA 10.0 / 10.0
2. P.E.S. College of Engineering (PESCE, 2021 – 2025):
   • Bachelor of Engineering (B.E.) in Information Science and Engineering
   • Final Result: CGPA 8.2 / 10.0
   • Honors: ISTE Excellent Student of the Chapter Award (2025) & Best Performer Award (2023)`
            };
        }

        // 11. Experience general
        if (q === 'exp' || q === 'experience' || q.includes('intern') || q.includes('career') || q.includes('work') || q.includes('jobs')) {
            return {
                text: `💼 PROFESSIONAL EXPERIENCE:
1. Polygnan Foundation (Bangalore) — AI Intern, Fellow & Engineering Intern (Feb 2025 – Dec 2025)
   • Built scalable LMS (Django Ninja/React) for 500+ users and automated n8n RAG pipelines.
2. IISc Bangalore (Aerospace Dept) — Research Intern (Oct 2024 – Jan 2025)
   • Fine-tuned YOLO nano models for Kreeda.ai, accelerated inference via CUDA, augmented 6,000+ samples.`
            };
        }

        // 12. Tech Stack / Skills / Languages
        if (q === 'stack' || q === 'skills' || q.includes('stack') || q.includes('python') || q.includes('react') || q.includes('docker') || q.includes('tools') || q.includes('language') || q.includes('technolog')) {
            return {
                text: `⚡ TECH STACK & SYSTEM SPECS:
• Core Languages: Python, Java, JavaScript, SQL, HTML5/CSS3
• Frameworks & Libraries: React, Django, Django Ninja, OpenCV, YOLO
• AI / Deep Tech: Model Fine-Tuning, Edge AI, CUDA, ONNX, RAG, LLMs
• Cloud & DevOps: AWS, Oracle Cloud (OCI), Google Cloud (GCP), Azure, Docker, Git, n8n, Jira
• Databases: PostgreSQL, SQLite, Vector Databases`
            };
        }

        // 13. Contact / Email / Socials / Hire
        if (q === 'contact' || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('linkedin') || q.includes('github') || q.includes('touch') || q.includes('message')) {
            return {
                text: `📬 GET IN TOUCH WITH GOWTHAM:
• Email: ckgowtham12@gmail.com
• LinkedIn: https://www.linkedin.com/in/gowtham-c-k/
• GitHub: https://github.com/GowthamCK
• Credly: https://www.credly.com/users/gowtham-c-k/badges/credly
• Google Dev: https://g.dev/gowthamck
• Base Location: Mysore / Bangalore, Karnataka, India
• Open to: Deep Tech, AI Engineering, Full-Stack & Edge AI opportunities.`
            };
        }

        // 14. About / Who is Gowtham / Bio
        if (q === 'about' || q.includes('who is') || q.includes('who are') || q.includes('bio') || q.includes('introduce') || q.includes('hello') || q.includes('hi') || q.includes('hey')) {
            return {
                text: `👤 GOWTHAM C K [NEURAL_ARCHITECT // DEEP_TECH_ENGINEER]:
• Bio: Tech Explorer and Software Engineer passionate about Deep Tech, AI, and Quantum Algorithms.
• Current Focus: ICCSSE Scholar at RV University (CGPA 10), actively bridging AI research and production systems.
• Major Milestones: ₹15L MSME National Hackathon Grant Winner, Published Blockchain Patent Co-Inventor, 13 Verified Cloud/AI Credentials.
• Location: Mysore & Bangalore, India.`
            };
        }

        // 15. Strict Guardrail for unrelated / out-of-scope queries
        return {
            isGuardrail: true,
            text: `⚠️ [TERMINAL_GUARD]: I am Gowtham's neural portfolio assistant. I only provide verified factual information regarding Gowtham C K's career, research, projects, skills, education, and achievements.

Try asking about:
• "Tell me about the ₹15L MSME grant"
• "What research did he do at IISc Bangalore?"
• "Explain the Friend-or-Foe edge AI project"
• "What are his 13 verified certifications?"
• "What is his tech stack and CGPA?"
• "How can I contact him?"`
        };
    };

    const handleSend = (textToSend) => {
        const text = textToSend || input;
        if (!text.trim()) return;

        const userMsg = {
            id: `usr-${Date.now()}`,
            type: 'user',
            text: text.trim()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Natural typing delay for realistic terminal response
        setTimeout(() => {
            const response = processQuery(text);
            if (response) {
                const botMsg = {
                    id: `bot-${Date.now()}`,
                    type: response.isGuardrail ? 'guardrail' : 'bot',
                    text: response.text
                };
                setMessages(prev => [...prev, botMsg]);
            }
            setIsTyping(false);
        }, 350);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <section id="terminal" className="relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <SectionHeader code="SYS_08" label="NEURAL_TERMINAL" title="Interactive Chatbot" />

                <div className="mt-8 sm:mt-10 border border-surface-border rounded-2xl bg-surface-raised/95 shadow-2xl overflow-hidden backdrop-blur-xl">
                    {/* Terminal Window Header */}
                    <div className="bg-surface-overlay px-4 py-3 border-b border-surface-border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
                            <span className="font-mono text-[11px] sm:text-xs text-ts ml-2 flex items-center gap-1.5">
                                <Terminal size={13} className="text-accent" />
                                <span>gowtham@neural-cli: ~ (gh-pages ready)</span>
                            </span>
                        </div>

                        <div className="flex items-center gap-3 font-mono text-[10px] text-accent/60">
                            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400 font-semibold">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                GROUNDED_MODE: ACTIVE
                            </span>
                            <button
                                onClick={() => setMessages(INITIAL_MESSAGES)}
                                title="Reset Terminal"
                                className="hover:text-accent p-1 transition-colors flex items-center gap-1"
                            >
                                <RotateCcw size={12} />
                                <span className="hidden sm:inline">RESET</span>
                            </button>
                        </div>
                    </div>

                    {/* Quick suggestion chips */}
                    <div className="bg-surface/60 border-b border-surface-border px-4 py-2.5 overflow-x-auto flex items-center gap-2 scrollbar-none">
                        <span className="font-mono text-[9px] text-tm uppercase shrink-0 flex items-center gap-1">
                            <Sparkles size={11} className="text-accent" />
                            QUICK_PROMPTS:
                        </span>
                        {SUGGESTION_CHIPS.map((chip, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSend(chip.query)}
                                className="shrink-0 px-2.5 py-1 rounded-lg bg-surface-raised border border-surface-border font-mono text-[10px] text-ts hover:text-accent hover:border-accent/40 hover:bg-surface-overlay transition-all duration-200"
                            >
                                {chip.label}
                            </button>
                        ))}
                    </div>

                    {/* Terminal Message Stream */}
                    <div
                        ref={logContainerRef}
                        className="p-4 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed space-y-4 max-h-[380px] sm:max-h-[440px] overflow-y-auto"
                    >
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className={`rounded-xl p-3 sm:p-4 ${
                                    msg.type === 'user'
                                        ? 'bg-accent/10 border border-accent/30 text-tp ml-4 sm:ml-12'
                                        : msg.type === 'guardrail'
                                        ? 'bg-amber-500/10 border border-amber-500/30 text-amber-300 mr-4 sm:mr-12'
                                        : msg.type === 'system'
                                        ? 'bg-surface-overlay/80 border border-surface-border text-ts text-[11px]'
                                        : 'bg-surface-overlay border border-surface-border text-tp mr-4 sm:mr-12'
                                }`}
                            >
                                {msg.type === 'user' && (
                                    <div className="text-[10px] text-accent/70 font-semibold mb-1 flex items-center gap-1.5">
                                        <span>guest@gowtham:~$</span>
                                    </div>
                                )}
                                {msg.type === 'bot' && (
                                    <div className="text-[10px] text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                                        <ShieldCheck size={12} />
                                        <span>GOWTHAM_AI [VERIFIED FACT]</span>
                                    </div>
                                )}
                                <pre className="font-mono whitespace-pre-wrap break-words leading-relaxed">
                                    {msg.text}
                                </pre>
                            </motion.div>
                        ))}

                        {isTyping && (
                            <div className="flex items-center gap-2 text-accent font-mono text-xs p-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                                <span>PROCESSING_QUERY...</span>
                            </div>
                        )}
                    </div>

                    {/* Command Prompt Input Area */}
                    <div className="p-3 sm:p-4 bg-surface-overlay border-t border-surface-border flex items-center gap-2 sm:gap-3">
                        <span className="font-mono text-xs sm:text-sm text-accent hidden xs:inline shrink-0 font-bold">
                            guest@gowtham:~$
                        </span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask about IISc research, MSME grant, projects, skills, certs..."
                            className="flex-1 bg-surface-raised border border-surface-border rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 font-mono text-xs sm:text-sm text-tp placeholder:text-tm focus:outline-none focus:border-accent/60 transition-colors"
                        />
                        <button
                            onClick={() => handleSend()}
                            disabled={!input.trim()}
                            className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-accent text-surface font-mono text-xs sm:text-sm font-bold flex items-center gap-1.5 hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shrink-0"
                            aria-label="Send Query"
                        >
                            <span className="hidden sm:inline">SEND</span>
                            <Send size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
