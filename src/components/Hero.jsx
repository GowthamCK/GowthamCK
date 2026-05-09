import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo } from '../data';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const [displayedRole, setDisplayedRole] = useState('');
    const fullRole = `>> ${personalInfo.designation}`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedRole(fullRole.slice(0, i + 1));
            i++;
            if (i >= fullRole.length) clearInterval(interval);
        }, 40);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background layers */}
            <div className="absolute inset-0 hex-grid" />
            <div className="absolute inset-0 circuit-bg" />

            <motion.div style={{ y, opacity }} className="relative z-10 text-center max-w-5xl mx-auto px-6">
                {/* System status line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center justify-center gap-3 mb-8"
                >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    <span className="font-mono text-[10px] text-accent/50 tracking-[0.3em]">
                        SYSTEM {personalInfo.systemStatus} — NEURAL INTERFACE v2.1
                    </span>
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                </motion.div>

                {/* Main name with glitch */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="glitch-text text-6xl md:text-8xl lg:text-9xl font-black text-tp tracking-tighter leading-[0.9]"
                    data-text={personalInfo.name}
                >
                    {personalInfo.name}
                </motion.h1>

                {/* Typing designation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="mt-8 font-mono text-sm md:text-base text-accent/70 tracking-widest"
                >
                    <span>{displayedRole}</span>
                    <span className="animate-pulse ml-1">▋</span>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mt-6 text-ts text-[14px] max-w-2xl mx-auto leading-relaxed"
                >
                    {personalInfo.subtitle}
                </motion.p>

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="mt-10 flex items-center justify-center gap-4"
                >
                    {personalInfo.socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-11 h-11 border border-surface-border rounded-xl flex items-center justify-center text-ts hover:text-accent hover:border-accent/40 transition-all duration-300"
                        >
                            <social.icon size={16} strokeWidth={1.5} />
                        </a>
                    ))}
                </motion.div>

                {/* Coordinate overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="mt-16 flex items-center justify-center gap-8 font-mono text-[9px] text-tm tracking-widest"
                >
                    <span>LAT: 12.9716° N</span>
                    <span className="text-accent/20">|</span>
                    <span>NODE: BLR_PRIME</span>
                    <span className="text-accent/20">|</span>
                    <span>STATUS: ACTIVE</span>
                </motion.div>
            </motion.div>

            {/* Corner brackets */}
            <div className="absolute top-20 left-6 w-12 h-12 border-l border-t border-accent/10" />
            <div className="absolute top-20 right-6 w-12 h-12 border-r border-t border-accent/10" />
            <div className="absolute bottom-20 left-6 w-12 h-12 border-l border-b border-accent/10" />
            <div className="absolute bottom-20 right-6 w-12 h-12 border-r border-b border-accent/10" />
        </section>
    );
}
