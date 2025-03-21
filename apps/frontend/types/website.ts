export type WebsiteStatus = "up" | "down";

export interface UptimeDataPoint {
  time: string;
  value: number;
}
