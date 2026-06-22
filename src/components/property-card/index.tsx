import { cn } from '@/lib/utils';
import { PropertyCardProps } from '@/types';
import { Bath, Bed, Heart, MapPin, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';

const PropertyCard = ({ property, className }: PropertyCardProps) => {
  const {
    title,
    location,
    price,
    priceLabel,
    type,
    category,
    beds,
    baths,
    sqft,
    image,
    featured,
    tag,
  } = property;

  return (
    <div
      className={cn(
        "group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer",
        className
      )}
    >
     
      <div className={cn("relative overflow-hidden", featured ? "h-56" : "h-48")}>
        <Image
        width={56}
        height={56}
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Top-left: Tag badge */}
        {tag && (
          <span className="absolute top-3 left-3 text-[11px] font-semibold tracking-wide bg-primary text-white px-2.5 py-1 rounded-lg shadow">
            {tag}
          </span>
        )}

      
        <Button
          aria-label="Save property"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-sm"
        >
          <Heart className="w-4 h-4 text-gray-500 hover:text-red-500 transition-colors" />
        </Button>

     
        <span
          className={cn(
            "absolute bottom-3 left-3 text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg",
            type === "sale"
              ? "bg-emerald-500 text-white"
              : "bg-sky-500 text-white"
          )}
        >
          For {type === "sale" ? "Sale" : "Rent"}
        </span>

   
        <span className="absolute bottom-3 right-3 text-[11px] font-medium bg-black/50 text-white backdrop-blur-sm px-2.5 py-1 rounded-lg">
          {category}
        </span>
      </div>

   
      <div className="p-4">
 
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          {priceLabel && (
            <span className="text-sm text-gray-400 font-normal">{priceLabel}</span>
          )}
        </div>

       
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1 mb-1.5 group-hover:text-primary transition-colors">
          {title}
        </h3>

   
        <div className="flex items-center gap-1 text-gray-400 mb-4">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span className="text-xs truncate">{location}</span>
        </div>

        
        <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <Bed className="w-3.5 h-3.5 text-gray-400" />
            {beds} Beds
          </span>
          <span className="w-px h-4 bg-gray-200" />
          <span className="flex items-center gap-1.5">
            <Bath className="w-3.5 h-3.5 text-gray-400" />
            {baths} Baths
          </span>
          <span className="w-px h-4 bg-gray-200" />
          <span className="flex items-center gap-1.5">
            <Maximize2 className="w-3.5 h-3.5 text-gray-400" />
            {sqft.toLocaleString()} sqft
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
