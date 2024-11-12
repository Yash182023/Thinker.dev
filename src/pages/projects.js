import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ChildGaurd_AI",
      description: "ChildGuardAI is a comprehensive platform dedicated to ensuring the safety and well-being of children in the digital world. It offers a range of features and services aimed at empowering child safety online, including education resources, content filtering, live location tracking, and more.",
      tags: ["Python", "Streamlit", "NLP", "ML","Social-Good","DeepLearning"],
      github: "https://github.com/Yash182023/ChildGaurdAI_Web",
      demo: "#"
    },
    {
      title: "BrightPsych",
      description: "'BrightPsych' is a holistic mental health platform featuring a supportive chatbot and detail CBT analysis for disorders. Daily Mood Tracking aids emotional well-being, while data analysis unveils student mental health trends. Guided mindfulness contribute to resilience in a nurturing space. Empower, Engage and Elevate through Community Forum.",
      tags: ["Python", "RAG", "TTS", "Data Viz","Langchain","CBT"],
      github: "https://github.com/Yash182023/BrightPsyche_New",
      demo: "#"
    },
    {
      title: "Chess Mania",
      description: "This project implements a Chess AI using a convolutional neural network (CNN) model to predict the best move and evaluate the board position. It includes an API built with FastAPI for real-time chess move recommendations. The model is trained on historical chess games using a dual-headed neural network: one head predicts the best move (policy head), and the other evaluates the board (value head).",
      tags: ["TensorFlow", "CNN", "ML","ANN","FastAPI","Python-Chess"],
      github: "https://github.com/Yash182023/Chess_Mania",
      demo: "#"
    },
    {
      title: "ChandraVikas",
      description: "Generation of Hazard map at 1m grid spacing (1m height resolution) using 5m spatial resolution data for safely navigating a Lander to a safe landing site using super resolution techniques.",
      tags: ["Python", "SRGAN", "Qgis","SIH","ISRO"],
      github: "https://github.com/Yash182023/ChandraVikas_SIH_2023_New",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Vintage Grain Overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noise%29%22/%3E%3C/svg%3E')] opacity-[0.03] pointer-events-none" />

      <main className="relative pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute top-20 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

          {/* Header Section */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl md:text-7xl font-serif text-amber-500 font-light">
              Projects
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              A collection of works exploring the intersection of technology, consciousness, and human potential.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500 group"
              >
                <h3 className="text-2xl font-serif text-amber-500 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm text-gray-400 bg-gray-800 rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Project */}
          <div className="mt-16 p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-amber-500/20">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-serif text-amber-500">
                Featured Project
              </h2>
              <p className="text-gray-400 font-light">
                Currently working on something special
              </p>
            </div>

            {/* Project Preview */}
            <div className="aspect-video rounded-lg bg-gray-900/50 flex items-center justify-center border border-gray-700/50">
              <p className="text-gray-500 font-serif text-xl">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;