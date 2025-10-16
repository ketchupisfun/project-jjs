import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Users, UserPlus } from "lucide-react";
import TeamCard from "../components/team/TeamCard";

export default function Team() {
  const { data: members, isLoading } = useQuery({
    queryKey: ['team'],
    queryFn: async () => {
      const allMembers = await base44.entities.TeamMember.list();
      return allMembers.sort((a, b) => b.is_owner - a.is_owner);
    },
    initialData: [],
  });

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm mb-6">
            <Users className="w-4 h-4" />
            Our Developers
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 gradient-text text-glow">
            Meet The Team
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            The talented developers behind Project: JJS
          </p>
        </div>

        {/* Team Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-2xl">
                <div className="flex items-start gap-4">
                  <Skeleton className="w-16 h-16 rounded-full bg-purple-900/30" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-6 w-32 bg-purple-900/30" />
                    <Skeleton className="h-4 w-24 bg-purple-900/30" />
                    <Skeleton className="h-4 w-full bg-purple-900/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : members.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {members.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 mb-12">
            <Users className="w-16 h-16 text-purple-400/50 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No team members yet</h3>
            <p className="text-gray-400">Team information will be added soon!</p>
          </div>
        )}

        {/* Join Team CTA */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/50 rounded-3xl p-8 sm:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full opacity-10 blur-3xl" />
            <div className="relative text-center">
              <UserPlus className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Want to Join Our Team?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We're always looking for talented developers to contribute to Project: JJS. 
                Whether you're experienced or just starting out, join us in creating amazing maps!
              </p>
              <a href="https://discord.gg/z73nVKkNgz" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-6 text-lg rounded-xl glow-effect-strong">
                  Join Our Discord
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
