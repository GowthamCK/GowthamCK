import { motion } from 'framer-motion';
import { experience } from '../data';
import { SectionHeader } from './About';

export default function Experience() {
    return (
        <section id="experience" className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeader code="SYS_03" label="EXPERIENCE_LOG" title="Mission History" />

                <div className="mt-6 sm:mt-8 relative">
                    <div className="absolute left-[10px] top-0 bottom-0 w-[1px] bg-surface-border" />
                    <div className="absolute left-[10px] top-0 bottom-0 w-[1px] bg-accent/5 blur-sm" />

                    <div className="space-y-12 sm:space-y-16">
                        {experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                className="relative pl-9 sm:pl-14"
                            >
                                <div className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full border border-accent/50 bg-surface-raised flex items-center justify-center shadow-md shadow-accent/20">
                                    <div className="w-[8px] h-[8px] rounded-full bg-accent animate-pulse" />
                                </div>
                                <div className="absolute left-[22px] top-[11px] w-3 sm:w-6 h-[1px] bg-accent/30" />

                                <div>
                                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                                        <span className="font-mono text-[9px] sm:text-[10px] text-accent/60 tracking-[0.15em] sm:tracking-[0.2em] font-semibold">
                                            {exp.period}
                                        </span>
                                        <span className="font-mono text-[8px] sm:text-[9px] text-accent bg-accent/10 border border-accent/30 px-2.5 py-0.5 rounded-full tracking-widest font-semibold">
                                            {exp.status}
                                        </span>
                                    </div>

                                    <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-extrabold text-tp flex flex-wrap items-baseline gap-2">
                                        <span>{exp.role}</span>
                                        <span className="text-accent/80 font-mono text-xs sm:text-sm font-medium">| {exp.company}</span>
                                    </h3>
                                    <p className="font-mono text-[8.5px] sm:text-[9.5px] text-tm tracking-widest mt-1">
                                        {exp.location}
                                    </p>

                                    <div className="mt-4 sm:mt-5 holo-card rounded-2xl p-4 sm:p-6">
                                        <ul className="space-y-3">
                                            {exp.points.map((point, j) => (
                                                <li key={j} className="flex items-start gap-3 text-ts text-[13px] sm:text-[13.5px] leading-relaxed">
                                                    <span className="mt-1 font-mono text-accent text-[11px] shrink-0 font-bold">▹</span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>

                                        {exp.skills && exp.skills.length > 0 && (
                                            <div className="mt-5 pt-4 border-t border-surface-border/60">
                                                <div className="flex items-center gap-2 mb-2.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                                    <span className="font-mono text-[9px] sm:text-[10px] text-tm uppercase tracking-widest font-semibold">
                                                        Key Competencies
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.skills.map((skill, k) => (
                                                        <span
                                                            key={k}
                                                            className="font-mono text-[10.5px] sm:text-[11.5px] border border-accent/30 text-accent/90 bg-accent/5 hover:border-accent hover:text-accent hover:bg-accent/10 rounded-lg px-2.5 sm:px-3 py-1 transition-all duration-200 cursor-default font-medium shadow-sm"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative pl-9 sm:pl-14 mt-10">
                        <div className="absolute left-[7px] top-0 w-[9px] h-[9px] rounded-full border border-accent/20 bg-surface" />
                        <span className="font-mono text-[9px] text-accent/15 tracking-widest">
                            END_OF_LOG
                        </span>
                    </div>

                    {/* SEO & ATS Competencies Registry */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-2xl border border-surface-border/80 bg-surface-raised/50 font-mono text-[11px] sm:text-xs text-ts/80 leading-relaxed backdrop-blur-md"
                    >
                        <span className="text-accent font-bold tracking-wider mr-2">&gt; Tech Stack &amp; Core Competencies:</span>
                        <span className="text-tp/90">Python, C++, CUDA, PyTorch, YOLO11s, OpenCV, Next.js, React, Django, PostgreSQL, Cloud-Native Architecture, ROS2 Concepts, LLM Agents, RAG, Edge AI Deployment.</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
