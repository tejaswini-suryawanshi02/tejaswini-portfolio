import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Agro-Smart Portal",
      description: "An AI-ML based agriculture web portal developed to provide technology-driven agricultural guidance, soil analysis, and crop recommendations.",
      tags: ["Python", "Flask", "Machine Learning", "HTML/CSS"],
      github: "https://github.com/tejaswini-suryawanshi02"
    },
    {
      title: "Iris Flower Classification (CodeAlpha Task 1)",
      description: "Performed exploratory data analysis and trained machine learning classification models on the classic iris dataset.",
      tags: ["Python", "Pandas", "Scikit-Learn", "Jupyter"],
      github: "https://github.com/tejaswini-suryawanshi02"
    },
    {
      title: "Unemployment Analysis (CodeAlpha Task 2)",
      description: "Analyzed socio-economic unemployment datasets using statistical methods and data visualization tools to extract trends.",
      tags: ["Python", "Pandas", "Matplotlib", "Data Science"],
      github: "https://github.com/tejaswini-suryawanshi02"
    },
    {
      title: "Car Price Prediction Dashboard (CodeAlpha Task 3)",
      description: "Built an interactive Streamlit web dashboard for predicting car market valuations based on historical attributes.",
      tags: ["Python", "Streamlit", "Machine Learning", "Dashboard"],
      github: "https://github.com/tejaswini-suryawanshi02"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800/60">
      <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-2">05 // PROJECTS</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-white">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-purple-500/50 transition duration-300">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-purple-400 text-xs font-medium rounded-lg leading-normal">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-xs font-semibold rounded-xl transition hover:border-purple-400"
              >
                📂 View Repository on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}