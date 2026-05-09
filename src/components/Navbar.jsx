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
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? 'bg-surface/90 backdrop-blur-xl border-b border-surface-border'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
                        <span className="font-mono text-xs font-bold text-accent tracking-widest">
                            GCK_SYS
                        </span>
                    </a>

                    <div className="hidden lg:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="group relative font-mono text-[10px] text-ts hover:text-accent transition-colors duration-300 tracking-widest px-3 py-2"
                            >
                                <span className="text-accent/30 mr-1">{link.code}.</span>
                                {link.label}
                                <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            className="w-8 h-8 rounded-lg border border-surface-border flex items-center justify-center text-ts hover:text-accent hover:border-accent/30 transition-all duration-300"
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

                        <span className="hidden lg:block font-mono text-[10px] text-tm tracking-widest">
                            {time}
                        </span>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden flex flex-col gap-1.5 p-2"
                            aria-label="Toggle menu"
                        >
                            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-5 h-[1px] bg-accent" />
                            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-[1px] bg-accent" />
                            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-5 h-[1px] bg-accent" />
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
                        className="fixed inset-0 z-40 bg-surface/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-5 lg:hidden"
                    >
                        <div className="absolute top-6 left-6 font-mono text-[10px] text-accent/40">
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
