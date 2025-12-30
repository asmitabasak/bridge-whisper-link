import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { MetricCard } from "@/components/MetricCard";
import { DeviceCard } from "@/components/DeviceCard";
import { FeatureCard } from "@/components/FeatureCard";
import { DataFlowVisual } from "@/components/DataFlowVisual";
import {
  Activity,
  Zap,
  Database,
  Shield,
  Wifi,
  BarChart3,
  Layers,
  RefreshCw,
  ArrowRight,
  Radio,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-circuit" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Radio className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">
                Real-time IoT Infrastructure
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Connect Your{" "}
              <span className="text-gradient">IoT Devices</span>
              <br />
              With Ease
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Unified data bridge for IoT sensors, devices, and edge computing.
              Monitor, manage, and analyze your entire IoT ecosystem in real-time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Data Flow Visualization */}
          <div className="max-w-3xl mx-auto">
            <DataFlowVisual />
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="dashboard" className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Live Dashboard Preview
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-time metrics from your connected devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <MetricCard
              title="Active Devices"
              value="1,284"
              icon={Wifi}
              status="online"
              change={12.5}
            />
            <MetricCard
              title="Data Points / sec"
              value="45.2K"
              icon={Activity}
              status="syncing"
              change={8.3}
            />
            <MetricCard
              title="Avg Latency"
              value="24"
              unit="ms"
              icon={Zap}
              status="online"
              change={-15.2}
            />
            <MetricCard
              title="Storage Used"
              value="2.4"
              unit="TB"
              icon={Database}
              status="warning"
              change={5.1}
            />
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section id="devices" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Connected Devices
              </h2>
              <p className="text-muted-foreground">
                Manage and monitor all your IoT devices
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DeviceCard
              name="Temp Sensor A1"
              type="Temperature & Humidity"
              status="online"
              lastSeen="2s ago"
              signalStrength={95}
              dataRate="1.2 KB/s"
            />
            <DeviceCard
              name="Motion Detector B3"
              type="PIR Motion Sensor"
              status="online"
              lastSeen="5s ago"
              signalStrength={88}
              dataRate="0.5 KB/s"
            />
            <DeviceCard
              name="Gateway Hub 01"
              type="Edge Gateway"
              status="syncing"
              lastSeen="1s ago"
              signalStrength={100}
              dataRate="15.8 KB/s"
            />
            <DeviceCard
              name="Power Monitor C2"
              type="Smart Energy Meter"
              status="online"
              lastSeen="3s ago"
              signalStrength={72}
              dataRate="2.1 KB/s"
            />
            <DeviceCard
              name="Pressure Valve D4"
              type="Industrial Sensor"
              status="warning"
              lastSeen="45s ago"
              signalStrength={45}
              dataRate="0.8 KB/s"
            />
            <DeviceCard
              name="Camera Node E1"
              type="Vision Sensor"
              status="offline"
              lastSeen="2h ago"
              signalStrength={0}
              dataRate="--"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale your IoT infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Layers}
              title="Protocol Agnostic"
              description="Connect devices using MQTT, CoAP, HTTP, WebSocket, or custom protocols with our universal adapter layer."
            />
            <FeatureCard
              icon={BarChart3}
              title="Real-time Analytics"
              description="Process millions of data points per second with built-in time-series database and visualization tools."
            />
            <FeatureCard
              icon={Shield}
              title="End-to-End Security"
              description="TLS encryption, device authentication, and role-based access control to keep your data safe."
            />
            <FeatureCard
              icon={Zap}
              title="Edge Computing"
              description="Run computations at the edge to reduce latency and bandwidth costs with our lightweight runtime."
            />
            <FeatureCard
              icon={Database}
              title="Smart Data Pipeline"
              description="Transform, filter, and route data with our visual workflow builder and serverless functions."
            />
            <FeatureCard
              icon={RefreshCw}
              title="Auto-Scaling"
              description="Automatically scale from 10 to 10 million devices with our distributed architecture."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Bridge Your IoT?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start with 100 devices free. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              <span className="font-bold">
                IoT<span className="text-primary">Bridge</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 IoT Data Bridge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
