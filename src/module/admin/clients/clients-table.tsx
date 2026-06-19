import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatCurrency } from "@/lib/format"
import type { Client } from "@/types"

interface ClientsTableProps {
  clients: Client[]
}

const clientTypeStyles = {
  buyer: "bg-sky-500/10 text-sky-700 dark:text-sky-400",
  seller: "bg-violet-500/10 text-violet-700 dark:text-violet-400",
  investor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function ClientsTable({ clients }: ClientsTableProps) {
  return (
    <div className="rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Deals</TableHead>
            <TableHead>Total Value</TableHead>
            <TableHead>Last Contact</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id} className="cursor-pointer">
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar size="sm">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {getInitials(client.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{client.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {client.phone}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={clientTypeStyles[client.type]}
                >
                  {client.type}
                </Badge>
              </TableCell>
              <TableCell>{client.totalDeals}</TableCell>
              <TableCell className="font-medium">
                {formatCurrency(client.totalValue)}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {client.lastContact}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
