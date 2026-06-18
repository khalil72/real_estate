import {
  ArrowDownRight,
  ArrowUpRight,
  Building2,
  DollarSign,
  Handshake,
  Users,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/format"
import type { DashboardStats } from "@/types"

interface StatsCardsProps {
  stats: DashboardStats
}

const statConfig = [
  {
    key: "totalProperties" as const,
    changeKey: "propertiesChange" as const,
    label: "Total Properties",
    icon: Building2,
    format: (v: number) => String(v),
  },
  {
    key: "activeLeads" as const,
    changeKey: "leadsChange" as const,
    label: "Active Leads",
    icon: Users,
    format: (v: number) => String(v),
  },
  {
    key: "closedDeals" as const,
    changeKey: "dealsChange" as const,
    label: "Closed Deals",
    icon: Handshake,
    format: (v: number) => String(v),
  },
  {
    key: "monthlyRevenue" as const,
    changeKey: "revenueChange" as const,
    label: "Monthly Revenue",
    icon: DollarSign,
    format: formatCurrency,
  },
]

export function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statConfig.map((config) => {
        const value = stats[config.key]
        const change = stats[config.changeKey]
        const isPositive = change >= 0

        return (
          <Card key={config.key} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {config.label}
              </CardTitle>
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                <config.icon className="size-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold tracking-tight">
                {config.format(value)}
              </div>
              <div className="mt-1 flex items-center gap-1 text-xs">
                {isPositive ? (
                  <ArrowUpRight className="size-3 text-emerald-600" />
                ) : (
                  <ArrowDownRight className="size-3 text-destructive" />
                )}
                <span
                  className={
                    isPositive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-destructive"
                  }
                >
                  {isPositive ? "+" : ""}
                  {change}%
                </span>
                <span className="text-muted-foreground">vs last month</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
