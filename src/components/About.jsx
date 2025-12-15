import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { User, Mail, MapPin } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    <User className="inline-block mr-2 text-primary" /> About <span className="text-primary">Me</span>
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3 flex justify-center"
                    >
                        <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 transform hover:scale-105 transition-transform duration-500">
                            <img src="/images/profile2.jpg" alt="Profile" className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Gowtham+C+K&background=random&color=fff&size=512' }} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-2/3"
                    >
                        <h3 className="text-3xl font-bold mb-2">I'm {personalInfo.name}</h3>
                        <span className="text-primary font-medium text-lg mb-6 block">{personalInfo.role}</span>

                        <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                            {personalInfo.bio}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="glass p-4 rounded-xl flex items-center space-x-4">
                                <Mail className="text-primary" size={24} />
                                <div>
                                    <p className="text-xs text-slate-400">Email</p>
                                    <p className="text-sm font-medium">{personalInfo.email}</p>
                                </div>
                            </div>
                            <div className="glass p-4 rounded-xl flex items-center space-x-4">
                                <MapPin className="text-primary" size={24} />
                                <div>
                                    <p className="text-xs text-slate-400">Place</p>
                                    <p className="text-sm font-medium">{personalInfo.place}</p>
                                </div>
                            </div>
                        </div>

                        <a href="#" className="inline-block px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-bold transition-all">
                            Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
