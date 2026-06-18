import Image from "next/image"
import { Bath, BedDouble, MapPin, Maximize2 } from "lucide-react"

import { PropertyStatusBadge } from "@/components/shared/status-badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { formatFullCurrency } from "@/lib/format"
import type { Property } from "@/types"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3">
          <PropertyStatusBadge status={property.status} />
        </div>
        <div className="absolute bottom-3 left-3 rounded-md bg-background/90 px-2 py-1 text-xs font-medium backdrop-blur-sm">
          {property.type}
        </div>
      </div>
      <CardContent className="pt-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold leading-tight">{property.title}</h3>
            <p className="shrink-0 font-bold text-primary">
              {formatFullCurrency(property.price)}
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="size-3 shrink-0" />
            <span className="truncate">
              {property.address}, {property.city}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <BedDouble className="size-3.5" />
              {property.beds} beds
            </span>
            <span className="flex items-center gap-1">
              <Bath className="size-3.5" />
              {property.baths} baths
            </span>
            <span className="flex items-center gap-1">
              <Maximize2 className="size-3.5" />
              {property.sqft.toLocaleString()} sqft
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        Listed by {property.agent} · {property.listedAt}
      </CardFooter>
    </Card>
  )
}
