import { LeadPipeline } from "@/module/admin/dashboard/lead-pipeline";
import { RecentActivity } from "@/module/admin/dashboard/recent-activity";
import { StatsCards } from "@/module/admin/dashboard/stats-cards";
import { UpcomingTasks } from "@/module/admin/dashboard/upcoming-tasks";
import { PropertyCard } from "@/module/admin/properties/property-card";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import {
  activities,
  dashboardStats,
  deals,
  properties,
  tasks,
} from "@/lib/mock-data";

export default function DashboardPage() {
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Welcome back, Sarah. Here's your overview for today."
        action={
          <Button variant="outline" size="sm">
            Export Report
          </Button>
        }
      />

      <StatsCards stats={dashboardStats} />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <LeadPipeline deals={deals} />
        </div>
        <div className="lg:col-span-2">
          <UpcomingTasks tasks={tasks} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <RecentActivity activities={activities} />
        </div>
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-lg font-semibold">
              Featured Properties
            </h2>
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
