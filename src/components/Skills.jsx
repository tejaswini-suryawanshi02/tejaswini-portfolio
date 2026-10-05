import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript ", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend & Databases",
      skills: ["Python","Java" ,"Flask", "Node.js", "PostgreSQL", "MySQL", "MongoDB", "SQLite"]
    },
    {
      title: "Tools & Workflow",
      skills: ["Git & GitHub", "VS Code", "Jupyter Notebook", "Responsive Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800/60">
      <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-2">02 // SKILLS</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-white">Skills & Technologies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 shadow-xl hover:border-purple-500/50 transition duration-300">
            <h3 className="text-lg font-bold text-purple-400 mb-4 pb-2 border-b border-zinc-800/80">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}