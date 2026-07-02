"use client";

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/website-bgro.png"
          alt="Bulldroid agricultural robot in a farming field"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight break-words">
            Reinventing Farming
          </h1>

          <h2 className="text-base sm:text-xl md:text-2xl font-bold text-white mt-3">
            We make the hardest farm work effortless
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed mt-4">
            We are building an affordable, multipurpose robot that helps
            farmers automate the toughest jobs.
            <br className="hidden sm:block" />
            We aim to make smart agricultural automation accessible to every
            farmer in India.
          </p>

          {/* Button */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base md:text-lg px-5 py-3 sm:px-6 sm:py-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              onClick={() => router.push("/products")}
            >
              This Isn’t A Machine. Tap To See Why
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}