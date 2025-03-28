"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, FadeInStagger } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PlusCircle,
  Trash2,
  Globe,
  ArrowUpRight,
  Clock,
  Activity,
  LineChart,
  AlertCircle,
  RefreshCw,
  Bookmark,
  Bell,
  Settings,
  Search,
  Filter,
  Home,
  Cpu,
  GaugeCircle,
  LayoutDashboard,
  ArrowDownRight,
  Shield,
  Zap,
  Server,
  AlertTriangle,
  Flag,
  User,
  Calendar,
} from "lucide-react";
import { useState, useEffect } from "react";
import { UptimeChart } from "@/components/charts/UptimeChart";
import type { WebsiteStatus } from "@/types/website";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

interface WebsiteCardProps {
  url: string;
  status: WebsiteStatus;
  uptime: string;
  responseTime: string;
  lastChecked: string;
  incidents?: number;
}

interface Incident {
  id: number;
  website: string;
  description: string;
  status: "active" | "resolved";
  duration: string;
  impact: "high" | "medium" | "low";
  timestamp: string;
}

export default function Dashboard() {
  const [newWebsiteUrl, setNewWebsiteUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeView, setActiveView] = useState("overview");
  const [refreshKey, setRefreshKey] = useState(0);
  const [currentDateTime, setCurrentDateTime] = useState("2025-03-21 20:48:59");
  const [currentUser] = useState("ARYPROGRAMMER");
  const [activeIncidents, setActiveIncidents] = useState<Incident[]>([
    {
      id: 1,
      website: "nft-marketplace.io",
      description: "High latency detected",
      status: "active",
      duration: "15m",
      impact: "medium",
      timestamp: "2025-03-21 20:33:59",
    },
    {
      id: 2,
      website: "defi-protocol.com",
      description: "DNS resolution issues",
      status: "active",
      duration: "45m",
      impact: "high",
      timestamp: "2025-03-21 20:03:59",
    },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const formatted = now.toISOString().replace("T", " ").slice(0, 19);
      setCurrentDateTime(formatted);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setRefreshKey(prev => prev + 1);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="min-h-screen bg-background"
    >
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <motion.h1 
              className="text-xl font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Dashboard
            </motion.h1>
            <div className="hidden md:flex items-center gap-2 w-96 relative">
              <Search className="w-4 h-4 text-muted-foreground absolute left-2" />
              <input
                type="text"
                placeholder="Search websites..."
                className="bg-background/50 border border-border/50 rounded-md pl-8 pr-4 py-1 w-full focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {currentDateTime}
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <User className="w-4 h-4" />
              {currentUser}
            </div>
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <Home className="w-4 h-4" /> Home
              </Button>
            </Link>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-6 pb-1">
          <div className="flex space-x-4 border-b border-transparent">
            {["overview", "performance", "nodes", "incidents"].map((view) => (
              <Button
                key={view}
                variant="link"
                className={`pb-2 px-0 ${
                  activeView === view
                    ? "border-b-2 border-primary text-white"
                    : "text-muted-foreground"
                }`}
                onClick={() => setActiveView(view)}
              >
                {view === "overview" && <LayoutDashboard className="w-4 h-4 mr-2" />}
                {view === "performance" && <GaugeCircle className="w-4 h-4 mr-2" />}
                {view === "nodes" && <Cpu className="w-4 h-4 mr-2" />}
                {view === "incidents" && <AlertTriangle className="w-4 h-4 mr-2" />}
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="container mx-auto px-6 py-6 space-y-6"
        >
          <FadeIn>
            <Card className="bg-black/20 border-primary/20">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      Add New Website
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Start monitoring a new website in seconds
                    </p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <Input
                      placeholder="https://your-dapp.com"
                      value={newWebsiteUrl}
                      onChange={(e) => setNewWebsiteUrl(e.target.value)}
                      className="w-full sm:w-64"
                    />
                    <Button className="gap-2 whitespace-nowrap">
                      <PlusCircle className="w-4 h-4" /> Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeInStagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <FadeIn>
              <StatCard
                icon={<Globe className="w-5 h-5 text-primary" />}
                title="Total Websites"
                value="12"
                trend="+2 this week"
                trendUp={true}
                glowing={true}
              />
            </FadeIn>
            <FadeIn>
              <StatCard
                icon={<Zap className="w-5 h-5 text-emerald-500" />}
                title="Overall Uptime"
                value="99.9%"
                trend="0.2% better than last month"
                trendUp={true}
                glowing={true}
              />
            </FadeIn>
            <FadeIn>
              <StatCard
                icon={<Server className="w-5 h-5 text-blue-500" />}
                title="Avg Response Time"
                value="187ms"
                trend="12ms improvement"
                trendUp={true}
                glowing={true}
              />
            </FadeIn>
            <FadeIn>
              <StatCard
                icon={<Flag className="w-5 h-5 text-yellow-500" />}
                title="Active Incidents"
                value={activeIncidents.length.toString()}
                trend={`${activeIncidents.length} need attention`}
                trendUp={false}
                glowing={true}
              />
            </FadeIn>
          </FadeInStagger>

          {activeIncidents.length > 0 && (
            <FadeIn>
              <Card className="border-red-500/20 bg-red-500/5">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <CardTitle>Active Incidents</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeIncidents.map((incident) => (
                      <motion.div
                        key={incident.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-background/50 border border-border/50"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{incident.website}</h4>
                            <p className="text-sm text-muted-foreground">
                              {incident.description}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Reported at: {incident.timestamp}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">
                              Duration: {incident.duration}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                incident.impact === "high"
                                  ? "bg-red-500/20 text-red-500"
                                  : incident.impact === "medium"
                                  ? "bg-yellow-500/20 text-yellow-500"
                                  : "bg-blue-500/20 text-blue-500"
                              }`}
                            >
                              {incident.impact} impact
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          )}

          <FadeInStagger className="grid md:grid-cols-2 gap-6">
            <FadeIn>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Overall Uptime</CardTitle>
                      <CardDescription>Last 24 hours performance</CardDescription>
                    </div>
                    <Tabs defaultValue="24h" className="space-y-4">
                      <TabsList>
                        <TabsTrigger value="24h">24h</TabsTrigger>
                        <TabsTrigger value="7d">7d</TabsTrigger>
                        <TabsTrigger value="30d">30d</TabsTrigger>
                      </TabsList>
                      <TabsContent value="24h">
                        <UptimeChart />
                      </TabsContent>
                      <TabsContent value="7d">
                        <UptimeChart />
                      </TabsContent>
                      <TabsContent value="30d">
                        <UptimeChart />
                      </TabsContent>
                    </Tabs>
                  </div>
                </CardHeader>
                <CardContent>
                  <UptimeChart />
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Response Times</CardTitle>
                      <CardDescription>
                        Average across all endpoints
                      </CardDescription>
                    </div>
                    <Tabs defaultValue="24h" className="space-y-4">
                      <TabsList>
                        <TabsTrigger value="24h">24h</TabsTrigger>
                        <TabsTrigger value="7d">7d</TabsTrigger>
                        <TabsTrigger value="30d">30d</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </CardHeader>
                <CardContent>
                  <UptimeChart />
                </CardContent>
              </Card>
            </FadeIn>
          </FadeInStagger>

          <FadeIn>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Monitored Websites</CardTitle>
                    <CardDescription>
                      Manage and monitor your websites
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-3">
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Filter className="w-4 h-4" /> Filter
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={handleRefresh}
                      >
                        <RefreshCw
                          className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`}
                        />
                        Refresh
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {isLoading ? (
                    Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-[250px]" />
                          <Skeleton className="h-4 w-[200px]" />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="grid gap-4">
                      <WebsiteCard
                        url="https://example-dapp.eth"
                        status="up"
                        uptime="99.98%"
                        responseTime="142ms"
                        lastChecked="2 mins ago"
                      />
                      <WebsiteCard
                        url="https://defi-protocol.com"
                        status="up"
                        uptime="99.85%"
                        responseTime="165ms"
                        lastChecked="1 min ago"
                      />
                      <WebsiteCard
                        url="https://nft-marketplace.io"
                        status="down"
                        uptime="98.76%"
                        responseTime="543ms"
                        lastChecked="4 mins ago"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function StatCard({
  icon,
  title,
  value,
  trend,
  trendUp,
  glowing = false,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  glowing?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        className={`overflow-hidden relative ${glowing ? "border-primary/30" : ""}`}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
        <CardHeader>
          <div className="flex justify-between">
            {icon}
            <Bookmark className="w-4 h-4 text-muted-foreground/40" />
          </div>
        </CardHeader>
        <CardContent className="pb-0 pt-2">
          <div className="space-y-1">
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </CardContent>
        <CardFooter>
          <p
            className={`text-xs flex items-center gap-1 ${
              trendUp ? "text-emerald-500" : "text-amber-500"
            }`}
          >
            {trendUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {trend}
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

function WebsiteCard({
  url,
  status,
  uptime,
  responseTime,
  lastChecked,
}: WebsiteCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6">
          <div className="flex items-center gap-4">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                status === "up"
                  ? "bg-emerald-500/10 text-emerald-500"
                  : "bg-red-500/10 text-red-500"
              }`}
            >
              {status === "up" ? (
                <ArrowUpRight className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
            </div>
            <div>
              <h3 className="font-medium text-base">{url}</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span>Uptime: {uptime}</span>
                <span>Response: {responseTime}</span>
                <span>Last checked: {lastChecked}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 ml-auto">
            <Button variant="outline" size="sm" className="gap-2">
              <Activity className="w-4 h-4" /> View Details
            </Button>
            <Button variant="destructive" size="sm" className="gap-2">
              <Trash2 className="w-4 h-4" /> Remove
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}