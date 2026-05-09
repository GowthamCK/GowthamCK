import { motion } from 'framer-motion';
import { certifications } from '../data';
import { SectionHeader } from './About';
import { ShieldCheck } from 'lucide-react';

export default function Certifications() {
    return (
        <section id="certifications" className="relative">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader code="SYS_07" label="CERT_REGISTRY" title="Verified Credentials" />

                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            whileHover={{ y: -3, transition: { duration: 0.2 } }}
                            className="group holo-card rounded-2xl p-5 neon-border"
                        >
                            <div className="relative z-10 flex items-start gap-4">
                                <div className="w-10 h-10 border border-accent/20 rounded-xl flex items-center justify-center text-accent/60 group-hover:text-accent group-hover:border-accent/40 transition-all duration-500 shrink-0 mt-0.5">
                                    <ShieldCheck size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-[13px] text-tp font-medium leading-snug group-hover:text-accent transition-colors duration-500">
                                        {cert.name}
                                    </p>
                                    <p className="font-mono text-[9px] text-accent/30 tracking-widest mt-2">
                                        {cert.code}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
