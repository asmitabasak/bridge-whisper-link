import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface DataPacket {
  id: number;
  x: number;
  delay: number;
}

export const DataFlowVisual = () => {
  const [packets, setPackets] = useState<DataPacket[]>([]);

  useEffect(() => {
    const initialPackets = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: i * 0.4,
    }));
    setPackets(initialPackets);
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Central hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center glow-primary">
            <div className="w-10 h-10 rounded-full bg-primary/40 data-pulse" />
          </div>
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse-ring" />
          <div className="absolute inset-[-8px] rounded-full border border-primary/20 animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
        </div>
      </div>

      {/* Data streams */}
      {packets.map((packet) => (
        <div
          key={packet.id}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{
            top: `${15 + packet.id * 10}%`,
            left: 0,
            right: 0,
            animation: `flow 3s linear infinite`,
            animationDelay: `${packet.delay}s`,
          }}
        >
          <div
            className="absolute w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
            style={{
              top: "-6px",
              animation: `flow 3s linear infinite`,
              animationDelay: `${packet.delay}s`,
            }}
          />
        </div>
      ))}

      {/* Connection nodes */}
      {[
        { x: "10%", y: "20%" },
        { x: "85%", y: "30%" },
        { x: "15%", y: "70%" },
        { x: "90%", y: "75%" },
        { x: "5%", y: "45%" },
        { x: "95%", y: "50%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-secondary border border-primary/50"
          style={{ left: pos.x, top: pos.y }}
        >
          <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping" style={{ animationDuration: "2s", animationDelay: `${i * 0.3}s` }} />
        </div>
      ))}
    </div>
  );
};
