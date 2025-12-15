import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { projects } from '../data';
import { Laptop, Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="glass rounded-2xl overflow-hidden group perspective-1000 relative"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d"
                }}
                className="h-48 overflow-hidden relative"
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform object-top transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <a href={project.link} className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors" title="View Live"><ExternalLink size={20} /></a>
                    <a href={project.code} className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors" title="View Code"><Github size={20} /></a>
                </div>
            </div>
            <div
                style={{ transform: "translateZ(75px)" }}
                className="p-6 bg-slate-900/80 backdrop-blur-md"
            >
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech && project.tech.map((t, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full">{t}</span>
                    ))}
                </div>

                <p className="text-slate-400 text-sm line-clamp-3">{project.description}</p>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    <Laptop className="inline-block mr-2 text-primary" /> Featured <span className="text-primary">Projects</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 px-4 md:px-0">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/GowthamCK" target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors">
                        View All on GitHub <ExternalLink size={16} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
