import React from "react";
import { Badge } from "@/components/ui/badge";
import { Circle, Wrench, XCircle } from "lucide-react";

export default function StatusBadge({ status }) {
  const statusConfig = {
    online: {
      icon: Circle,
      text: "Online",
      className: "bg-green-500/20 text-green-400 border-green-500/50 glow-effect",
    },
    maintenance: {
      icon: Wrench,
      text: "Maintenance",
      className: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
    },
    down: {
      icon: XCircle,
      text: "Down",
      className: "bg-red-500/20 text-red-400 border-red-500/50",
    },
  };

  const config = statusConfig[status] || statusConfig.down;
  const Icon = config.icon;

  return (
    <Badge variant="outline" className={`${config.className} flex items-center gap-1.5 px-3 py-1`}>
      <Icon className="w-3 h-3" />
      <span className="font-semibold text-xs uppercase">{config.text}</span>
    </Badge>
  );
}
