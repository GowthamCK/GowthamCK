import { motion } from 'framer-motion';
import { aboutText, systemSpecs } from '../data';

function SectionHeader({ code, label, title }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                <span className="font-mono text-[9px] sm:text-[10px] text-accent/50 tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                    {code} // {label}
                </span>
                <div className="h-[1px] flex-1 bg-surface-border max-w-[60px] sm:max-w-[100px]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-tp tracking-tight">
                {title}
            </h2>
        </motion.div>
    );
}

export { SectionHeader };

export default function About() {
    return (
        <section id="about" className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeader code="SYS_01" label="ABOUT_MODULE" title="System Profile" />

                <div className="mt-8 sm:mt-14 grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 items-start">
                    <div className="space-y-5 sm:space-y-6">
                        {aboutText.map((paragraph, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="text-ts leading-[1.8] sm:leading-[1.85] text-[13px] sm:text-[14px]"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="holo-card rounded-xl p-5 neon-border block mt-4 lg:mt-0"
                    >
                        <div className="flex items-center gap-2 mb-5 pb-3 border-b border-surface-border">
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                                <div className="w-2 h-2 rounded-full bg-green-500/60" />
                            </div>
                            <span className="font-mono text-[9px] text-tm tracking-widest ml-2">
                                SYSTEM_SPECS.terminal
                            </span>
                        </div>

                        <div className="space-y-4">
                            {systemSpecs.map((spec, i) => (
                                <div key={i}>
                                    <p className="font-mono text-[9px] text-accent/40 tracking-[0.2em]">
                                        &gt; {spec.key}
                                    </p>
                                    <div className="flex items-center justify-between mt-1">
                                        <p className="text-sm text-tp font-medium">{spec.value}</p>
                                        <span className="font-mono text-[8px] text-accent/25 tracking-widest">
                                            [{spec.code}]
                                        </span>
                                    </div>
                                    {i < systemSpecs.length - 1 && (
                                        <div className="mt-3 h-[1px] bg-surface-border" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 pt-3 border-t border-surface-border">
                            <p className="font-mono text-[8px] text-accent/20 tracking-widest terminal-cursor">
                                STATUS: ALL_SYSTEMS_NOMINAL
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
