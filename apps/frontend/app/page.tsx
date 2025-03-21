"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Shield, Zap, Globe, CheckCircle, BarChart3, Blocks, Stars, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger } from "@/components/animations/FadeIn";
import { MotionCard } from "@/components/animations/MotionCard";
import { Meteors } from "@/components/ui/meteors";
import dynamic from 'next/dynamic';
import { LiveStatusBadge } from "@/components/animations/LiveStatusBadge";

// Use dynamic import for components that use framer-motion to avoid SSR issues
const DynamicMotionDiv = dynamic(() => Promise.resolve(motion.div), { ssr: false });

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/5" />
          <Meteors number={20} />
        </div>
        
        <main className="container relative mx-auto px-6 py-16">
          <FadeInStagger>
            <div className="flex flex-col items-center space-y-10 py-24">
              {/* Enhanced Hero Section */}
              <FadeIn>
                <div className="rounded-full border border-primary/20 bg-background/50 p-1 px-6 backdrop-blur">
                  <LiveStatusBadge />
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-4 text-center">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                    Monitor Your{' '}
                    <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
                      Web3 Apps
                    </span>
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    Enterprise-grade monitoring for decentralized applications with 
                    blockchain-verified uptime guarantees.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} className="flex flex-col items-center gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/dashboard">
                    <Button size="lg" className="group h-12 px-8 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:to-primary">
                      Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-primary/20">
                    View Demo
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  No credit card required · 14-day free trial · Cancel anytime
                </p>
              </FadeIn>

              {/* Enhanced Status Demo */}
              <FadeIn delay={0.6}>
                <div className="w-full max-w-5xl mt-16">
                  <div className="rounded-2xl border bg-gradient-to-b from-background/50 to-background/80 backdrop-blur-xl">
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">Live Status Demo</h3>
                          <p className="text-sm text-muted-foreground">See how our monitoring works in real-time</p>
                        </div>
                        <Button variant="outline" size="sm" className="gap-2 rounded-full">
                          <RefreshCw className="w-4 h-4" /> Refresh
                        </Button>
                      </div>
                      
                      <div className="space-y-3">
                        <DemoWebsiteRow
                          url="demo-defi.eth"
                          status="up"
                          latency="45ms"
                          uptime="99.99%"
                        />
                        <DemoWebsiteRow
                          url="demo-nft.eth"
                          status="up"
                          latency="87ms"
                          uptime="99.95%"
                        />
                        <DemoWebsiteRow
                          url="demo-dao.eth"
                          status="down"
                          latency="543ms"
                          uptime="98.76%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-20">
              {[
                {
                  icon: <Activity className="w-10 h-10 text-primary/90" />,
                  title: "Real-time Monitoring",
                  description: "Track your dApp's performance with millisecond precision and instant notifications when issues arise."
                },
                {
                  icon: <Shield className="w-10 h-10 text-primary/90" />,
                  title: "Decentralized Security",
                  description: "Multi-validator architecture ensures reliable and trustless monitoring across the blockchain ecosystem."
                },
                {
                  icon: <Zap className="w-10 h-10 text-primary/90" />,
                  title: "Instant Alerts",
                  description: "Get notified immediately through multiple channels when your services experience any downtime."
                },
                {
                  icon: <Globe className="w-10 h-10 text-primary/90" />,
                  title: "Global Coverage",
                  description: "Monitor from distributed geographic locations for comprehensive insights into regional performance."
                }
              ].map((feature) => (
                <MotionCard key={feature.title}>
                  <FeatureCard {...feature} />
                </MotionCard>
              ))}
            </div>
          </FadeInStagger>
        </main>

        {/* How it Works Section */}
        <section className="py-24 container mx-auto px-6 border-t border-border/40">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our decentralized monitoring system ensures reliable uptime tracking through a network of validators.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Add Your dApp",
                description: "Simply enter your dApp's URL and configure monitoring parameters to get started.",
                icon: <Globe className="w-6 h-6" />
              },
              {
                step: "2",
                title: "Validator Network",
                description: "Our decentralized validators continuously monitor your dApp's availability.",
                icon: <Blocks className="w-6 h-6" />
              },
              {
                step: "3",
                title: "Real-time Insights",
                description: "Get instant notifications and detailed analytics about your dApp's performance.",
                icon: <BarChart3 className="w-6 h-6" />
              }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 container mx-auto px-6 border-t border-border/40">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "99.9%", label: "Average Uptime" },
              { number: "500+", label: "Active dApps" },
              { number: "50ms", label: "Avg Response Time" },
              { number: "24/7", label: "Monitoring" }
            ].map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 container mx-auto px-6 border-t border-border/40">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Trusted by Web3 Leaders</h2>
            <p className="text-muted-foreground">See what our customers have to say about our platform</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The most reliable monitoring solution we've used for our DeFi protocol.",
                author: "Alex Thompson",
                role: "CTO at DeFi Protocol",
                rating: 5
              },
              {
                quote: "Decentralized monitoring gives us peace of mind about our dApp's availability.",
                author: "Sarah Chen",
                role: "Lead Developer at NFT Marketplace",
                rating: 5
              },
              {
                quote: "Outstanding support and incredibly detailed analytics.",
                author: "Michael Roberts",
                role: "DevOps at Web3 Gaming",
                rating: 5
              }
            ].map((testimonial) => (
              <div key={testimonial.author} className="p-6 rounded-xl border bg-card/50 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Stars key={i} className="w-4 h-4 text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 container mx-auto px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground">Choose the plan that's right for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Startup",
                price: "$29",
                description: "Perfect for small projects",
                features: [
                  "5 websites",
                  "1-minute check interval",
                  "Email notifications",
                  "7-day history",
                ]
              },
              {
                name: "Pro",
                price: "$99",
                description: "For growing businesses",
                features: [
                  "25 websites",
                  "30-second check interval",
                  "Multi-channel alerts",
                  "30-day history",
                  "API access",
                ]
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations",
                features: [
                  "Unlimited websites",
                  "10-second check interval",
                  "Custom integrations",
                  "1-year history",
                  "Priority support",
                  "SLA guarantee",
                ]
              }
            ].map((plan) => (
              <div key={plan.name} className="relative rounded-xl border bg-card p-8 shadow-sm">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">{plan.price === "Custom" ? "Contact Sales" : "Get Started"}</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 container mx-auto px-6 border-t border-border/40">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Ready to Monitor Your dApp?</h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of Web3 projects using our platform for reliable uptime monitoring.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">Schedule a Demo</Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative rounded-2xl border border-border/60 bg-gradient-to-b from-background/50 to-background p-8 hover:border-primary/20 transition-all duration-300"
    >
      <div className="space-y-4">
        <div className="p-3 rounded-xl bg-primary/5 inline-block ring-1 ring-primary/20">
          {icon}
        </div>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function DemoWebsiteRow({ url, status, latency, uptime }: { url: string; status: "up" | "down"; latency: string; uptime: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center justify-between p-4 rounded-xl bg-background/30 border border-border/50 hover:bg-accent/5 hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className={`h-2.5 w-2.5 rounded-full ${status === "up" ? "bg-emerald-500" : "bg-red-500"}`} />
        <span className="font-medium">{url}</span>
      </div>
      <div className="flex items-center gap-6 text-sm">
        <span className="text-muted-foreground">Latency: {latency}</span>
        <span className="text-muted-foreground">Uptime: {uptime}</span>
        <Button variant="ghost" size="sm">Details</Button>
      </div>
    </motion.div>
  );
}

export { DemoWebsiteRow };
