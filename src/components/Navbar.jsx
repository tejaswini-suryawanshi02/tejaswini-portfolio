import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
      <h1 className="text-xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
        TS.
      </h1>
      <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
        <a href="#home" className="hover:text-purple-400 transition">01 HOME</a>
        <a href="#about" className="hover:text-purple-400 transition">02 ABOUT</a>
        <a href="#skills" className="hover:text-purple-400 transition">03 SKILLS</a>
        <a href="#journey" className="hover:text-purple-400 transition">04 JOURNEY</a>
        <a href="#projects" className="hover:text-purple-400 transition">05 PROJECTS</a>
        <a href="#contact" className="hover:text-purple-400 transition">06 CONTACT</a>
      </div>
      <a href="#contact" className="px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 text-zinc-950 font-bold rounded-lg text-sm transition shadow-lg shadow-purple-500/20">
        Hire Me ✨
      </a>
    </nav>
  );
}