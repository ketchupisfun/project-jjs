import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User, Calendar } from "lucide-react";
import { format } from "date-fns";
import StatusBadge from "./StatusBadge";

export default function MapCard({ map }) {
  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
      {/* Thumbnail */}
      {map.thumbnail_url && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={map.thumbnail_url}
            alt={map.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-transparent to-transparent" />
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-bold text-white group-hover:text-glow transition-all">
            {map.name}
          </h3>
          <StatusBadge status={map.status} />
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {map.description && (
          <p className="text-gray-400 text-sm line-clamp-2">{map.description}</p>
        )}

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-purple-300">
            <User className="w-4 h-4" />
            <span>{map.creator}</span>
          </div>
          {map.release_date && (
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(map.release_date), "MMM yyyy")}</span>
            </div>
          )}
        </div>

        {map.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-bold text-white animate-pulse-glow">
            FEATURED
          </div>
        )}
      </CardContent>
    </Card>
  );
}
