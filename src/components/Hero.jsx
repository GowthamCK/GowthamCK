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
            {/* You can swap between these futuristic grids:
                1. hex-grid (Original Honeycomb)
                2. circuit-bg (Original Circuit Lines)
                3. dot-matrix-bg (Retina LED Dots)
                4. synthwave-grid (3D Perspective Floor)
                5. blueprint-grid (Architectural Schematic)
                6. radar-grid (Concentric Sonar Rings)
                7. isometric-grid (Tactical Angled Map)
                8. warp-grid (Animated Moving Hyperspace)
                9. target-hud (Sniper Crosshair HUD)
                10. hyper-grid-3d (High-Speed Infinite 3D Corridor)
                11. matrix-wall-3d (Vertical 3D Data Walls)
                12. portal-grid (Spinning 3D Stargate Floor)
            */}
            <motion.div style={{ opacity }} className="absolute inset-0 hex-grid" />
            {/*<motion.div style={{ opacity }} className="absolute inset-0 dot-matrix-bg opacity-30" />*/}

            <motion.div style={{ y, opacity }} className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-0">
                {/* System status line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
                >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shrink-0" />
                    <span className="font-mono text-[8px] sm:text-[10px] text-accent/50 tracking-[0.15em] sm:tracking-[0.3em] uppercase">
                        SYSTEM {personalInfo.systemStatus} — NEURAL INTERFACE v2.1
                    </span>
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shrink-0" />
                </motion.div>

                {/* Main headline with glitch */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="glitch-text text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-tp tracking-tight sm:tracking-tighter leading-[1.05] sm:leading-[0.9] break-words"
                    data-text={personalInfo.headline || personalInfo.name}
                >
                    {personalInfo.headline || personalInfo.name}
                </motion.h1>

                {/* Typing designation (Semantic H2 for LLM/SEO ranking) */}
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="mt-6 sm:mt-8 font-mono text-xs sm:text-sm md:text-base text-accent/70 tracking-wider sm:tracking-widest"
                >
                    <span>{displayedRole}</span>
                    <span className="animate-pulse ml-1">▋</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mt-5 sm:mt-6 text-ts text-[13px] sm:text-[14px] max-w-2xl mx-auto leading-relaxed px-2"
                >
                    {personalInfo.subtitle}
                </motion.p>

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4"
                >
                    {personalInfo.socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.name}
                            aria-label={social.name}
                            className="group w-10 h-10 sm:w-11 sm:h-11 border border-surface-border rounded-xl flex items-center justify-center text-ts hover:text-accent hover:border-accent/40 transition-all duration-300"
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
                    className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-8 font-mono text-[8px] sm:text-[9px] text-tm tracking-wider sm:tracking-widest"
                >
                    <span>LAT: 12.9716° N</span>
                    <span className="text-accent/20 hidden sm:inline">|</span>
                    <span>NODE: BLR_PRIME</span>
                    <span className="text-accent/20 hidden sm:inline">|</span>
                    <span>STATUS: ACTIVE</span>
                </motion.div>
            </motion.div>

            {/* Corner brackets */}
            <div className="hidden sm:block absolute top-20 left-6 w-12 h-12 border-l border-t border-accent/10" />
            <div className="hidden sm:block absolute top-20 right-6 w-12 h-12 border-r border-t border-accent/10" />
            <div className="hidden sm:block absolute bottom-20 left-6 w-12 h-12 border-l border-b border-accent/10" />
            <div className="hidden sm:block absolute bottom-20 right-6 w-12 h-12 border-r border-b border-accent/10" />
        </section>
    );
}
