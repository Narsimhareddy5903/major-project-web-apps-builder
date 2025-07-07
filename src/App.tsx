import React, { useState } from 'react';
import { Code2, Rocket, Sparkles, Globe2, ChevronRight, Github } from 'lucide-react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold">WebGen AI</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-purple-400 transition-colors">Documentation</a>
            <a href="#" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Realtime AI Automated Website Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transform your ideas into fully functional websites instantly with AI. Just describe what you want,
            and we'll generate, deploy, and deliver your website in seconds.
          </p>
        </div>
      </header>

      {/* Demo Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Try It Now</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your website (e.g., Create a todo app with good and responsive UI)"
                  className="w-full h-32 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                disabled={isGenerating}
                className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity ${
                  isGenerating ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    Generate Website
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <Code2 className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Code Generation</h3>
            <p className="text-gray-400">
              Advanced AI algorithms generate clean, maintainable code based on your description.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <Rocket className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automatic Deployment</h3>
            <p className="text-gray-400">
              Your website is automatically deployed to production with optimal performance.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <Globe2 className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ready to Use</h3>
            <p className="text-gray-400">
              Get a production-ready URL instantly to share your website with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p>© 2025 WebGen AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;