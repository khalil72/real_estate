import {
  Calendar,
  CheckCircle2,
  Circle,
  Mail,
  MessageSquare,
  Phone,
  StickyNote,
  Users,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Activity } from "@/types"

const activityIcons = {
  call: Phone,
  email: Mail,
  meeting: Users,
  viewing: Calendar,
  note: StickyNote,
}

const activityColors = {
  call: "bg-sky-500/10 text-sky-600",
  email: "bg-violet-500/10 text-violet-600",
  meeting: "bg-amber-500/10 text-amber-600",
  viewing: "bg-emerald-500/10 text-emerald-600",
  note: "bg-muted text-muted-foreground",
}

interface RecentActivityProps {
  activities: Activity[]
}

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="size-4 text-primary" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activityIcons[activity.type]
            const colorClass = activityColors[activity.type]

            return (
              <div key={activity.id} className="flex gap-3">
                <div
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full ${colorClass}`}
                >
                  <Icon className="size-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.title}
                  </p>
                  <p className="mt-1 truncate text-xs text-muted-foreground">
                    {activity.description}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {activity.time} · {activity.user}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
