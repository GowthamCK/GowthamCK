import { motion } from 'framer-motion';
import { personalInfo } from '../data';

export default function Footer() {
    return (
        <footer className="border-t border-surface-border py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-accent/40 rounded-full" />
                        <span className="font-mono text-[10px] text-tm tracking-widest">
                            © 2026 GCK_SYSTEMS // ALL_RIGHTS_RESERVED
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        {personalInfo.socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={social.name}
                                aria-label={social.name}
                                className="text-tm hover:text-accent transition-colors duration-300"
                            >
                                <social.icon size={16} strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="font-mono text-[8px] text-tm/50 tracking-[0.3em]">
                        NEURAL_INTERFACE v2.1 // QUANTUM_ENCRYPTED // EDGE_DEPLOYED
                    </p>
                </div>
            </div>
        </footer>
    );
}
