import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800/60">
      <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-2">06 // CONTACT</p>
      <h2 className="text-3xl font-extrabold mb-8 text-white">Let's Work Together</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-zinc-900/40 border border-zinc-800/80 p-8 md:p-12 rounded-3xl shadow-xl">
        <div className="space-y-6">
          <p className="text-zinc-300 text-sm leading-relaxed">
            I am actively looking for frontend development and software engineering opportunities. Feel free to connect or drop a message!
          </p>
          
          <div className="space-y-3 text-sm">
            <div className="p-4 bg-zinc-950/60 border border-zinc-800 rounded-xl">
              <span className="text-zinc-500 block text-xs">LOCATION</span>
              <span className="text-white font-medium">Nashik, Maharashtra, India</span>
            </div>
            <div className="p-4 bg-zinc-950/60 border border-zinc-800 rounded-xl">
              <span className="text-zinc-500 block text-xs">GITHUB PROFILE</span>
              <a href="https://github.com/tejaswini-suryawanshi02" target="_blank" rel="noreferrer" className="text-purple-400 hover:underline font-medium break-all">
                github.com/tejaswini-suryawanshi02
              </a>
            </div>
            <div className="p-4 bg-zinc-950/60 border border-zinc-800 rounded-xl">
              <span className="text-zinc-500 block text-xs">LINKEDIN PROFILE</span>
              <a href="https://www.linkedin.com/in/tejaswini-suryawanshi-a0a847298/" target="_blank" rel="noreferrer" className="text-purple-400 hover:underline font-medium break-all">
                linkedin.com/in/tejaswini-suryawanshi-a0a847298
              </a>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button 
              type="button"
              onClick={() => window.open('/Tejaswini_%20resume.pdf', '_blank')}
              className="px-5 py-3 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition hover:border-purple-400 cursor-pointer"
            >
              📄 View/Download Resume PDF
            </button>
            <button 
              type="button"
              onClick={() => window.open('/CodeAlpha_Internship_Certificate.pdf', '_blank')}
              className="px-5 py-3 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition hover:border-purple-400 cursor-pointer"
            >
              📜 View Certificate PDF
            </button>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1">YOUR NAME</label>
            <input type="text" required className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:border-purple-400 outline-none transition" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1">YOUR EMAIL</label>
            <input type="email" required className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:border-purple-400 outline-none transition" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1">MESSAGE</label>
            <textarea rows="4" required className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:border-purple-400 outline-none transition" placeholder="Write your message..."></textarea>
          </div>
          <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 text-zinc-950 font-bold rounded-xl transition shadow-lg shadow-purple-500/20 cursor-pointer">
            Send Message ✉
          </button>
        </form>
      </div>
    </section>
  );
}