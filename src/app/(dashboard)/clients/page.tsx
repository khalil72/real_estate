import { ClientsTable } from "@/components/clients/clients-table"
import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { clients } from "@/lib/mock-data"
import { formatCurrency } from "@/lib/format"
import { UserPlus } from "lucide-react"

export default function ClientsPage() {
  const totalValue = clients.reduce((sum, c) => sum + c.totalValue, 0)
  const totalDeals = clients.reduce((sum, c) => sum + c.totalDeals, 0)

  return (
    <div className="space-y-6">
      <PageHeader
        title="Clients"
        description="Manage buyer, seller, and investor relationships."
        action={
          <Button size="sm" className="gap-1.5">
            <UserPlus className="size-4" />
            Add Client
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Clients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{clients.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Deals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalDeals}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Portfolio Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{formatCurrency(totalValue)}</p>
          </CardContent>
        </Card>
      </div>

      <ClientsTable clients={clients} />
    </div>
  )
}
