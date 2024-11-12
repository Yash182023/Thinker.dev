import React from 'react';

const Philosophy = () => {
  const philosophies = [
    {
      title: "The Digital Dao",
      description: "Exploring the harmonious balance between artificial and human intelligence, where ancient wisdom meets modern computation.",
      quote: "The machine does not isolate man from the great problems of nature but plunges him more deeply into them."
    },
    {
      title: "Conscious Computing",
      description: "Developing AI systems that respect and enhance human consciousness rather than replacing it.",
      quote: "Every algorithm must serve the greater purpose of human flourishing."
    },
    {
      title: "Technical Mindfulness",
      description: "Bringing meditation principles into code architecture and system design.",
      quote: "In the silence between computations lies the wisdom of the system."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Vintage Grain Overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noise%29%22/%3E%3C/svg%3E')] opacity-[0.03] pointer-events-none" />

      <main className="relative pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute top-20 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-40 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

          {/* Header Section */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl md:text-7xl font-serif text-amber-500 font-light">
              Philosophy
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Where ancient wisdom meets modern technology, creating a bridge between timeless truth and digital innovation.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Philosophy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {philosophies.map((item, index) => (
                <div 
                  key={index}
                  className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500 group"
                >
                  <h3 className="text-amber-500 font-serif text-2xl mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <blockquote className="text-sm text-gray-500 italic border-l-2 border-amber-500/20 pl-4">
                    {item.quote}
                  </blockquote>
                </div>
              ))}
            </div>

            {/* Manifesto Section */}
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-serif text-amber-500 text-center">
                Digital Manifesto
              </h2>
              <div className="prose prose-invert max-w-none">
                <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50">
                  <ol className="space-y-6 list-decimal pl-4">
                    <li className="text-gray-300">
                      <span className="text-amber-500 font-serif">Mindful Innovation</span>
                      <p className="text-gray-400 font-light mt-2">
                        Technology should enhance human consciousness, not replace it. Every line of code should be written with intention and awareness.
                      </p>
                    </li>
                    <li className="text-gray-300">
                      <span className="text-amber-500 font-serif">Ethical Intelligence</span>
                      <p className="text-gray-400 font-light mt-2">
                        AI systems must be developed with strong ethical foundations, respecting human values and promoting collective growth.
                      </p>
                    </li>
                    <li className="text-gray-300">
                      <span className="text-amber-500 font-serif">Digital Harmony</span>
                      <p className="text-gray-400 font-light mt-2">
                        Seek balance between efficiency and humanity, automation and authenticity, progress and wisdom.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="text-center max-w-4xl mx-auto p-8 border-l-2 border-r-2 border-amber-500/20">
              <blockquote className="text-2xl text-gray-300 font-serif italic">
                "The future of technology lies not in its complexity, but in its ability to simplify human experience while deepening human understanding."
              </blockquote>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Philosophy;