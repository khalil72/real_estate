import { cn } from '@/lib/utils';
import { ProjectCardProps } from '@/types';
import { ArrowRight, Building2, CalendarClock, MapPin } from 'lucide-react';
import React from 'react'
import { STATUS_CONFIG } from '../status_config';

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const {
    name,
    developer,
    location,
    city,
    priceRange,
    status,
    completionDate,
    units,
    image,
    logo,
    highlight,
  } = project;

  const statusCfg = STATUS_CONFIG[status];

  return (
    <div
      className={cn(
        "group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Highlight ribbon */}
        {highlight && (
          <span className="absolute top-3 left-3 text-[11px] font-bold tracking-wide bg-primary text-white px-2.5 py-1 rounded-lg shadow">
            {highlight}
          </span>
        )}

       
        <span
          className={cn(
            "absolute bottom-3 left-3 text-[11px] font-semibold flex items-center gap-1.5 px-2.5 py-1 rounded-lg",
            statusCfg.bg,
            statusCfg.text
          )}
        >
          <span className={cn("w-1.5 h-1.5 rounded-full", statusCfg.dot)} />
          {statusCfg.label}
        </span>

        {/* Developer logo */}
        {logo && (
          <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white shadow-md overflow-hidden">
            <img src={logo} alt={developer} className="w-full h-full object-contain p-1" />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="text-xs text-gray-400 font-medium mb-0.5">{developer}</p>
        <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">
            {location}, {city}
          </span>
        </div>

        {/* Price range */}
        <p className="text-sm font-bold text-gray-800 mb-4">{priceRange}</p>

        {/* Footer row */}
        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-gray-400" />
              {units} Units
            </span>
            <span className="w-px h-4 bg-gray-200" />
            <span className="flex items-center gap-1.5">
              <CalendarClock className="w-3.5 h-3.5 text-gray-400" />
              {completionDate}
            </span>
          </div>
          <button className="text-primary hover:underline text-xs font-semibold flex items-center gap-1">
            View <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
