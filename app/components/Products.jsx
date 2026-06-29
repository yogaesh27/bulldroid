"use client"; // REQUIRED: Enables client-side hooks like useRouter

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import logo from "../../public/website-bgro.png";

function HoverBox({ title, children }) {
  return (
    <div
      tabIndex={0}
      className="group border border-gray-200 rounded-xl p-5 sm:p-6 transition hover:shadow-lg focus:outline-none"
    >
      <div className="flex items-center gap-3">
        <svg
          className="w-5 h-5 text-red-500 transition-transform duration-300 group-hover:rotate-90 group-focus-within:rotate-90"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>

        <h4 className="text-lg sm:text-xl font-semibold">{title}</h4>
      </div>

      <div
        className="
        overflow-hidden
        max-h-0
        opacity-0
        transition-all duration-500
        mt-0

        group-hover:max-h-40
        group-hover:opacity-100
        group-hover:mt-4

        group-focus-within:max-h-40
        group-focus-within:opacity-100
        group-focus-within:mt-4
        "
      >
        {/* SAME STYLE AS KEY OPERATIONS */}
        <p className="text-gray-600 text-justify leading-relaxed text-sm sm:text-base group-hover:text-black">
          {children}
        </p>
      </div>
    </div>
  );
}

export function Products() {
const router = useRouter();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="relative inline-block text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-gray-800">
            <span className="relative z-10">Bulldroid MK-1</span>
            <span className="absolute inset-0 bg-red-500/40 blur-xl rounded-lg animate-[pulse_6s_ease-in-out_infinite]"></span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We are building an asset - class product.
          </p>
        </div>
        <div className="group p-2 sm:p-5 border border-gray-200 rounded-xl hover:border-red-500 transition duration-300 hover:-translate-y-2 hover:shadow-lg max-w-3xl mx-auto">
          <h4 className="text-xl sm:text-2xl font-semibold mb-3 text-red-600 text-center">
            We build assets - not just tools.
          </h4>
           <p className="text-gray-800 text-justify leading-relaxed text-sm sm:text-base group-hover:text-black">
            In India, tractors are considered asset-class products because farmers can generate income beyond their own use. We are building a product with the same philosophy.
            </p>
              </div>
              <br />
              <br />

        {/* PROBLEM */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 sm:mb-28">
          <div className="space-y-6 order-1">
            <h3 className="text-2xl sm:text-3xl font-semibold text-red-500">
              The Problem
            </h3>

            <HoverBox title="Labour Shortage in Farming">
              Farmers often struggle to find labour for repetitive farming
              tasks. Many essential activities require manual effort and
              increase overall farming costs.
            </HoverBox>

            <HoverBox title="Physically demanding tasks">
              Tasks like seed broadcasting, fertilizer spreading, and pesticide
              spraying must be performed frequently across large farmlands. They
              are highly labor-intensive.
            </HoverBox>

            <HoverBox title="Reduced Farming Efficiency">
              Dependency on manual labour slows operations and reduces
              efficiency for modern farming systems.
            </HoverBox>
          </div>

          <div className="group order-2">
            <ImageWithFallback
              src="https://wallpaperaccess.com/full/2408569.jpg"
              alt="Traditional farming labour"
              className="rounded-xl shadow-md w-full h-[260px] sm:h-[320px] lg:h-[380px] object-cover transition duration-500 group-hover:scale-[1.04]"
            />
          </div>
        </div>

        {/* SOLUTION */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 sm:mb-28">
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-semibold text-red-500">
              Our Solution
            </h3>

            <HoverBox title="Multi-Purpose Agricultural Robot">
              Bulldroid is developing a robot capable of performing multiple
              farming operations automatically.
            </HoverBox>

            <HoverBox title="User-Friendly By Design">
              The robot is designed to be simple, efficient, and affordable so
              farmers can easily adopt modern technology.
            </HoverBox>
            <HoverBox title="We Build Assets-Not Tools">
              We build asset-class products that generate returns for
              farmers—not commodities that get replaced.
            </HoverBox>

            <HoverBox title="Modular Design">
              With interchangeable components the robot can perform multiple
              agricultural tasks using one intelligent platform.
            </HoverBox>
          </div>
          <div className="order-2 lg:order-1 w-full">
            <video
            controls
            preload="metadata"
            playsInline
            poster={logo?.src || ""} // FIXED: Extracted source string from Next.js asset object
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            className="rounded-xl shadow-md"
            >
              <source src="/videos/agri-robot.mp4" type="video/mp4" />
              Your browser does not support the video tag.
              </video>
            </div>
          </div>
        {/* KEY OPERATIONS (UNCHANGED) */}
        <div className="mb-20 sm:mb-28">
          <div className="text-center mb-12 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-red-500">
              Key Operations
            </h3>

            <p className="text-gray-600 text-base sm:text-lg">
              The Bulldroid robot can automate essential farming tasks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 ">
            <div className="group p-6 sm:p-8 border border-gray-200 rounded-xl hover:border-red-500 transition duration-300 hover:-translate-y-2 hover:shadow-lg ">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-red-600 ">
                Seed Broadcasting
              </h4>

              <p className="text-gray-600 text-justify leading-relaxed text-sm sm:text-base group-hover:text-black">
                Evenly distributes seeds across farmland to improve planting
                efficiency and reduce manual labour.
              </p>
            </div>

            <div className="group p-6 sm:p-8 border border-gray-200 rounded-xl hover:border-red-500 transition duration-300 hover:-translate-y-2 hover:shadow-lg ">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-red-600">
                Fertilizer Spreading
              </h4>

              <p className="text-gray-600 text-justify leading-relaxed text-sm sm:text-base group-hover:text-black">
                Precisely spreads fertilizer across crops to ensure balanced
                nutrient distribution and improved crop growth.
              </p>
            </div>

            <div className="group p-6 sm:p-8 border border-gray-200 rounded-xl hover:border-red-500 transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-red-600">
                Fertilizer Broadcasting
              </h4>

              <p className="text-gray-600 text-justify leading-relaxed text-sm sm:text-base group-hover:text-black">
                Automated spraying system that helps protect crops while
                reducing manual exposure to chemicals.
              </p>
            </div>

            <div className="group p-6 sm:p-8 border border-gray-200 rounded-xl hover:border-red-500 transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-red-600">
                Crop Monitoring
              </h4>

              <p className="text-gray-600 text-justify leading-relaxed text-sm sm:text-base group-hover:text-black">
                Uses sensors and intelligent monitoring systems to track crop
                health, detect early plant diseases, and help farmers make
                data-driven decisions.
              </p>
            </div>
          </div>
        </div>

        {/* PROTOTYPE */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 order-1">
            <h3 className="text-2xl sm:text-3xl font-semibold text-red-500">
              Prototype
            </h3>

            <HoverBox title="Research and Development">
              Bulldroid is currently in the research and development stage with
              a small-scale working prototype.
            </HoverBox>

            <HoverBox title="Concept Demonstration">
              The prototype demonstrates how one robot platform can perform
              multiple agricultural operations.
            </HoverBox>
          </div>

          <div className="group order-2">
            <ImageWithFallback
              src="https://i.ibb.co/1fZ38n2q/prototype-ai-genrated.jpg"
              alt="Robot prototype"
              className="rounded-xl shadow-md w-full h-[260px] sm:h-[320px] lg:h-[380px] object-cover transition duration-500 group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20 animate-fadeIn">
        <button
          onClick={() => router.push("/about")} // FIXED: Replaced undefined navigate function with Next.js router
          className="
      inline-flex items-center gap-2
      px-8 py-4
      bg-red-600 text-white text-lg
      rounded-xl
      shadow-md
      hover:bg-red-700
      hover:shadow-xl
      hover:-translate-y-1
      transition-all duration-300
    "
        >
          Who’s Building This Future ?
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}