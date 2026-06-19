import { DealsTable } from "@/module/admin/deals/deals-table";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deals } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/format";
import { Handshake } from "lucide-react";

export default function DealsPage() {
  const activeDeals = deals.filter(
    (d) => d.stage !== "closed" && d.stage !== "lost"
  );
  const closedDeals = deals.filter((d) => d.stage === "closed");
  const pipelineValue = activeDeals.reduce((sum, d) => sum + d.value, 0);
  const closedValue = closedDeals.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Deals"
        description="Monitor deal progress and closing timelines."
        action={
          <Button size="sm" className="gap-1.5">
            <Handshake className="size-4" />
            New Deal
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Deals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{activeDeals.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pipeline Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {formatCurrency(pipelineValue)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Closed Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{formatCurrency(closedValue)}</p>
          </CardContent>
        </Card>
      </div>

      <DealsTable deals={deals} />
    </div>
  );
}
