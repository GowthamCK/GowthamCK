import { motion } from 'framer-motion';
import { projects } from '../data';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './About';

export default function Projects() {
    return (
        <section id="projects" className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeader code="SYS_04" label="PROJECT_REGISTRY" title="Deployed Systems" />

                <div className="mt-8 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                    <span className="font-mono text-[10px] text-accent/40 tracking-[0.2em]">
                                        {project.codename}
                                    </span>
                                    <ArrowUpRight size={16} className="text-tm group-hover:text-accent transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-bold text-tp mb-3 group-hover:text-accent transition-colors duration-500">
                                    {project.title}
                                </h3>

                                <p className="text-ts text-[13px] leading-relaxed mb-5">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-mono text-[10px] text-accent/50 border border-accent/15 rounded-full px-3 py-1 tracking-wider"
                                        >
                                            {tag}
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
