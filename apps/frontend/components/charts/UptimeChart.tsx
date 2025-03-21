"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { UptimeDataPoint } from "@/types/website";

const data: UptimeDataPoint[] = [
  { time: "00:00", value: 99.9 },
  { time: "04:00", value: 100 },
  { time: "08:00", value: 99.8 },
  { time: "12:00", value: 99.9 },
  { time: "16:00", value: 99.7 },
  { time: "20:00", value: 100 },
  { time: "24:00", value: 99.9 },
];

export function UptimeChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity={0.2} />
            <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis 
          dataKey="time" 
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={value => `${value}%`}
          domain={[99.5, 100]}
        />
        <Tooltip 
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload as UptimeDataPoint;
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="flex flex-col gap-1">
                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                      {data.time}
                    </span>
                    <span className="font-bold text-muted-foreground">
                      {data.value}%
                    </span>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="rgb(99, 102, 241)"
          strokeWidth={2}
          fill="url(#gradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
