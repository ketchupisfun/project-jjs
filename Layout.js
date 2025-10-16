import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, Map, Users, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", path: "Home", icon: Home },
  { name: "Maps", path: "Maps", icon: Map },
  { name: "Team", path: "Team", icon: Users },
  { name: "Contact", path: "Contact", icon: MessageCircle },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0118]">
      <style>{`
        :root {
          --primary-purple: #8b5cf6;
          --primary-blue: #3b82f6;
          --accent-pink: #ec4899;
          --bg-dark: #0a0118;
          --bg-darker: #050008;
          --text-light: #f8fafc;
        }
        
        body {
          overflow-x: hidden;
        }
        
        .glow-effect {
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
        }
        
        .glow-effect-strong {
          box-shadow: 0 0 40px rgba(139, 92, 246, 0.6);
        }
        
        .text-glow {
          text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8); }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600 rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0118]/95 backdrop-blur-xl border-b border-purple-500/20 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center glow-effect group-hover:glow-effect-strong transition-all duration-300">
                <span className="text-2xl font-black text-white">JJS</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-black text-white">Project: JJS</h1>
                <p className="text-xs text-purple-300">Custom Maps for Jujutsu Shenanigans</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.path)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    location.pathname === createPageUrl(item.path)
                      ? 'bg-purple-600 text-white glow-effect'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0118]/95 backdrop-blur-xl border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.path)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    location.pathname === createPageUrl(item.path)
                      ? 'bg-purple-600 text-white glow-effect'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative mt-20 border-t border-purple-500/20 bg-[#050008]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Project: JJS</h3>
              <p className="text-gray-400">
                Creating custom maps, templates, and ideas for Jujutsu Shenanigans on Roblox.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={createPageUrl(item.path)}
                    className="block text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Community</h4>
              <a
                href="https://discord.gg/z73nVKkNgz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Join Discord
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-500/20 text-center text-gray-400">
            <p>© 2025 Project: JJS. Made with passion for Jujutsu Shenanigans community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
