import { ProjectStatus } from "@/types";

export const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; bg: string; text: string; dot: string }
> = {
  upcoming: {
    label: "Upcoming",
    bg: "bg-amber-50",
    text: "text-amber-700",
    dot: "bg-amber-400",
  },
  "under-construction": {
    label: "Under Construction",
    bg: "bg-sky-50",
    text: "text-sky-700",
    dot: "bg-sky-400",
  },
  completed: {
    label: "Completed",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    dot: "bg-emerald-400",
  },
  open: {
    label: "Open for Booking",
    bg: "bg-violet-50",
    text: "text-violet-700",
    dot: "bg-violet-400",
  },
};