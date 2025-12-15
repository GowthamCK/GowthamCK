import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Command } from 'lucide-react';
import { Link } from 'react-scroll';

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const commands = [
        { name: 'Go to Home', section: 'home', icon: '🏠' },
        { name: 'View About', section: 'about', icon: '👤' },
        { name: 'Check Skills', section: 'skills', icon: '⚡' },
        { name: 'See Projects', section: 'projects', icon: '💻' },
        { name: 'Certifications', section: 'certifications', icon: '📜' },
        { name: 'Awards', section: 'achievements', icon: '🏆' },
        { name: 'Contact Me', section: 'contact', icon: '👋' },
    ];

    const filteredCommands = commands.filter((cmd) =>
        cmd.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4"
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="w-full max-w-lg bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center px-4 py-3 border-b border-white/10">
                            <Search className="text-slate-400 mr-3" size={20} />
                            <input
                                type="text"
                                placeholder="Type a command or search..."
                                className="bg-transparent border-none focus:outline-none text-white w-full placeholder-slate-500 text-lg"
                                autoFocus
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <div className="bg-white/10 px-2 py-1 rounded text-xs text-slate-400 font-mono">ESC</div>
                        </div>

                        <div className="max-h-[300px] overflow-y-auto py-2">
                            {filteredCommands.length > 0 ? (
                                filteredCommands.map((cmd) => (
                                    <Link
                                        key={cmd.section}
                                        to={cmd.section}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center px-4 py-3 hover:bg-white/5 cursor-pointer group transition-colors"
                                    >
                                        <span className="text-xl mr-4">{cmd.icon}</span>
                                        <span className="flex-1 text-slate-200 group-hover:text-primary transition-colors">{cmd.name}</span>
                                        <ArrowRight size={16} className="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                ))
                            ) : (
                                <div className="px-4 py-8 text-center text-slate-500">
                                    No results found.
                                </div>
                            )}
                        </div>

                        <div className="px-4 py-2 bg-black/20 text-xs text-slate-500 border-t border-white/5 flex justify-between">
                            <span>Navigation</span>
                            <span><Command size={10} className="inline mr-1" />K to toggle</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
