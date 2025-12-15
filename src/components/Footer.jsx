import React from 'react';
import { personalInfo } from '../data';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Gowtham's Portfolio</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Thank you for visiting my personal portfolio website. Connect with me over socials. <br />
                            Keep Rising 🚀. Connect with me over live chat!
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <div className="flex flex-col space-y-2">
                            <a href="#home" className="text-slate-400 hover:text-primary transition-colors">Home</a>
                            <a href="#about" className="text-slate-400 hover:text-primary transition-colors">About</a>
                            <a href="#skills" className="text-slate-400 hover:text-primary transition-colors">Skills</a>
                            <a href="#education" className="text-slate-400 hover:text-primary transition-colors">Education</a>
                            <a href="#projects" className="text-slate-400 hover:text-primary transition-colors">Projects</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                        <p className="text-slate-400 mb-2"><span className="text-primary mr-2">📧</span>{personalInfo.email}</p>
                        <p className="text-slate-400 mb-6"><span className="text-primary mr-2">📍</span>{personalInfo.place}</p>

                        <div className="flex space-x-4">
                            {personalInfo.socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-xs text-slate-600 mb-2 uppercase tracking-widest">Website Under Construction</p>
                    <p className="flex items-center justify-center gap-2 text-slate-400">
                        Designed with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> by <a href="#" className="text-primary font-bold">Gowtham</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
