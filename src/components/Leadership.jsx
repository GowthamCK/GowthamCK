import { motion } from 'framer-motion';
import { leadershipRoles } from '../data';
import { SectionHeader } from './About';
import { Users } from 'lucide-react';

export default function Leadership() {
    return (
        <section id="leadership" className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeader code="SYS_08" label="COMMAND_LOG" title="Leadership Matrix" />

                <div className="mt-8 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {leadershipRoles.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -4, transition: { duration: 0.3 } }}
                            className="group holo-card rounded-2xl p-4 sm:p-6 neon-border"
                        >
                            <div className="relative z-10 flex items-start gap-4">
                                <div className="w-9 h-9 border border-accent/20 rounded-xl flex items-center justify-center text-accent/60 group-hover:text-accent group-hover:border-accent/40 transition-all duration-500 shrink-0 mt-0.5">
                                    <Users size={14} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-[15px] font-bold text-tp group-hover:text-accent transition-colors duration-500">
                                        {item.role}
                                    </h3>
                                    <p className="font-mono text-[10px] text-accent/40 tracking-widest mt-1">
                                        @ {item.org}
                                    </p>
                                    {item.period && (
                                        <p className="font-mono text-[9px] text-tm tracking-widest mt-1">
                                            {item.period}
                                        </p>
                                    )}
                                    <p className="text-ts text-[13px] leading-relaxed mt-3">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
