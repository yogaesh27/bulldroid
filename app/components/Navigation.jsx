"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItem =
    "relative px-4 py-2 rounded-md border border-transparent overflow-hidden transition-all duration-300 hover:border-red-600 hover:text-red-600 hover:text-lg before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-red-500/30 before:to-transparent before:-translate-x-full before:transition-transform before:duration-500 hover:before:translate-x-full";

  const getNavClass = (path) =>
    `${navItem} ${pathname === path ? "text-red-600 border-red-600" : ""}`;

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Bulldroid Logo"
              width={40}
              height={40}
              className="h-13 w-auto"
              priority
            />

            <div className="leading-tight">
              <p className="text-lg font-bold text-red-600">
                BULLDROID
              </p>
              <p className="text-xs text-gray-600">
                AGRI ROBOTICS PVT LTD
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/" className={getNavClass("/")}>
              Home
            </Link>

            <Link href="/products" className={getNavClass("/products")}>
              Products
            </Link>

            <Link href="/about" className={getNavClass("/about")}>
              About Us
            </Link>

            <Link href="/contact" className={getNavClass("/contact")}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md transition ${
              isMenuOpen ? "bg-red-700 text-white" : "bg-transparent"
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t flex flex-col gap-4">
            <Link href="/" onClick={closeMenu} className={getNavClass("/")}>
              Home
            </Link>

            <Link href="/products" onClick={closeMenu} className={getNavClass("/products")}>
              Products
            </Link>

           <Link href="/about" onClick={closeMenu} className={getNavClass("/about")}>
           About Us
           </Link>

            <Link href="/contact" onClick={closeMenu} className={getNavClass("/contact")}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}