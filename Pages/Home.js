import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-[#0a0118]" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 animate-float">
            <div className="px-4 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Custom Maps & Templates for Jujutsu Shenanigans
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            <span className="gradient-text text-glow">Project: JJS</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A community of developers creating incredible custom maps, templates, and ideas for{" "}
            <span className="text-purple-400 font-semibold">Jujutsu Shenanigans</span> on Roblox
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to={createPageUrl("Maps")}>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-6 text-lg rounded-xl glow-effect-strong group">
                Explore Maps
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="https://discord.gg/z73nVKkNgz" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-600/20 font-bold px-8 py-6 text-lg rounded-xl">
                Join Discord
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <Code className="w-10 h-10 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">Custom Maps</h3>
              <p className="text-gray-400 text-sm">
                Unique and creative maps designed by our talented developers
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <Sparkles className="w-10 h-10 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">Templates & Ideas</h3>
              <p className="text-gray-400 text-sm">
                Ready-to-use templates and innovative concepts for your games
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <Users className="w-10 h-10 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">Active Community</h3>
              <p className="text-gray-400 text-sm">
                Join our growing community of creators and developers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 gradient-text">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          </div>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              <span className="text-purple-400 font-semibold">Project: JJS</span> is a dedicated team of developers passionate about{" "}
              <span className="text-blue-400 font-semibold">Jujutsu Shenanigans</span> on Roblox. We specialize in creating high-quality custom maps that enhance the gaming experience for players worldwide.
            </p>

            <p>
              Our team works tirelessly to bring innovative ideas to life, from stunning battle arenas to immersive environments that capture the essence of the Jujutsu Kaisen universe. Each map is crafted with attention to detail and optimized for the best gameplay experience.
            </p>

            <p>
              We're always looking for talented developers to join our team! Whether you're a beginner or an experienced creator, if you have a passion for Roblox development and love Jujutsu Shenanigans, we'd love to have you contribute to our projects.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link to={createPageUrl("Team")}>
              <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-600/20 font-bold px-8 py-4 rounded-xl">
                Meet Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
