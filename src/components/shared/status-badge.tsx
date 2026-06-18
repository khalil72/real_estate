import { Badge } from "@/components/ui/badge"
import type {
  DealStage,
  LeadStatus,
  PropertyStatus,
} from "@/types"

const propertyStatusConfig: Record<
  PropertyStatus,
  { label: string; className: string }
> = {
  available: {
    label: "Available",
    className: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  },
  pending: {
    label: "Pending",
    className: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  },
  sold: {
    label: "Sold",
    className: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  },
  "off-market": {
    label: "Off Market",
    className: "bg-muted text-muted-foreground",
  },
}

const leadStatusConfig: Record<
  LeadStatus,
  { label: string; className: string }
> = {
  new: {
    label: "New",
    className: "bg-violet-500/10 text-violet-700 dark:text-violet-400",
  },
  contacted: {
    label: "Contacted",
    className: "bg-sky-500/10 text-sky-700 dark:text-sky-400",
  },
  qualified: {
    label: "Qualified",
    className: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  },
  negotiation: {
    label: "Negotiation",
    className: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  },
  closed: {
    label: "Closed",
    className: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  },
  lost: {
    label: "Lost",
    className: "bg-destructive/10 text-destructive",
  },
}

const dealStageConfig: Record<
  DealStage,
  { label: string; className: string }
> = {
  prospect: {
    label: "Prospect",
    className: "bg-violet-500/10 text-violet-700 dark:text-violet-400",
  },
  proposal: {
    label: "Proposal",
    className: "bg-sky-500/10 text-sky-700 dark:text-sky-400",
  },
  negotiation: {
    label: "Negotiation",
    className: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  },
  closed: {
    label: "Closed",
    className: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  },
  lost: {
    label: "Lost",
    className: "bg-destructive/10 text-destructive",
  },
}

export function PropertyStatusBadge({ status }: { status: PropertyStatus }) {
  const config = propertyStatusConfig[status]
  return (
    <Badge variant="outline" className={config.className}>
      {config.label}
    </Badge>
  )
}

export function LeadStatusBadge({ status }: { status: LeadStatus }) {
  const config = leadStatusConfig[status]
  return (
    <Badge variant="outline" className={config.className}>
      {config.label}
    </Badge>
  )
}

export function DealStageBadge({ stage }: { stage: DealStage }) {
  const config = dealStageConfig[stage]
  return (
    <Badge variant="outline" className={config.className}>
      {config.label}
    </Badge>
  )
}
