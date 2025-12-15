import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data';
import { Trophy } from 'lucide-react';

const Achievements = () => {
    return (
        <section id="achievements" className="py-20">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    <Trophy className="inline-block mr-2 text-primary" /> Achievements & <span className="text-primary">Awards</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-6 rounded-2xl border-l-4 border-l-primary hover:bg-white/5 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-slate-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
