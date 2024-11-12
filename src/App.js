import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Philosophy from './pages/philosophy';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Writing from './pages/writing';



// Create Home component from the existing main content
const Home = () => (
  <main className="relative pt-32 pb-16 px-4">
    <div className="max-w-7xl mx-auto">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      {/* Hero Content */}
      <div className="relative space-y-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-serif text-amber-500 font-light">
            Think. Create. Evolve.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            AI/ML Engineer exploring the convergence of ancient wisdom and artificial intelligence.
          </p>
        </div>

        {/* Personal Introduction */}
        <div className="flex flex-col md:flex-row items-center gap-12 py-8">
          {/* Profile Image Container */}
          <div className="w-48 h-48 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-500/20 rounded-full blur-md"></div>
            <div className="relative w-full h-full rounded-full border-2 border-amber-500/20 overflow-hidden">
              <img 
                src="/images/IMG_9127.JPG" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Introduction Text */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-serif text-amber-500">Yash Sharma</h2>
            <p className="text-gray-400 font-light leading-relaxed">
            As an AI and Data Science professional, I excel in creating impactful, data-driven solutions across AI, Data Engineering, and Machine Learning. With hands-on experience in Retrieval-Augmented Generation (RAG), NLP, and advanced ML frameworks, I specialize in developing and deploying intelligent systems for optimized workflows and automated insights. Currently interning at ZetranceXR, I have built applications from interactive dashboards and data pipelines to mental health chatbots, leveraging tools like PySpark, TensorFlow, and Power BI to transform complex data into actionable strategies and predictive insights.
            </p>
            <div className="flex gap-4">
              <a href="https://drive.google.com/file/d/1e_y9vqvDvXJ3ixvPMauxddHdkN5n8_qb/view?usp=sharing" className="px-6 py-2 bg-amber-500/10 border border-amber-500/50 rounded-lg text-amber-500 hover:bg-amber-500/20 transition-colors duration-300">
                Download CV
              </a>
              <a href="/contact" className="px-6 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-400 hover:text-amber-500 hover:border-amber-500/50 transition-colors duration-300">
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Stats/Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-amber-500/50 transition-colors duration-500">
            <h3 className="text-amber-500 font-serif text-xl mb-2">AI & Machine Learning</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Crafting intelligence through algorithms and philosophical principles
            </p>
          </div>
          <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-amber-500/50 transition-colors duration-500">
            <h3 className="text-amber-500 font-serif text-xl mb-2">Data Engineering</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Building robust systems that scale with elegance and precision
            </p>
          </div>
          <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-amber-500/50 transition-colors duration-500">
            <h3 className="text-amber-500 font-serif text-xl mb-2">Creative Vision</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Merging technical expertise with artistic sensibility
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="py-12">
          <h2 className="text-3xl font-serif text-amber-500 text-center mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Machiine Learning */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-amber-500">Machine Learning</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Scikit-Learn</span>
                  <span className="text-amber-500">80%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full">
                  <div className="h-full w-[95%] bg-gradient-to-r from-amber-500/50 to-amber-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">NLP</span>
                  <span className="text-amber-500">79%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full">
                  <div className="h-full w-[90%] bg-gradient-to-r from-amber-500/50 to-amber-500 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Deep Learning */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-amber-500">Deep Learning</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">TensorFlow</span>
                  <span className="text-amber-500">70%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full">
                  <div className="h-full w-[95%] bg-gradient-to-r from-amber-500/50 to-amber-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">PyTorch</span>
                  <span className="text-amber-500">72%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full">
                  <div className="h-full w-[90%] bg-gradient-to-r from-amber-500/50 to-amber-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Programming */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-amber-500">Programming</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Python</span>
                  <span className="text-amber-500">85%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full">
                  <div className="h-full w-[98%] bg-gradient-to-r from-amber-500/50 to-amber-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">JavaScript</span>
                  <span className="text-amber-500">60%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full">
                  <div className="h-full w-[85%] bg-gradient-to-r from-amber-500/50 to-amber-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Data Engineering */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-amber-500">Data Engineering</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">SQL</span>
                  <span className="text-amber-500">82%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full">
                  <div className="h-full w-[92%] bg-gradient-to-r from-amber-500/50 to-amber-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Pypark</span>
                  <span className="text-amber-500">65%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full">
                  <div className="h-full w-[88%] bg-gradient-to-r from-amber-500/50 to-amber-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center max-w-4xl mx-auto p-8 border-l-2 border-r-2 border-amber-500/20">
          <blockquote className="text-2xl text-gray-300 font-serif italic">
            "In the realm of artificial intelligence, every line of code is a brushstroke painting the future of human consciousness."
          </blockquote>
        </div>
      </div>
    </div>
  </main>
);



// Navigation component with active state
const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Projects', path: '/projects' },
    { name: 'Writing', path: '/writing' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-serif text-amber-500">
            थिंकर<span className="text-gray-500">.dev</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 text-sm tracking-wider transition-colors duration-300 uppercase font-light
                ${isActive(item.path) ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-400 hover:text-amber-500 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-800/50">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block w-full text-left px-4 py-3 text-sm hover:bg-gray-800/30 transition-all duration-300 uppercase tracking-wider font-light
                ${isActive(item.path) ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Vintage Grain Overlay */}
        <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noise%29%22/%3E%3C/svg%3E')] opacity-[0.03] pointer-events-none"></div>
        
        {/* Navigation */}
        <header className="fixed w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50 z-50">
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;