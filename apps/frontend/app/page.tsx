"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Activity,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  BarChart3,
  Blocks,
  Stars,
  RefreshCw,
  Users,
  Database,
  Server,
  Lock,
  MessageSquare,
  Wallet,
  Cpu,
  Code,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger } from "@/components/animations/FadeIn";
import { MotionCard } from "@/components/animations/MotionCard";
import { Meteors } from "@/components/ui/meteors";
import dynamic from "next/dynamic";
import { LiveStatusBadge } from "@/components/animations/LiveStatusBadge";
import { DemoWebsiteRow } from "@/components/demo/DemoWebsiteRow";
import { FeatureCard } from "@/components/home/FeatureCard";
import type {
  Feature,
  PricingPlan,
  StatData,
  Testimonial,
} from "@/types/website";

const DynamicPage = dynamic(() => Promise.resolve(HomePage), {
  ssr: false,
});

export default function Page() {
  return <DynamicPage />;
}

function HomePage() {
  // Data definitions
  const features: Feature[] = [
    {
      title: "Real-time Monitoring",
      icon: <Activity className="w-8 h-8 text-primary" />,
      description:
        "Track your dApp's performance with millisecond precision and instant notifications.",
    },
    {
      title: "Decentralized Security",
      icon: <Shield className="w-8 h-8 text-primary" />,
      description:
        "Multi-validator architecture ensures reliable and trustless monitoring.",
    },
    {
      title: "Instant Alerts",
      icon: <Zap className="w-8 h-8 text-primary" />,
      description:
        "Get notified immediately through multiple channels when issues arise.",
    },
    {
      title: "Global Coverage",
      icon: <Globe className="w-8 h-8 text-primary" />,
      description:
        "Monitor from distributed geographic locations for regional insights.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Add Your dApp",
      description:
        "Simply enter your dApp's URL and configure monitoring parameters to get started.",
      icon: <Globe className="w-6 h-6 text-primary" />,
    },
    {
      step: "2",
      title: "Validator Network",
      description:
        "Our decentralized validators continuously monitor your dApp's availability.",
      icon: <Blocks className="w-6 h-6 text-primary" />,
    },
    {
      step: "3",
      title: "Real-time Insights",
      description:
        "Get instant notifications and detailed analytics about your dApp's performance.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
  ];

  const detailedFeatures: Feature[] = [
    {
      title: "Multi-Chain Support",
      icon: <Database className="w-10 h-10 text-primary/90" />,
      description:
        "Monitor applications across Ethereum, Solana, Polygon, and other major blockchains from a single dashboard.",
    },
    {
      title: "Smart Contract Monitoring",
      icon: <Code className="w-10 h-10 text-primary/90" />,
      description:
        "Track smart contract interactions, gas usage, and execution success rates with detailed analytics.",
    },
    {
      title: "Transaction Analysis",
      icon: <Wallet className="w-10 h-10 text-primary/90" />,
      description:
        "Monitor transaction volumes, confirmation times, and failed transaction rates across your dApp.",
    },
    {
      title: "Node Health Monitoring",
      icon: <Server className="w-10 h-10 text-primary/90" />,
      description:
        "Keep track of your RPC nodes with comprehensive health metrics and performance analytics.",
    },
    {
      title: "Security Alerts",
      icon: <Lock className="w-10 h-10 text-primary/90" />,
      description:
        "Get immediate notifications about security issues, suspicious activities, or contract vulnerabilities.",
    },
    {
      title: "Community Insights",
      icon: <Users className="w-10 h-10 text-primary/90" />,
      description:
        "Understand user interactions and community engagement with your dApp through detailed analytics.",
    },
  ];

  const stats: StatData[] = [
    { number: "99.9%", label: "Average Uptime" },
    { number: "500+", label: "Active dApps" },
    { number: "50ms", label: "Avg Response Time" },
    { number: "24/7", label: "Monitoring" },
  ];

  const testimonials: Testimonial[] = [
    {
      quote:
        "The most reliable monitoring solution we've used for our DeFi protocol.",
      author: "Alex Thompson",
      role: "CTO at DeFi Protocol",
      rating: 5,
    },
    {
      quote:
        "Decentralized monitoring gives us peace of mind about our dApp's availability.",
      author: "Sarah Chen",
      role: "Lead Developer at NFT Marketplace",
      rating: 5,
    },
    {
      quote: "Outstanding support and incredibly detailed analytics.",
      author: "Michael Roberts",
      role: "DevOps at Web3 Gaming",
      rating: 5,
    },
  ];

  const blockchains = [
    "Ethereum",
    "Solana",
    "Polygon",
    "Avalanche",
    "BSC",
    "Optimism",
  ];

  const pricingPlans: PricingPlan[] = [
    {
      name: "Startup",
      price: "$29",
      description: "Perfect for small projects",
      features: [
        "5 websites",
        "1-minute check interval",
        "Email notifications",
        "7-day history",
      ],
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
      ],
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
      ],
    },
  ];

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-background to-background/95">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90" />
          <Meteors number={20} />
        </div>

        <main className="container relative mx-auto px-6 py-8">
          <FadeInStagger>
            <div className="flex flex-col items-center space-y-8 py-16">
              <FadeIn>
                <div className="rounded-full border border-primary/30 bg-background/80 backdrop-blur-md px-1.5 py-1.5">
                  <LiveStatusBadge />
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-4 text-center">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                    Monitor Your{" "}
                    <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
                      Web3 Apps
                    </span>
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl">
                    Enterprise-grade monitoring for decentralized applications
                    with blockchain-verified uptime guarantees.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} className="flex flex-col items-center gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/dashboard" legacyBehavior passHref>
                    <Button
                      size="lg"
                      asChild
                      className="group relative h-12 px-8 rounded-full bg-primary hover:bg-primary/90 transition-colors"
                    >
                      <motion.a
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.a>
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 rounded-full border-white/30 hover:bg-white/5 text-white transition-colors"
                  >
                    View Demo
                  </Button>
                </div>
                <p className="text-sm text-white/80">
                  No credit card required · 14-day free trial · Cancel anytime
                </p>
              </FadeIn>

              {/* Enhanced Demo Section */}
              <FadeIn delay={0.6}>
                <div className="w-full max-w-4xl mt-8">
                  <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          Live Status Demo
                        </h3>
                        <p className="text-xs text-white/70">
                          See our monitoring in action
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1 rounded-full h-8 px-3 text-white border-white/20 bg-white/5"
                      >
                        <RefreshCw className="w-3 h-3" /> Refresh
                      </Button>
                    </div>

                    <div className="space-y-2">
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
              </FadeIn>
            </div>

            {/* Feature Cards with more content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-12">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </FadeInStagger>
        </main>

        {/* How It Works Section - High-contrast for better visibility */}
        <section className="py-16 bg-primary/[0.03] backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-white">How It Works</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Our decentralized monitoring system ensures reliable uptime
                tracking through a network of validators.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((item) => (
                <div
                  key={item.step}
                  className="relative bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New: Key Features Section with detailed cards */}
        <section className="py-20 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Key Features</h2>
            <p className="text-white/80 mt-4 max-w-3xl mx-auto">
              Our platform provides comprehensive monitoring solutions
              specifically designed for blockchain applications and web3
              infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.02 }}
                className="bg-black/30 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all"
              >
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-lg bg-primary/10 inline-block mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm flex-grow">
                    {feature.description}
                  </p>
                  <Button
                    variant="link"
                    className="text-primary mt-4 p-0 justify-start"
                  >
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 container mx-auto px-6 border-t border-white/5">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Improved Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-white">
                Trusted by Web3 Leaders
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Join hundreds of blockchain projects that rely on our platform
                for reliable monitoring
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="p-6 rounded-xl border border-primary/20 bg-background/60 backdrop-blur-md space-y-4"
                >
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Stars key={i} className="w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-white/90 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add Partners/Integrations Section */}
        <section className="py-20 container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white">
              Integrated With Leading Blockchains
            </h2>
            <p className="text-white/70 mt-2">
              Seamless monitoring across all major blockchain platforms
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {blockchains.map((chain) => (
              <div
                key={chain}
                className="text-white/50 hover:text-white transition-colors text-xl font-bold"
              >
                {chain}
              </div>
            ))}
          </div>
        </section>

        {/* Improved Pricing Section */}
        <section className="py-24 container mx-auto px-6">
          <div className="bg-black/40 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-white">
                Simple, Transparent Pricing
              </h2>
              <p className="text-white/70 max-w-xl mx-auto">
                Choose the plan that's right for your Web3 project's monitoring
                needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="relative rounded-xl bg-black/50 border border-white/10 p-8 shadow-lg hover:border-primary/20 transition-colors backdrop-blur-md"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-white/70">/mo</span>
                      )}
                    </div>
                    <p className="text-sm text-white/70">{plan.description}</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-white"
                        >
                          <Check className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      {plan.price === "Custom"
                        ? "Contact Sales"
                        : "Get Started"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More visible CTA */}
        <section className="py-24 container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl p-12 border border-white/10 backdrop-blur-md">
            <h2 className="text-4xl font-bold text-white">
              Ready to Monitor Your dApp?
            </h2>
            <p className="text-xl text-white/80 mt-4 mb-8">
              Join hundreds of Web3 projects using our platform for reliable
              uptime monitoring.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="gap-2 rounded-full bg-white text-black hover:bg-white/90"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 text-white hover:bg-white/10"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
