import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Map as MapIcon } from "lucide-react";
import MapCard from "../components/maps/MapCard";

export default function Maps() {
  const [filter, setFilter] = React.useState("all");

  const { data: maps, isLoading } = useQuery({
    queryKey: ['maps'],
    queryFn: () => base44.entities.Map.list("-created_date"),
    initialData: [],
  });

  const filteredMaps = filter === "all" 
    ? maps 
    : maps.filter(map => map.status === filter);

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm mb-6">
            <MapIcon className="w-4 h-4" />
            Custom Creations
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 gradient-text text-glow">
            Our Maps
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our collection of custom maps for Jujutsu Shenanigans
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <Tabs value={filter} onValueChange={setFilter} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-4 bg-purple-900/30 border border-purple-500/30">
              <TabsTrigger value="all" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                All
              </TabsTrigger>
              <TabsTrigger value="online" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Online
              </TabsTrigger>
              <TabsTrigger value="maintenance" className="data-[state=active]:bg-yellow-600 data-[state=active]:text-white">
                Maintenance
              </TabsTrigger>
              <TabsTrigger value="down" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Down
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Maps Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full bg-purple-900/20" />
                <Skeleton className="h-8 w-3/4 bg-purple-900/20" />
                <Skeleton className="h-4 w-full bg-purple-900/20" />
              </div>
            ))}
          </div>
        ) : filteredMaps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaps.map((map) => (
              <MapCard key={map.id} map={map} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <MapIcon className="w-16 h-16 text-purple-400/50 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No maps found</h3>
            <p className="text-gray-400">
              {filter === "all" 
                ? "No maps have been added yet. Check back soon!"
                : `No maps with status "${filter}" at the moment.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
