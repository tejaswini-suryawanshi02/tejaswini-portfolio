import React from 'react';

export default function Journey() {
  const journeys = [
    {
      period: 'Pursuing',
      title: 'Master of Computer Application (MCA)',
      desc: 'KBC North Maharashtra University, Jalgaon.'
    },
    {
      period: '2022 — 2025',
      title: 'Bachelor of Computer Science (B.Sc. CS)',
      desc: 'Savitribai Phule Pune University.'
    },
    {
      period: 'May 2026 — Jun 2026',
      title: 'Data Science Internship - CodeAlpha',
      desc: 'Completed virtual internship program certified by MSME, Government of India.',
      certLink: '/CodeAlpha_Internship_Certificate.pdf'
    }
  ];

  return (
    <section id="journey" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800/60">
      <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-2">04 // JOURNEY</p>
      <h2 className="text-3xl font-extrabold mb-8 text-white">Education & Certifications</h2>
      <div className="space-y-6 border-l-2 border-zinc-800 pl-6 ml-2">
        {journeys.map((item, idx) => (
          <div key={idx} className="relative space-y-2 group">
            <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-400 border-4 border-zinc-950 group-hover:scale-125 transition"></div>
            <span className="text-xs font-semibold text-purple-400">{item.period}</span>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-zinc-400 text-sm">{item.desc}</p>
            {item.certLink && (
              <div className="pt-1">
                <button 
                  type="button"
                  onClick={() => window.open(item.certLink, '_blank')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 underline cursor-pointer bg-transparent border-none p-0"
                >
                  📜 View Certificate PDF
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}