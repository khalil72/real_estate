"use client";

import { useEffect, useState } from "react";
import { Search, MapPin, Home, Tag } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

const SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80",
    location: "Islamabad",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1950&q=80",
    location: "Lahore",
  },
  {
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1950&q=80",
    location: "Karachi",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1950&q=80",
    location: "Rawalpindi",
  },
];

const SLIDE_DURATION = 6500; // ms each image stays before the crossfade

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.image}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out"
          style={{
            backgroundImage: `url('${slide.image}')`,
            opacity: index === activeIndex ? 1 : 0,
            animation:
              index === activeIndex
                ? `heroZoom ${SLIDE_DURATION + 2000}ms ease-out forwards`
                : "none",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/75" />

   
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-sm">
          Find Your Dream Property
          <span className="block text-primary-foreground/95">
            With Confidence
          </span>
        </h1>

        <div className="mt-7 flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
            Explore Properties
          </button>

          <button className="px-6 py-3 border border-white/70 text-white rounded-lg font-medium hover:bg-white hover:text-black transition-all">
            Contact Agent
          </button>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 grid grid-cols-1 md:grid-cols-4 items-center gap-3">
          <Select>
            <SelectTrigger className="h-12 w-full">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="islamabad">Islamabad</SelectItem>
              <SelectItem value="lahore">Lahore</SelectItem>
              <SelectItem value="karachi">Karachi</SelectItem>
              <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-12 w-full">
              <SelectValue placeholder="Rent / Sale" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rent">Rent</SelectItem>
              <SelectItem value="sale">Sale</SelectItem>
            </SelectContent>
          </Select>

          {/* Property Type */}
          <Select>
            <SelectTrigger className="h-12 w-full">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="plot">Plot</SelectItem>
            </SelectContent>
          </Select>

          {/* Search Button */}
          <Button className="h-12 flex items-center gap-2">
            <Search className="w-4 h-4" />
            Search
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.08);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
