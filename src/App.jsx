import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                <h2 className="text-xl font-bold text-white">Loading Portfolio...</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden font-sans">
            <CommandPalette />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Achievements />
            <Leadership />
            <Education />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
