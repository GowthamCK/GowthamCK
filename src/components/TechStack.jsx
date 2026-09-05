import { motion } from 'framer-motion';
import { techStack } from '../data';
import { SectionHeader } from './About';

const categories = [
    { key: 'ai', label: 'APPLIED RESEARCH & AI', dot: 'bg-purple-400', badgeStyle: 'border-purple-500/30 text-purple-200/90 hover:border-purple-400 hover:text-purple-400' },
    { key: 'se', label: 'SOFTWARE ENGINEERING', dot: 'bg-accent', badgeStyle: 'border-accent/30 text-accent/90 hover:border-accent hover:text-accent' },
    { key: 'systems', label: 'SYSTEMS & INFRASTRUCTURE', dot: 'bg-blue-400', badgeStyle: 'border-blue-500/30 text-blue-200/90 hover:border-blue-400 hover:text-blue-400' },
    { key: 'languages', label: 'LANGUAGES & FRAMEWORKS', dot: 'bg-emerald-400', badgeStyle: 'border-emerald-500/30 text-emerald-200/90 hover:border-emerald-400 hover:text-emerald-400' },
];

export default function TechStack() {
    return (
        <section id="stack" className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeader code="SYS_09" label="TECH_ARSENAL" title="Neural Toolkit & ATS Matrix" />

                <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
                    {categories.map((cat, idx) => {
                        const items = techStack.filter(t => t.category === cat.key);
                        return (
                            <motion.div
                                key={cat.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="holo-card rounded-2xl p-4 sm:p-6 border border-surface-border"
                            >
                                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-surface-border">
                                    <span className={`w-2 h-2 rounded-full ${cat.dot} animate-pulse`} />
                                    <h3 className="font-mono text-[11px] sm:text-xs text-tp tracking-widest font-semibold uppercase">
                                        {cat.label}
                                    </h3>
                                    <span className="ml-auto font-mono text-[9px] text-tm">
                                        [{items.length} MODULES]
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                                    {items.map((tech) => (
                                        <motion.span
                                            key={tech.name}
                                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                            className={`font-mono text-[11px] sm:text-[12px] border rounded-lg px-3 sm:px-4 py-1.5 transition-all duration-300 cursor-default bg-surface/50 ${cat.badgeStyle}`}
                                        >
                                            {tech.name}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-10 sm:mt-14 border border-surface-border rounded-xl p-5 font-mono text-[10px] text-accent/30 tracking-widest"
                >
                    <p>&gt; LOADING_NEURAL_MODULES... <span className="text-accent/60">COMPLETE</span></p>
                    <p>&gt; ACTIVE_NODES: <span className="text-accent/60">{techStack.length} VERIFIED ATS CAPABILITIES</span></p>
                    <p>&gt; SYSTEM_INTEGRITY: <span className="text-accent/60">100%</span> <span className="terminal-cursor" /></p>
                </motion.div>
            </div>
        </section>
    );
}
