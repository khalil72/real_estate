import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DealStageBadge } from "@/components/shared/status-badge"
import { formatFullCurrency } from "@/lib/format"
import type { Deal } from "@/types"

interface DealsTableProps {
  deals: Deal[]
}

export function DealsTable({ deals }: DealsTableProps) {
  return (
    <div className="rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Deal</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Property</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Stage</TableHead>
            <TableHead>Probability</TableHead>
            <TableHead>Close Date</TableHead>
            <TableHead>Agent</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deals.map((deal) => (
            <TableRow key={deal.id} className="cursor-pointer">
              <TableCell className="font-medium">{deal.title}</TableCell>
              <TableCell>{deal.client}</TableCell>
              <TableCell className="max-w-[160px] truncate text-muted-foreground">
                {deal.property}
              </TableCell>
              <TableCell className="font-medium">
                {formatFullCurrency(deal.value)}
              </TableCell>
              <TableCell>
                <DealStageBadge stage={deal.stage} />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={deal.probability} className="h-2 w-16" />
                  <span className="text-xs text-muted-foreground">
                    {deal.probability}%
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {deal.closeDate}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {deal.agent}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
