import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800/60">
      <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-2">01 // ABOUT ME</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-white">Full-Stack & Frontend Developer</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-6 text-zinc-300 text-base leading-relaxed">
          <p>
            I am a dedicated MCA student specializing in frontend development and modern web architecture. My expertise lies in translating UI/UX designs into responsive, dynamic, and visually stunning web applications using React, JavaScript, and Tailwind CSS.
          </p>
          <p>
            I focus on writing clean, component-driven code that guarantees optimal performance across all devices. Alongside frontend engineering, I enjoy exploring data science tasks and bridging analytical systems with user-friendly web interfaces.
          </p>
        </div>

        <div className="space-y-4 bg-zinc-900/50 border border-zinc-800/80 p-6 rounded-2xl shadow-lg">
          <div>
            <span className="text-xs font-semibold text-zinc-500 tracking-wider block mb-1">LOCATION</span>
            <span className="text-white font-medium text-sm">Nashik, Maharashtra, India</span>
          </div>

          <div className="pt-3 border-t border-zinc-800">
            <span className="text-xs font-semibold text-zinc-500 tracking-wider block mb-1">LINKEDIN PROFILE</span>
            <a 
              href="https://www.linkedin.com/in/tejaswini-suryawanshi-a0a847298/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-purple-400 hover:underline text-sm font-medium break-all"
            >
              linkedin.com/in/tejaswini-suryawanshi-a0a847298
            </a>
          </div>

          <div className="pt-3 border-t border-zinc-800">
            <span className="text-xs font-semibold text-zinc-500 tracking-wider block mb-1">GITHUB PROFILE</span>
            <a 
              href="https://github.com/tejaswini-suryawanshi02" 
              target="_blank" 
              rel="noreferrer" 
              className="text-purple-400 hover:underline text-sm font-medium break-all"
            >
              github.com/tejaswini-suryawanshi02
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}