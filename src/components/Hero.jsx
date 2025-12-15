import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(14, 165, 233, 0.5)'; // Primary color particles
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.1)'; // Primary color connections

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-slate-950" />

      {/* Background blobs overlay */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl rounded-blob animate-blob z-0"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl rounded-blob animate-blob animation-delay-2000 z-0"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4 backdrop-blur-md">
            <span className="text-primary text-sm font-mono">Open to Work</span>
          </div>
          <h2 className="text-xl md:text-2xl font-medium mb-4 text-slate-300">Hi There 👋</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            I'm <span className="text-primary">Gowtham</span>
          </h1>
          <h3 className="text-2xl md:text-3xl text-slate-400 mb-8 font-light">
            {personalInfo.role}
          </h3>

          <div className="flex space-x-4 justify-center md:justify-start mb-10">
            {personalInfo.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all transform hover:scale-110 border border-white/10 hover:border-primary/50"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/25 hover:shadow-primary/50 transition-all hover:-translate-y-1">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-transparent border border-white/20 hover:bg-white/5 rounded-full font-bold transition-all">
              Contact Me
            </a>
          </div>

          <div className="mt-8 text-slate-500 text-sm flex items-center justify-center md:justify-start gap-2">
            <span className="kbd kbd-sm border border-white/20 px-2 py-0.5 rounded text-xs bg-white/5">Ctrl</span> + <span className="kbd kbd-sm border border-white/20 px-2 py-0.5 rounded text-xs bg-white/5">K</span> to navigate
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-slate-800 flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <img src="/images/hero.png" alt="Gowtham C K" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Gowtham+C+K&background=0f172a&color=fff&size=512' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
