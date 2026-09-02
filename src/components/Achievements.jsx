import { motion } from 'framer-motion';
import { achievements } from '../data';
import { Award, FileText, Trophy, Rocket } from 'lucide-react';
import { SectionHeader } from './About';

const icons = [Award, FileText, Trophy, Rocket];

export default function Achievements() {
    return (
        <section id="achievements" className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeader code="SYS_06" label="ACHIEVEMENT_VAULT" title="Decoded Milestones" />

                <div className="mt-8 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((item, i) => {
                        const Icon = icons[i % icons.length];
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                                className="group holo-card rounded-2xl p-5 sm:p-7 neon-border"
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-11 h-11 border border-accent/20 rounded-xl flex items-center justify-center text-accent/60 group-hover:text-accent group-hover:border-accent/40 transition-all duration-500">
                                            <Icon size={18} strokeWidth={1.5} />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-[8px] text-tm tracking-widest">
                                                {item.year}
                                            </span>
                                            <span className="font-mono text-[8px] text-accent/20 tracking-[0.2em]">
                                                {item.code}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="inline-flex items-center gap-2 mb-3">
                                        <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                                        <span className="font-mono text-[10px] text-accent/70 tracking-[0.2em]">
                                            {item.highlight}
                                        </span>
                                    </div>

                                    <h3 className="text-[16px] font-bold text-tp mb-2 group-hover:text-accent transition-colors duration-500">
                                        {item.title}
                                    </h3>
                                    <p className="text-ts text-[13px] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
