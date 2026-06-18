import { CheckCircle2, Circle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Task } from "@/types"

const priorityStyles = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  high: "bg-destructive/10 text-destructive",
}

interface UpcomingTasksProps {
  tasks: Task[]
}

export function UpcomingTasks({ tasks }: UpcomingTasksProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-primary" />
          Upcoming Tasks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-start gap-3 rounded-lg border p-3 transition-colors hover:bg-muted/50"
            >
              {task.completed ? (
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />
              ) : (
                <Circle className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              )}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-snug">{task.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {task.relatedTo}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className={priorityStyles[task.priority]}
                  >
                    {task.priority}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {task.dueDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
