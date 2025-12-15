import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import { Code2, CheckCircle2 } from 'lucide-react';

const Skills = () => {
    return (
        <section id="skills" className="py-20 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    <Code2 className="inline-block mr-2 text-primary" /> Technical <span className="text-primary">Skills</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary border-b border-white/10 pb-2">{category.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((item, idx) => (
                                    <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-primary hover:text-white transition-colors">
                                        <CheckCircle2 size={12} className="text-primary group-hover:text-white" />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
