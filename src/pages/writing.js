import React from "react";

const Writing = () => {
    const articles = [
      {
        title: "The Convergence of AI and Ancient Philosophy",
        date: "March 2024",
        excerpt: "Exploring how ancient philosophical principles can guide modern AI development",
        readTime: "8 min read",
        category: "AI Philosophy"
      },
      {
        title: "Building Ethical AI Systems",
        date: "February 2024",
        excerpt: "A deep dive into implementing ethical considerations in machine learning models",
        readTime: "12 min read",
        category: "Ethics"
      },
      {
        title: "The Future of Machine Consciousness",
        date: "January 2024",
        excerpt: "Examining the possibilities and implications of conscious AI systems",
        readTime: "15 min read",
        category: "AI Theory"
      }
    ];
  
    return (
      <main className="relative pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute top-20 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          
          {/* Header */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl md:text-7xl font-serif text-amber-500 font-light">
              Thoughts & Insights
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Exploring the intersection of technology, philosophy, and human consciousness
            </p>
          </div>
  
          {/* Articles Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <article key={index} className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500 group">
                <div className="space-y-4">
                  <span className="text-sm text-amber-500/80">{article.category}</span>
                  <h3 className="text-xl font-serif text-amber-500 group-hover:text-amber-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
  
          {/* Newsletter Section */}
          <div className="mt-16 p-8 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h3 className="text-2xl font-serif text-amber-500">Stay Updated</h3>
              <p className="text-gray-400 font-light">
                Subscribe to receive notifications about new articles and insights
              </p>
              <form className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500/50 text-gray-300"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-amber-500/10 border border-amber-500/50 rounded-lg text-amber-500 hover:bg-amber-500/20 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  };



export default Writing