import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { formatCurrency } from "@/lib/format"
import type { Deal } from "@/types"

interface LeadPipelineProps {
  deals: Deal[]
}

export function LeadPipeline({ deals }: LeadPipelineProps) {
  const activeDeals = deals.filter((d) => d.stage !== "closed" && d.stage !== "lost")
  const totalValue = activeDeals.reduce((sum, d) => sum + d.value, 0)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Deal Pipeline</CardTitle>
          <span className="text-sm text-muted-foreground">
            {formatCurrency(totalValue)} in pipeline
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activeDeals.map((deal) => (
            <div key={deal.id} className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{deal.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {deal.client} · {deal.agent}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-semibold">
                  {formatCurrency(deal.value)}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Progress value={deal.probability} className="h-2" />
                <span className="shrink-0 text-xs text-muted-foreground">
                  {deal.probability}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
