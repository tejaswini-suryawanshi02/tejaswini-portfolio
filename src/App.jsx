import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-purple-500 selection:text-zinc-950 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-xs text-zinc-500 border-t border-zinc-900">
        © 2026 Tejaswini Suryawanshi. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}