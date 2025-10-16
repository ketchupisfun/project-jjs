import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, Users, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm mb-6">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 gradient-text text-glow">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
        </div>

        {/* Main Discord Card */}
        <Card className="mb-8 overflow-hidden bg-gradient-to-br from-[#5865F2]/20 to-[#5865F2]/10 border-[#5865F2]/50">
          <CardContent className="p-8 sm:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#5865F2] rounded-2xl flex items-center justify-center mb-6 glow-effect-strong">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Join Our Discord Server
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-md">
                The best way to connect with us and the community. Get support, share ideas, and stay updated with the latest developments!
              </p>
              <a 
                href="https://discord.gg/z73nVKkNgz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold px-8 py-6 text-lg rounded-xl glow-effect-strong group"
                >
                  Join Discord Server
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Additional Contact Options */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">General Inquiries</h3>
                  <p className="text-gray-400 mb-4">
                    For business inquiries, partnerships, or general questions, reach out through our Discord server.
                  </p>
                  <p className="text-purple-300 text-sm">
                    We typically respond within 24-48 hours
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Join the Team</h3>
                  <p className="text-gray-400 mb-4">
                    Interested in becoming a developer? Connect with us on Discord to learn about opportunities.
                  </p>
                  <p className="text-blue-300 text-sm">
                    We welcome developers of all skill levels!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Info</h3>
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">What is Project: JJS?</h4>
              <p>We're a team of developers creating custom maps, templates, and ideas for Jujutsu Shenanigans on Roblox.</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">How can I use your maps?</h4>
              <p>Visit our Maps page to see available maps and their current status. Join our Discord for access and instructions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">Can I contribute?</h4>
              <p>Absolutely! We're always looking for talented developers. Join our Discord to get started.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
