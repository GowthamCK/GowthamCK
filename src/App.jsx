import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import TechStack from './components/TechStack';
import Leadership from './components/Leadership';
import ChatTerminal from './components/ChatTerminal';
import Footer from './components/Footer';

function BootScreen({ onComplete }) {
    const [lines, setLines] = useState([]);
    const bootSequence = [
        { text: "> INITIALIZING NEURAL INTERFACE...", delay: 0 },
        { text: "> LOADING QUANTUM MODULES.........", delay: 400 },
        { text: "> ESTABLISHING EDGE CONNECTIONS...", delay: 800 },
        { text: "> DECRYPTING PORTFOLIO DATA.......", delay: 1200 },
        { text: "> RENDERING HOLOGRAPHIC DISPLAY...", delay: 1600 },
        { text: "> WEBSITE UNDER CONSTRUCTION...", delay: 2000, accent: true },
        { text: "> SYSTEM READY ✓", delay: 2400, accent: true },
    ];

    useEffect(() => {
        bootSequence.forEach(({ text, delay, accent }) => {
            setTimeout(() => {
                setLines(prev => [...prev, { text, accent }]);
            }, delay);
        });
        setTimeout(onComplete, 3200);
    }, []);

    return (
        <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-surface flex items-center justify-center"
        >
            <div className="max-w-lg w-full px-8">
                <div className="mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="font-mono text-[10px] text-accent/50 tracking-[0.3em]">
                        GCK_BOOT_SEQUENCE
                    </span>
                </div>

                <div className="border border-surface-border rounded-xl p-6 bg-surface-raised">
                    <div className="space-y-2">
                        {lines.map((line, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`font-mono text-[11px] tracking-wider ${
                                    line.accent ? 'text-accent font-bold' : 'text-tp font-medium'
                                }`}
                            >
                                {line.text}
                            </motion.p>
                        ))}
                        {lines.length < bootSequence.length && (
                            <span className="inline-block font-mono text-accent text-sm animate-pulse">▋</span>
                        )}
                    </div>
                </div>

                <div className="mt-4 h-[2px] bg-surface-border rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="h-full bg-accent/50"
                    />
                </div>
            </div>
        </motion.div>
    );
}

function App() {
    const [booting, setBooting] = useState(true);

    return (
        <ThemeProvider>
            <div className="min-h-screen text-tp overflow-x-hidden font-sans scanline-overlay crt-vignette noise-bg">
                <AnimatePresence>
                    {booting && <BootScreen onComplete={() => setBooting(false)} />}
                </AnimatePresence>

                {!booting && (
                    <>
                        <ParticleCanvas />
                        <div className="relative z-10 space-y-20 sm:space-y-28 md:space-y-36">
                            <Navbar />
                            <Hero />
                            <About />
                            <Education />
                            <Experience />
                            <Projects />
                            <Achievements />
                            <Certifications />
                            <TechStack />
                            <Leadership />
                            <ChatTerminal />
                            <Footer />
                        </div>
                    </>
                )}
            </div>
        </ThemeProvider>
    );
}

export default App;
