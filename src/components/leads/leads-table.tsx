import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { LeadStatusBadge } from "@/components/shared/status-badge"
import { formatFullCurrency } from "@/lib/format"
import type { Lead } from "@/types"

interface LeadsTableProps {
  leads: Lead[]
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function LeadsTable({ leads }: LeadsTableProps) {
  return (
    <div className="rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lead</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>Interest</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Assigned</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id} className="cursor-pointer">
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar size="sm">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {getInitials(lead.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-xs text-muted-foreground">{lead.email}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">{lead.source}</TableCell>
              <TableCell className="max-w-[180px] truncate">
                {lead.propertyInterest}
              </TableCell>
              <TableCell className="font-medium">
                {formatFullCurrency(lead.budget)}
              </TableCell>
              <TableCell>
                <LeadStatusBadge status={lead.status} />
              </TableCell>
              <TableCell className="text-muted-foreground">
                {lead.assignedTo}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
