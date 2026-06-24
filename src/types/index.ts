export type PropertyStatus = "available" | "pending" | "sold" | "off-market"
export type LeadStatus = "new" | "contacted" | "qualified" | "negotiation" | "closed" | "lost"
export type DealStage = "prospect" | "proposal" | "negotiation" | "closed" | "lost"
export type Priority = "low" | "medium" | "high"

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number | string ;
  priceLabel?: string; 
  type: "sale" | "rent";
  category: string; 
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  featured?: boolean;
  tag?: string; 
  agent?:string;
  status?:any;
  listedAt?:any;
  address?:string;
  city?:string;
}

export interface PropertyCardProps {
  property: Property;
  className?: string;
  

}
export interface SectionProps {
  id: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  ctaLabel?: string;
  onCta?: () => void;
  bg?: string;
  children: React.ReactNode;
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
export type ProjectStatus = "upcoming" | "under-construction" | "completed" | "open";
export interface Project {
  id: string;
  name: string;
  developer: string;
  location: string;
  city: string;
  priceRange: string;       
  status: ProjectStatus;
  completionDate: string;   
  units: number;
  image: string;
  logo?: string;            
  highlight?: string;     
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
}
export interface Agent {
  id: string;
  name: string;
  title: string;         
  agency: string;
  city: string;
  phone: string;
  email: string;
  rating: number;          
  reviews: number;
  listings: number;
  sold: number;
  avatar: string;
  verified?: boolean;
  specialties?: string[];  
}

export interface AgentCardProps {
  agent: Agent;
  className?: string;
}
export interface SlideUpSectionProps {
  children: React.ReactNode;
  delay?: number;
}
