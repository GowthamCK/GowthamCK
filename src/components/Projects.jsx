import { motion } from 'framer-motion';
import { projects } from '../data';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './About';

export default function Projects() {
    return (
        <section id="projects" className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeader code="SYS_04" label="PROJECT_REGISTRY" title="Deployed Systems" />

                <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            className={`group holo-card rounded-2xl p-5 sm:p-7 neon-border ${
                                project.size === 'large' ? 'md:col-span-2' : ''
                            }`}
                        >
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="font-mono text-[10px] text-accent/60 tracking-[0.2em] font-semibold">
                                            {project.codename}
                                        </span>
                                        {project.role && (
                                            <span className={`font-mono text-[9px] px-2.5 py-0.5 rounded-full border tracking-wider font-semibold ${
                                                project.role.includes('Lead')
                                                    ? 'border-amber-500/40 bg-amber-500/10 text-amber-300'
                                                    : project.role.includes('Researcher')
                                                    ? 'border-purple-400/40 bg-purple-400/10 text-purple-300'
                                                    : 'border-accent/40 bg-accent/10 text-accent'
                                            }`}>
                                                {project.role}
                                            </span>
                                        )}
                                    </div>
                                    <div className="w-7 h-7 rounded-lg bg-surface-raised border border-surface-border flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300 shrink-0">
                                        <ArrowUpRight size={14} className="text-tm group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                    </div>
                                </div>

                                <h3 className="text-lg sm:text-xl font-extrabold text-tp mb-3 group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-ts text-[13px] sm:text-[13.5px] leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-border/60">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-mono text-[10px] text-ts border border-surface-border hover:border-accent/30 rounded-lg px-2.5 py-1 tracking-wider bg-surface/40 transition-colors"
                                        >
                                            <span className="text-accent/40 mr-1">#</span>{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
