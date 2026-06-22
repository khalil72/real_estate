'use client'
import Logo from "@/components/ui/logo";
import {
  MapPin,
  Phone,
  Mail,
 
  ArrowRight,
  Home,
  Building2,
  Users,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";



const QUICK_LINKS = [
  { label: "Featured Properties", href: "#featured" },
  { label: "All Properties", href: "#properties" },
  { label: "New Projects", href: "#projects" },
  { label: "Our Agents", href: "#agents" },
  { label: "Contact Us", href: "#contact" },
];

const PROPERTY_TYPES = [
  { label: "Houses for Sale", href: "#" },
  { label: "Apartments for Rent", href: "#" },
  { label: "Luxury Villas", href: "#" },
  { label: "Commercial Spaces", href: "#" },
  { label: "Residential Plots", href: "#" },
  { label: "New Developments", href: "#" },
];

const TOP_CITIES = [
  { label: "Islamabad", count: 248 },
  { label: "Lahore", count: 312 },
  { label: "Karachi", count: 195 },
  { label: "Rawalpindi", count: 143 },
  { label: "Peshawar", count: 87 },
  { label: "Faisalabad", count: 104 },
];

// const SOCIALS = [
//   { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
//   { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
//   { icon: Twitter, href: "#", label: "Twitter / X", color: "hover:bg-sky-500" },
//   { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
// ];

const STATS = [
  { icon: Home, value: "12,000+", label: "Properties Listed" },
  { icon: Users, value: "8,500+", label: "Happy Clients" },
  { icon: Briefcase, value: "320+", label: "Expert Agents" },
  { icon: Building2, value: "95+", label: "Projects Launched" },
];


const ClientFooter = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
     
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xl font-bold text-white leading-none">{value}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

     
        <div className="lg:col-span-1 space-y-5">
        <Logo />

          <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
            Pakistan's most trusted real estate platform — connecting buyers,
            sellers, and renters with the right property since 2015.
          </p>

          {/* Contact snippets */}
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>Blue Area, Islamabad, Pakistan</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:+925112345678" className="hover:text-white transition-colors">
                +92 51 123 4567
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:hello@estatepk.com" className="hover:text-white transition-colors">
                hello@estatepk.com
              </a>
            </li>
          </ul>

          
          {/* <div className="flex items-center gap-2 pt-1">
            {SOCIALS.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={`w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center transition-all ${color} hover:text-white hover:scale-110`}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div> */}
        </div>

       
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 -ml-1 transition-opacity" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Property Types */}
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
            Property Types
          </h4>
          <ul className="space-y-3">
            {PROPERTY_TYPES.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 -ml-1 transition-opacity" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Cities + Newsletter */}
        <div className="space-y-8">
          {/* Top cities */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Top Cities
            </h4>
            <ul className="space-y-2.5">
              {TOP_CITIES.map(({ label, count }) => (
                <li key={label}>
                  <a
                    href="#"
                    className="flex items-center justify-between text-sm text-gray-500 hover:text-white transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 -ml-1 transition-opacity" />
                      {label}
                    </span>
                    <span className="text-xs bg-white/5 text-gray-500 px-2 py-0.5 rounded-full">
                      {count}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-2">
              Stay Updated
            </h4>
            <p className="text-xs text-gray-500 mb-3">
              Get new listings and market updates in your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 min-w-0 h-10 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 px-3 outline-none focus:border-primary/50 focus:bg-white/8 transition-all"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-xl bg-primary hover:bg-primary/90 flex items-center justify-center shrink-0 transition-all hover:scale-105"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} EstatePK. All rights reserved.</p>

          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Cookie Policy", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-gray-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ClientFooter;