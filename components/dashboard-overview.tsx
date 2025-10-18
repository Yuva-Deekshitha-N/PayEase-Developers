"use client"

import { ArrowUpRight, ArrowDownLeft, TrendingUp, Wallet } from "lucide-react"

const stats = [
  {
    label: "Total Settled",
    value: "$124,580.50",
    change: "+12.5%",
    icon: Wallet,
    trend: "up",
  },
  {
    label: "This Month",
    value: "$45,230.00",
    change: "+8.2%",
    icon: TrendingUp,
    trend: "up",
  },
  {
    label: "Pending",
    value: "$8,950.25",
    change: "-2.1%",
    icon: ArrowDownLeft,
    trend: "down",
  },
  {
    label: "Success Rate",
    value: "99.8%",
    change: "+0.3%",
    icon: ArrowUpRight,
    trend: "up",
  },
]

export function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.label}
            className="rounded-2xl p-4 bg-card/40 border border-border/40 backdrop-blur-xl hover:border-primary/40 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-foreground/60">{stat.label}</p>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1">
              <span className={cn("text-xs font-medium", stat.trend === "up" ? "text-green-500" : "text-red-500")}>
                {stat.change}
              </span>
              <span className="text-xs text-foreground/60">vs last month</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ")
}
