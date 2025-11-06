  import {Button} from "@repo/ui/button";
  import {Card} from "@repo/ui/card";

 import { Pencil, Users, Zap, Download, Shield, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Pencil className="w-8 h-8 text-slate-800" strokeWidth={2.5} />
              <span className="text-2xl font-bold text-slate-800">Excelidraw</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-slate-700 hover:text-slate-900 transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Draw, Collaborate,
              <br />
              <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                Create Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              A powerful, intuitive whiteboard for teams that think visually.
              Design diagrams, sketch ideas, and collaborate in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-slate-800 text-white rounded-lg text-lg font-semibold hover:bg-slate-900 transition-all transform hover:scale-105 shadow-lg">
                Start Drawing Now
              </button>
              <button className="px-8 py-4 bg-white text-slate-800 rounded-lg text-lg font-semibold hover:bg-slate-50 transition-all border-2 border-slate-200">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100 to-transparent h-32 bottom-0 z-10"></div>
            <div className="rounded-2xl shadow-2xl overflow-hidden border border-slate-200 bg-white p-8">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Pencil className="w-24 h-24 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-500 text-lg">Your canvas awaits</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Everything you need to create
              </h2>
              <p className="text-xl text-slate-600">
                Powerful features wrapped in a simple, elegant interface
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Real-time Collaboration</h3>
                <p className="text-slate-600 leading-relaxed">
                  Work together seamlessly with your team. See changes instantly as multiple people draw and edit simultaneously.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
                <p className="text-slate-600 leading-relaxed">
                  Built for speed. Smooth drawing experience with zero lag, even with complex diagrams and hundreds of elements.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Intuitive Design</h3>
                <p className="text-slate-600 leading-relaxed">
                  No learning curve. Start creating immediately with an interface that feels natural and gets out of your way.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                  <Download className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Export Anywhere</h3>
                <p className="text-slate-600 leading-relaxed">
                  Export your work to PNG, SVG, or PDF. Share your creations in any format you need.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Private & Secure</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your data is encrypted and secure. Control who can view and edit your boards with granular permissions.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                  <Pencil className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Infinite Canvas</h3>
                <p className="text-slate-600 leading-relaxed">
                  Never run out of space. Pan and zoom across an unlimited canvas to organize ideas of any scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to start creating?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Join thousands of teams using Excelidraw to bring their ideas to life
            </p>
            <button className="px-10 py-4 bg-white text-slate-900 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl">
              Get Started Free
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Pencil className="w-6 h-6 text-slate-800" />
              <span className="text-xl font-bold text-slate-800">Excelidraw</span>
            </div>
            <div className="text-slate-600 text-sm">
              © 2025 Excelidraw. Built with passion.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
