import { motion } from 'framer-motion';
import { experience } from '../data';
import { SectionHeader } from './About';

export default function Experience() {
    return (
        <section id="experience" className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeader code="SYS_03" label="EXPERIENCE_LOG" title="Mission History" />

                <div className="mt-10 sm:mt-16 relative">
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
                                <div className="absolute left-0 top-1 w-[21px] h-[21px] rounded-full border border-accent/40 bg-surface flex items-center justify-center">
                                    <div className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-slow" />
                                </div>
                                <div className="absolute left-[21px] top-[10px] w-3 sm:w-6 h-[1px] bg-accent/20" />

                                <div>
                                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                                        <span className="font-mono text-[9px] sm:text-[10px] text-accent/40 tracking-[0.15em] sm:tracking-[0.2em]">
                                            {exp.period}
                                        </span>
                                        <span className="font-mono text-[8px] text-accent bg-accent/10 px-2 py-0.5 rounded tracking-widest">
                                            {exp.status}
                                        </span>
                                    </div>

                                    <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-bold text-tp">
                                        {exp.role}
                                    </h3>
                                    <p className="text-accent/70 text-xs sm:text-sm font-mono mt-1 tracking-wide">
                                        @ {exp.company}
                                    </p>
                                    <p className="font-mono text-[8px] sm:text-[9px] text-tm tracking-widest mt-1">
                                        {exp.location}
                                    </p>

                                    <div className="mt-4 sm:mt-5 holo-card rounded-xl p-4 sm:p-5 neon-border">
                                        <ul className="space-y-3">
                                            {exp.points.map((point, j) => (
                                                <li key={j} className="flex items-start gap-3 text-ts text-[13px] leading-relaxed">
                                                    <span className="mt-1.5 font-mono text-accent/30 text-[10px] shrink-0">▸</span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative pl-14 mt-10">
                        <div className="absolute left-[7px] top-0 w-[9px] h-[9px] rounded-full border border-accent/20 bg-surface" />
                        <span className="font-mono text-[9px] text-accent/15 tracking-widest">
                            END_OF_LOG
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
