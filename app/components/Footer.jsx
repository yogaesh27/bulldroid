"use client";
import Link from "next/link";
import {
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-10 items-start">
          {/* Brand */}
          <div>
            <p className="text-4xl leading-relaxed max-w-md text-gray-400">
              Reinventing Farming
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4 md:items-end text-sm">
            {/* Location */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Alagappa+Incubation+Forum+Karaikudi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-500 transition-all duration-300"
            >
              <MapPin className="h-4 w-4" />
              <span>Alagappa Incubation Forum, Karaikudi</span>
            </a>

            {/* Email */}
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:text-red-500 transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              <span>ceo@bulldroid.in</span>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-center gap-4 relative">
          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center">
            ©2026 Bulldroid Agri Robotics Pvt Ltd. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 md:absolute md:right-0">
            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-800 hover:text-red-500 transition-all duration-300"
            >
              {/* <Twitter className="h-5 w-5" /> */}
            </a>

            {/* LinkedIn (Inline SVG) */}
            <a
              href="https://www.linkedin.com/company/bulldroid-agri-robotics"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-800 hover:text-red-500 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Instagram (Inline SVG) */}
            <a
              href="https://www.instagram.com/bulldroid_agri_robotics?igsh=c2R5azZ6ZTlyamE2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-800 hover:text-red-500 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}