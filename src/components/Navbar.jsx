import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
    { label: "ABOUT", href: "#about", code: "01" },
    { label: "EDUCATION", href: "#education", code: "02" },
    { label: "EXPERIENCE", href: "#experience", code: "03" },
    { label: "PROJECTS", href: "#projects", code: "04" },
    { label: "ACHIEVEMENTS", href: "#achievements", code: "05" },
    { label: "CERTS", href: "#certifications", code: "06" },
    { label: "STACK", href: "#stack", code: "07" },
    { label: "LEADERSHIP", href: "#leadership", code: "08" },
    { label: "TERMINAL", href: "#terminal", code: "09" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [time, setTime] = useState('');
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const tick = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false }));
        };
        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none"
            >
                <div className={`max-w-7xl mx-auto h-14 px-4 sm:px-6 rounded-2xl flex items-center justify-between pointer-events-auto transition-all duration-300 border ${
                    scrolled
                        ? 'bg-surface/85 backdrop-blur-2xl border-accent/25 shadow-2xl shadow-black/40'
                        : 'bg-surface/60 backdrop-blur-xl border-surface-border/80 shadow-lg shadow-black/20'
                }`}>
                    <a href="#" className="flex items-center gap-2.5 group">
                        <div className="relative flex items-center justify-center w-2.5 h-2.5">
                            <span className="absolute w-full h-full rounded-full bg-accent/40 animate-ping" />
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        </div>
                        <span className="font-mono text-xs font-extrabold text-tp tracking-widest group-hover:text-accent transition-colors">
                            GCK<span className="text-accent">_SYS</span>
                        </span>
                    </a>

                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="group relative font-mono text-[10.5px] text-ts hover:text-accent transition-all duration-200 tracking-wider px-2.5 py-1.5 rounded-lg hover:bg-surface-raised/80"
                            >
                                <span className="text-accent/40 mr-1 text-[9px]">{link.code}.</span>
                                <span>{link.label}</span>
                                <span className="absolute bottom-0.5 left-2.5 right-2.5 h-[1.5px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2.5">
                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            className="w-8 h-8 rounded-xl border border-surface-border/90 bg-surface-raised/60 flex items-center justify-center text-ts hover:text-accent hover:border-accent/40 transition-all duration-300 shadow-sm"
                            aria-label="Toggle theme"
                        >
                            <motion.div
                                key={theme}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                            </motion.div>
                        </button>

                        <span className="hidden sm:inline-block font-mono text-[10px] text-tm tracking-widest px-2.5 py-1 rounded-lg bg-surface-raised/50 border border-surface-border/60">
                            {time}
                        </span>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-surface-raised/80 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-5 h-[1.5px] bg-accent" />
                            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-[1.5px] bg-accent" />
                            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-5 h-[1.5px] bg-accent" />
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-surface/98 backdrop-blur-2xl flex flex-col items-center justify-start overflow-y-auto pt-24 pb-12 px-6 gap-5 lg:hidden"
                    >
                        <div className="font-mono text-[10px] text-accent/40 mb-2">
                            NAVIGATION_MATRIX
                        </div>
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.06 }}
                                className="font-mono text-lg text-tp hover:text-accent transition-colors flex items-center gap-3"
                            >
                                <span className="text-accent/30 text-sm">{link.code}</span>
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
