import { motion } from 'framer-motion';
import { techStack } from '../data';
import { SectionHeader } from './About';

const categoryColors = {
    core: 'border-accent/20 hover:border-accent/50 hover:text-accent',
    ai: 'border-purple-500/20 hover:border-purple-400/50 hover:text-purple-400',
    cloud: 'border-blue-500/20 hover:border-blue-400/50 hover:text-blue-400',
    devops: 'border-emerald-500/20 hover:border-emerald-400/50 hover:text-emerald-400',
};

export default function TechStack() {
    return (
        <section id="stack" className="relative">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader code="SYS_09" label="TECH_ARSENAL" title="Neural Toolkit" />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8 flex flex-wrap gap-4"
                >
                    {Object.entries({ core: 'CORE', ai: 'AI/ML', cloud: 'CLOUD', devops: 'DEVOPS' }).map(([key, label]) => (
                        <span key={key} className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${
                                key === 'core' ? 'bg-accent/50' :
                                key === 'ai' ? 'bg-purple-400/50' :
                                key === 'cloud' ? 'bg-blue-400/50' :
                                'bg-emerald-400/50'
                            }`} />
                            <span className="font-mono text-[9px] text-tm tracking-widest">{label}</span>
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-8 flex flex-wrap gap-3"
                >
                    {techStack.map((tech, i) => (
                        <motion.span
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.03 }}
                            whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                            className={`font-mono text-[12px] text-ts border rounded-full px-5 py-2.5 transition-all duration-300 cursor-default ${categoryColors[tech.category]}`}
                        >
                            {tech.name}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-14 border border-surface-border rounded-xl p-5 font-mono text-[10px] text-accent/20 tracking-widest"
                >
                    <p>&gt; LOADING_NEURAL_MODULES... <span className="text-accent/40">COMPLETE</span></p>
                    <p>&gt; ACTIVE_NODES: <span className="text-accent/40">{techStack.length}</span></p>
                    <p>&gt; SYSTEM_INTEGRITY: <span className="text-accent/40">100%</span> <span className="terminal-cursor" /></p>
                </motion.div>
            </div>
        </section>
    );
}
