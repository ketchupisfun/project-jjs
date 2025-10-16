import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown } from "lucide-react";

export default function TeamCard({ member }) {
  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            {member.avatar_url ? (
              <img
                src={member.avatar_url}
                alt={member.discord_username}
                className="w-16 h-16 rounded-full border-2 border-purple-500/50 glow-effect"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center border-2 border-purple-500/50 glow-effect">
                <span className="text-2xl font-bold text-white">
                  {member.discord_username[0].toUpperCase()}
                </span>
              </div>
            )}
            {member.is_owner && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-[#0a0118] animate-pulse">
                <Crown className="w-3 h-3 text-white" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-white truncate">
                {member.discord_username}
              </h3>
              {member.is_owner && (
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 text-xs">
                  OWNER
                </Badge>
              )}
            </div>
            <p className="text-purple-300 text-sm mb-2">{member.role}</p>
            {member.bio && (
              <p className="text-gray-400 text-sm line-clamp-2">{member.bio}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
