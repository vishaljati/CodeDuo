import React, { useState } from 'react';
import { Code2, Users, Terminal, Sparkles, Github, Twitter, Mail } from 'lucide-react';
import api from '../libs/axios';



const LandingPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await api.post("/waitlist", { email });
      if (res.data.success === false) throw new Error("Something went wrong. Please try again later.")
      alert(`Thanks for your interest! We'll notify ${email} when we launch.`);
      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">

      {/* Navigation */}
      <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tight">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <Code2 size={24} className="text-white" />
          </div>
          <span>Code<span className="text-indigo-400">Duo</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Community</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 animate-pulse">
          <Sparkles size={14} />
          Coming Soon
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Code Together, <br />
          <span className="bg-gradient-to- from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Learn Together
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
          The ultimate platform for collaborative coding interviews and pair programming.
          Built for developers who believe two heads are better than one.
        </p>

        {/* Email Signup */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-16">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/20"
          >
            Notify Me
          </button>
        </form>

        {/* Feature Grid */}
        <div id="features" className="grid md:grid-cols-3 gap-8 mt-20">
          <FeatureCard
            icon={<Terminal className="text-indigo-400" />}
            title="Real-time IDE"
            description="A high-performance collaborative editor with syntax highlighting and shared terminal."
          />
          <FeatureCard
            icon={<Users className="text-indigo-400" />}
            title="Built for Pairs"
            description="Seamless audio and video integration specifically tuned for pair programming sessions."
          />
          <FeatureCard
            icon={<Sparkles className="text-indigo-400" />}
            title="Interview Mode"
            description="Structured environments for technical interviews with whiteboard and feedback tools."
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2026 CodeDuo. All rights reserved.</p>
          <div className="flex gap-6">
            <p>Made by Vishal Jati</p>
            <Github size={20} className="hover:text-white cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-white cursor-pointer transition-colors" />
            <Mail size={20} className="hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors text-left group">
    <div className="mb-4 p-3 rounded-lg bg-slate-800 w-fit group-hover:bg-indigo-500/10 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

export default LandingPage;