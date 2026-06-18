import { PropertyCard } from "@/components/properties/property-card"
import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { properties } from "@/lib/mock-data"
import { Filter, Plus, Search } from "lucide-react"

export default function PropertiesPage() {
  const available = properties.filter((p) => p.status === "available")
  const pending = properties.filter((p) => p.status === "pending")
  const sold = properties.filter((p) => p.status === "sold")

  return (
    <div className="space-y-6">
      <PageHeader
        title="Properties"
        description="Manage your property listings and inventory."
        action={
          <Button size="sm" className="gap-1.5">
            <Plus className="size-4" />
            Add Property
          </Button>
        }
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1 sm:max-w-sm">
          <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search properties..." className="pl-8" />
        </div>
        <Button variant="outline" size="sm" className="gap-1.5">
          <Filter className="size-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All ({properties.length})</TabsTrigger>
          <TabsTrigger value="available">
            Available ({available.length})
          </TabsTrigger>
          <TabsTrigger value="pending">Pending ({pending.length})</TabsTrigger>
          <TabsTrigger value="sold">Sold ({sold.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="available" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {available.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="pending" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pending.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="sold" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sold.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
