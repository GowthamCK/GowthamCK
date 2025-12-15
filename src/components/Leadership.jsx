import React from 'react';
import { motion } from 'framer-motion';
import { leadership } from '../data';
import { Users } from 'lucide-react';

const Leadership = () => {
    return (
        <section id="leadership" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    <Users className="inline-block mr-2 text-primary" /> Leadership & <span className="text-primary">Community</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {leadership.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-colors"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mb-6 text-white font-bold text-2xl shadow-lg">
                                {item.role.charAt(0)}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.role}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
