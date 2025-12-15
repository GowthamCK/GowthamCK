import React from 'react';
import { motion } from 'framer-motion';
import { Headset, User, Mail, Phone, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    <Headset className="inline-block mr-2 text-primary" /> Get in <span className="text-primary">Touch</span>
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 flex items-center justify-center p-8"
                    >
                        <img src="/images/contact1.png" alt="Contact" className="w-full max-w-md object-contain animate-float" onError={(e) => { e.target.style.display = 'none' }} />
                        {/* Fallback code if image fails is handled by just hiding it, but we can also show a placeholder */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <div className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-6 h-full border border-white/10">
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                                <Mail size={32} className="text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold">Contact Form Disabled</h3>
                            <p className="text-slate-400">
                                The contact form is currently under maintenance. <br />
                                Please email me directly at:
                            </p>
                            <a href="mailto:ckgowtham12@gmail.com" className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-blue-600 transition-colors">
                                ckgowtham12@gmail.com
                            </a>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
