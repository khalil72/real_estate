import { LeadsTable } from "@/module/admin/leads/leads-table";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { leads } from "@/lib/mock-data";
import { UserPlus } from "lucide-react";

const leadStats = [
  { label: "New", count: leads.filter((l) => l.status === "new").length },
  {
    label: "In Progress",
    count: leads.filter(
      (l) =>
        l.status === "contacted" ||
        l.status === "qualified" ||
        l.status === "negotiation"
    ).length,
  },
  { label: "Closed", count: leads.filter((l) => l.status === "closed").length },
];

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Leads"
        description="Track and nurture your sales pipeline."
        action={
          <Button size="sm" className="gap-1.5">
            <UserPlus className="size-4" />
            Add Lead
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {leadStats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.count}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <LeadsTable leads={leads} />
    </div>
  );
}
