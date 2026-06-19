import { Search } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Find Your Dream Property With Confidence
        </h1>

        <p className="text-gray-200 mt-4 text-sm md:text-lg">
          Explore luxury homes, apartments, villas and commercial properties in
          top locations.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
            Explore Properties
          </button>

          <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
            Contact Agent
          </button>
        </div>
      </div>

      
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 grid grid-cols-1 md:grid-cols-4 gap-3">
        
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

          {/* Rent / Sale */}
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
    </section>
  );
};

export default HeroSection;
