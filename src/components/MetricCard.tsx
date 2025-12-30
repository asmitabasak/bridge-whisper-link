import { cn } from "@/lib/utils";
import { StatusIndicator } from "./StatusIndicator";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  change?: number;
  icon: LucideIcon;
  status?: "online" | "offline" | "warning" | "syncing";
  className?: string;
}

export const MetricCard = ({
  title,
  value,
  unit,
  change,
  icon: Icon,
  status,
  className,
}: MetricCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 group hover:border-primary/30 transition-all duration-300",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
          <Icon className="h-5 w-5" />
        </div>
        {status && <StatusIndicator status={status} size="sm" />}
      </div>

      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold font-mono text-foreground">
            {value}
          </span>
          {unit && (
            <span className="text-sm text-muted-foreground">{unit}</span>
          )}
        </div>
        {change !== undefined && (
          <p
            className={cn(
              "text-xs font-medium",
              change >= 0 ? "text-glow-success" : "text-glow-danger"
            )}
          >
            {change >= 0 ? "+" : ""}
            {change}% from last hour
          </p>
        )}
      </div>
    </div>
  );
};
