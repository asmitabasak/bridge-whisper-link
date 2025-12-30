import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "online" | "offline" | "warning" | "syncing";
  size?: "sm" | "md" | "lg";
  showPulse?: boolean;
  label?: string;
}

const statusColors = {
  online: "bg-glow-success",
  offline: "bg-glow-danger",
  warning: "bg-glow-warning",
  syncing: "bg-primary",
};

const statusGlows = {
  online: "shadow-[0_0_12px_hsl(var(--glow-success)/0.6)]",
  offline: "shadow-[0_0_12px_hsl(var(--glow-danger)/0.6)]",
  warning: "shadow-[0_0_12px_hsl(var(--glow-warning)/0.6)]",
  syncing: "shadow-[0_0_12px_hsl(var(--primary)/0.6)]",
};

const sizes = {
  sm: "h-2 w-2",
  md: "h-3 w-3",
  lg: "h-4 w-4",
};

export const StatusIndicator = ({
  status,
  size = "md",
  showPulse = true,
  label,
}: StatusIndicatorProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div
          className={cn(
            "rounded-full",
            sizes[size],
            statusColors[status],
            statusGlows[status]
          )}
        />
        {showPulse && status !== "offline" && (
          <div
            className={cn(
              "absolute inset-0 rounded-full animate-pulse-ring",
              statusColors[status]
            )}
          />
        )}
      </div>
      {label && (
        <span className="text-sm text-muted-foreground capitalize">{label}</span>
      )}
    </div>
  );
};
