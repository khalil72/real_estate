"use client"
import { Phone, Mail, Star, Home, MessageCircle } from "lucide-react";
import React from 'react'
import { Button } from '../ui/button';
import { AgentCardProps } from "@/types";
import { cn } from "@/lib/utils";

const AgentCard = ({ agent, className }: AgentCardProps) => {
  const {
    name,
    title,
    agency,
    city,
    phone,
    email,
    rating,
    reviews,
    listings,
    sold,
    avatar,
    verified,
    specialties,
  } = agent;

  // Render filled + empty stars
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden",
        className
      )}
    >
      {/* Decorative top band */}
      <div className="h-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />

      <div className="px-5 pb-5 -mt-8">
        {/* Avatar + verified badge */}
        <div className="flex items-end justify-between mb-3">
          <div className="relative">
            <img
              src={avatar}
              alt={name}
              className="w-16 h-16 rounded-2xl object-cover border-4 border-white shadow-md"
            />
            {verified && (
              <span
                title="Verified Agent"
                className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow"
              >
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
            )}
          </div>

          {/* Rating chip */}
          <div className="flex items-center gap-1 bg-amber-50 border border-amber-100 rounded-xl px-2.5 py-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-amber-700">{rating.toFixed(1)}</span>
            <span className="text-xs text-amber-500">({reviews})</span>
          </div>
        </div>

        {/* Name & title */}
        <h3 className="text-base font-bold text-gray-900 leading-tight">{name}</h3>
        <p className="text-xs text-gray-400 mt-0.5 mb-1">{title}</p>
        <p className="text-xs font-medium text-primary">
          {agency} · {city}
        </p>

        {/* Specialties */}
        {specialties && specialties.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {specialties.map((s) => (
              <span
                key={s}
                className="text-[10px] font-semibold uppercase tracking-wide bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="flex gap-4 mt-4 py-3 border-y border-gray-100">
          <div className="text-center flex-1">
            <p className="text-base font-bold text-gray-900">{listings}</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wide">Listings</p>
          </div>
          <div className="w-px bg-gray-100" />
          <div className="text-center flex-1">
            <p className="text-base font-bold text-gray-900">{sold}</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wide">Sold</p>
          </div>
          <div className="w-px bg-gray-100" />
          <div className="text-center flex-1">
            <div className="flex justify-center">
              {stars.map((filled, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-2.5 h-2.5",
                    filled ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200"
                  )}
                />
              ))}
            </div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wide mt-0.5">Rating</p>
          </div>
        </div>

        {/* Contact buttons */}
        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 h-9 gap-1.5 text-xs font-semibold"
            onClick={() => window.open(`tel:${phone}`)}
          >
            <Phone className="w-3.5 h-3.5" />
            Call
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 h-9 gap-1.5 text-xs font-semibold"
            onClick={() => window.open(`mailto:${email}`)}
          >
            <Mail className="w-3.5 h-3.5" />
            Email
          </Button>
          <Button
            size="sm"
            className="flex-1 h-9 gap-1.5 text-xs font-semibold bg-green-500 hover:bg-green-600 border-0"
            onClick={() =>
              window.open(
                `https://wa.me/${phone.replace(/\D/g, "")}`,
                "_blank"
              )
            }
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard
