export type PropertyStatus = "available" | "pending" | "sold" | "off-market"
export type LeadStatus = "new" | "contacted" | "qualified" | "negotiation" | "closed" | "lost"
export type DealStage = "prospect" | "proposal" | "negotiation" | "closed" | "lost"
export type Priority = "low" | "medium" | "high"

export interface Property {
  id: string
  title: string
  address: string
  city: string
  price: number
  beds: number
  baths: number
  sqft: number
  status: PropertyStatus
  type: string
  image: string
  agent: string
  listedAt: string
}

export interface Lead {
  id: string
  name: string
  email: string
  phone: string
  source: string
  status: LeadStatus
  propertyInterest: string
  budget: number
  createdAt: string
  assignedTo: string
}

export interface Client {
  id: string
  name: string
  email: string
  phone: string
  type: "buyer" | "seller" | "investor"
  totalDeals: number
  totalValue: number
  lastContact: string
  avatar?: string
}

export interface Deal {
  id: string
  title: string
  client: string
  property: string
  value: number
  stage: DealStage
  probability: number
  closeDate: string
  agent: string
}

export interface Activity {
  id: string
  type: "call" | "email" | "meeting" | "viewing" | "note"
  title: string
  description: string
  time: string
  user: string
}

export interface Task {
  id: string
  title: string
  dueDate: string
  priority: Priority
  relatedTo: string
  completed: boolean
}

export interface DashboardStats {
  totalProperties: number
  activeLeads: number
  closedDeals: number
  monthlyRevenue: number
  propertiesChange: number
  leadsChange: number
  dealsChange: number
  revenueChange: number
}
