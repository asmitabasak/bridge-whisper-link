import { cn } from "@/lib/utils";
import { StatusIndicator } from "./StatusIndicator";
import { Cpu, Signal, Clock } from "lucide-react";

interface DeviceCardProps {
  name: string;
  type: string;
  status: "online" | "offline" | "warning" | "syncing";
  lastSeen: string;
  signalStrength: number;
  dataRate: string;
  className?: string;
}

export const DeviceCard = ({
  name,
  type,
  status,
  lastSeen,
  signalStrength,
  dataRate,
  className,
}: DeviceCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-5 hover:border-primary/40 transition-all duration-300 group cursor-pointer",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-secondary text-primary group-hover:bg-primary/20 transition-colors">
            <Cpu className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-xs text-muted-foreground">{type}</p>
          </div>
        </div>
        <StatusIndicator status={status} size="md" />
      </div>

      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border/50">
        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{lastSeen}</span>
        </div>
        <div className="flex items-center gap-2">
          <Signal className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{signalStrength}%</span>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono text-primary">{dataRate}</span>
        </div>
      </div>
    </div>
  );
};
