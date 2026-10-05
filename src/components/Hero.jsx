import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <div className="space-y-6 flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold tracking-wider uppercase">
          <span>🟣</span> Open to Opportunities
        </div>
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold text-purple-400">Hello, I'm</h2>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Tejaswini Suryawanshi
          </h1>
          <p className="text-sm md:text-base text-zinc-400 font-medium pt-1">
            Passionate about building modern, user-friendly, and responsive web experiences from scratch.
          </p>
        </div>
        <p className="text-zinc-300 text-sm md:text-base max-w-xl leading-relaxed">
          An MCA student & passionate Frontend Developer turning complex concepts into clean, high-performance, and interactive web applications.
        </p>
        <div className="flex gap-4 justify-center md:justify-start pt-2">
          <a href="#projects" className="px-7 py-3.5 bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 text-zinc-950 font-bold rounded-xl transition shadow-lg shadow-purple-500/20 transform hover:-translate-y-0.5">
            View My Work
          </a>
          <button 
            type="button"
            onClick={() => window.open('/Tejaswini_%20resume.pdf', '_blank')}
            className="px-7 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 font-semibold rounded-xl transition transform hover:-translate-y-0.5 text-white cursor-pointer hover:border-purple-400"
          >
            View Resume 📄
          </button>
        </div>
      </div>

      <div className="relative group flex flex-col items-center">
        <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-500"></div>
        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-zinc-900 border border-zinc-700/80 overflow-hidden shadow-2xl">
          <img 
            src="/portfolio_profile_photo.jpeg" 
            alt="Tejaswini Suryawanshi" 
            className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
        <div className="mt-4 px-4 py-1.5 bg-zinc-900 border border-purple-500/30 rounded-xl text-purple-400 font-bold text-sm tracking-wide shadow-md">
          💻 Frontend Developer
        </div>
      </div>
    </section>
  );
}