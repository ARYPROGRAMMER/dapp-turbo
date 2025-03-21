"use client";

import { motion } from "framer-motion";
import { FadeIn, FadeInStagger } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Trash2, Globe, ArrowUpRight, Clock, Activity, LineChart, AlertCircle, RefreshCw, Bookmark } from "lucide-react";
import { useState } from "react";
import { UptimeChart } from "@/components/charts/UptimeChart";
import type { WebsiteStatus } from "@/types/website";
import { Skeleton } from "@/components/ui/skeleton";
import { Bell, Settings, Search, Filter } from "lucide-react";

interface WebsiteCardProps {
  url: string;
  status: WebsiteStatus;
  uptime: string;
  responseTime: string;
  lastChecked: string;
}

export default function Dashboard() {
  const [newWebsiteUrl, setNewWebsiteUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="hidden md:flex items-center gap-2 w-96">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search websites..."
                className="bg-transparent border-none w-full focus:outline-none text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 space-y-8">
        <FadeIn>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold">Add New Website</h3>
                  <p className="text-sm text-muted-foreground">Start monitoring a new website in seconds</p>
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
            />
          </FadeIn>
          <FadeIn>
            <StatCard
              icon={<ArrowUpRight className="w-5 h-5 text-emerald-500" />}
              title="Overall Uptime"
              value="99.9%"
              trend="0.2% better than last month"
              trendUp={true}
            />
          </FadeIn>
          <FadeIn>
            <StatCard
              icon={<Clock className="w-5 h-5 text-blue-500" />}
              title="Avg Response Time"
              value="187ms"
              trend="12ms improvement"
              trendUp={true}
            />
          </FadeIn>
          <FadeIn>
            <StatCard
              icon={<AlertCircle className="w-5 h-5 text-yellow-500" />}
              title="Incidents"
              value="3"
              trend="1 resolved today"
              trendUp={false}
            />
          </FadeIn>
        </FadeInStagger>

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
            </Card>
          </FadeIn>

          <FadeIn>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Response Times</CardTitle>
                    <CardDescription>Average across all endpoints</CardDescription>
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
        </FadeInStagger>

        <FadeIn>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Monitored Websites</CardTitle>
                  <CardDescription>Manage and monitor your websites</CardDescription>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Filter className="w-4 h-4" /> Filter
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <RefreshCw className="w-4 h-4" /> Refresh
                  </Button>
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
      </div>
    </motion.div>
  );
}

function StatCard({ 
  icon, 
  title, 
  value, 
  trend,
  trendUp
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  trend: string;
  trendUp: boolean;
}) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="overflow-hidden relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"
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
          <p className={`text-xs flex items-center gap-1 ${trendUp ? 'text-emerald-500' : 'text-amber-500'}`}>
            {trendUp ? <ArrowUpRight className="w-3 h-3" /> : null}
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
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              status === "up" 
                ? "bg-emerald-500/10 text-emerald-500" 
                : "bg-red-500/10 text-red-500"
            }`}>
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
