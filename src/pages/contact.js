import React from "react";

const Contact = () => {
    return (
      <main className="relative pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute top-20 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          
          {/* Header */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl md:text-7xl font-serif text-amber-500 font-light">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Have a question or interested in collaboration? I'd love to hear from you.
            </p>
          </div>
  
          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm text-gray-400 font-light">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-amber-500/50 text-gray-300"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm text-gray-400 font-light">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-amber-500/50 text-gray-300"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm text-gray-400 font-light">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-amber-500/50 text-gray-300"
                  placeholder="What's this about?"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm text-gray-400 font-light">Message</label>
                <textarea
                  rows="6"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-amber-500/50 text-gray-300"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-amber-500/10 border border-amber-500/50 rounded-lg text-amber-500 hover:bg-amber-500/20 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
  
            {/* Alternative Contact Methods */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50 text-center">
                <h3 className="text-lg font-serif text-amber-500 mb-2">Email</h3>
                <p className="text-gray-400 text-sm font-light">ys7353@srmist.edu.in</p>
              </div>
              <div className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50 text-center">
                <h3 className="text-lg font-serif text-amber-500 mb-2">Location</h3>
                <p className="text-gray-400 font-light">New Delhi, India</p>
              </div>
              <div className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50 text-center">
                <h3 className="text-lg font-serif text-amber-500 mb-2">Social</h3>
                <p className="text-gray-400 font-light">@YashSharma</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };

export default Contact