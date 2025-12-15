import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data';
import { Award, ShieldCheck } from 'lucide-react';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    <ShieldCheck className="inline-block mr-2 text-primary" /> Certifications
                </motion.h2>

                <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="w-full glass p-4 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors"
                        >
                            <div className="p-3 bg-primary/20 rounded-full text-primary">
                                <Award size={24} />
                            </div>
                            <span className="text-lg font-medium text-slate-200">{cert}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
