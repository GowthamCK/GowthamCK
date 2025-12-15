import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    <GraduationCap className="inline-block mr-2 text-primary" /> My <span className="text-primary">Education</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass overflow-hidden rounded-2xl group hover:border-primary/50 transition-colors"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={edu.image} alt={edu.school} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }} />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 line-clamp-2">{edu.title}</h3>
                                <p className="text-sm text-primary font-medium mb-1">{edu.school}</p>
                                <p className="text-xs text-slate-400">{edu.year}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
