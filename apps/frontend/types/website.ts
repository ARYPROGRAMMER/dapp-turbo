export type WebsiteStatus = "up" | "down";

export interface UptimeDataPoint {
  time: string;
  value: number;
}

export interface WebsiteData {
  url: string;
  status: WebsiteStatus;
  uptime: string;
  latency: string; 
  lastChecked?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface Feature {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export interface StatData {
  number: string;
  label: string;
}
