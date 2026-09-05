import { motion } from 'framer-motion';
import { education } from '../data';
import { SectionHeader } from './About';
import { GraduationCap } from 'lucide-react';

export default function Education() {
    return (
        <section id="education" className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeader code="SYS_02" label="EDUCATION_LOG" title="Academic Nodes" />

                <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ y: -4, transition: { duration: 0.3 } }}
                            className="group holo-card rounded-2xl p-5 sm:p-7 neon-border"
                        >
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-11 h-11 border border-accent/20 rounded-xl flex items-center justify-center text-accent/60 group-hover:text-accent group-hover:border-accent/40 transition-all duration-500">
                                        <GraduationCap size={18} strokeWidth={1.5} />
                                    </div>
                                    <span className={`font-mono text-[8px] px-2 py-0.5 rounded tracking-widest ${
                                        edu.status === 'IN_PROGRESS' ? 'bg-accent/10 text-accent/60' : 'bg-green-500/10 text-green-500/60'
                                    }`}>
                                        {edu.status}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-tp mb-1 group-hover:text-accent transition-colors duration-500">
                                    {edu.institution}
                                </h3>
                                <p className="text-ts text-[13px] leading-relaxed mb-3">
                                    {edu.degree}
                                </p>

                                <div className="flex items-center justify-between pt-3 border-t border-surface-border">
                                    <span className="font-mono text-[10px] text-accent/40 tracking-widest">
                                        {edu.period}
                                    </span>
                                    <span className="font-mono text-[10px] text-accent/60 tracking-widest font-semibold">
                                        {edu.result}
                                    </span>
                                </div>

                                <p className="font-mono text-[9px] text-tm tracking-widest mt-2">
                                    {edu.location}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
