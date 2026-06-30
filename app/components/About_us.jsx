"use client"; // REQUIRED: Allows client-side routing in Next.js
import { Sparkles, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation"; 
import { founders } from "../../src/constants/founders"; // Verify this path matches your directory setup
import ScrollToTop from "./ui/ScrollToTop";
import Image from "next/image";

export default function AboutUs() {
  const router = useRouter(); 

  return (
    <section className="py-24 bg-gray-50">
      <ScrollToTop />

      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER with glow */}
        <div className="text-center mb-20 animate-fadeIn">
          <h2 className="relative inline-block text-4xl md:text-5xl mb-4 font-semibold text-gray-800">
            <span className="relative z-10">About Bulldroid</span>
            <span className="absolute inset-0 bg-red-500/40 blur-xl rounded-lg animate-pulse"></span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We come from agricultural family backgrounds. We are solving this
            for ourselves—and for every farmer.
          </p>
        </div>

        {/* FOUNDERS GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-md border border-gray-200 
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center">
                
                {/* 🔒 FIXED SIZE CONTAINER (Removes pink border, locks identical dimensions) */}
                <div className="w-48 h-64 overflow-hidden rounded-xl mb-6 bg-gray-100 flex items-center justify-center">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={192}
                    height={256}
                    className="w-full h-full object-cover block border-none outline-none p-0 m-0 transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h4 className="text-xl font-semibold mb-1">{founder.name}</h4>
                <p className="text-red-600 font-medium mb-4">{founder.role}</p>

                <div className="text-gray-600 space-y-2 text-sm">
                  <p>{founder.education}</p>
                  <p>{founder.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* INCUBATION */}
        <div
          className="mt-16 bg-white rounded-2xl p-10 shadow-md border border-gray-200 
          hover:shadow-xl transition-all duration-500"
        >
          <h3 className="text-3xl font-semibold text-center mb-10 flex items-center justify-center gap-2">
            <Sparkles className="text-red-600" /> Incubation Details
          </h3>

          {/* LOGOS (Fixed standard heights, single row setup) */}
          <div className="flex flex-row flex-nowrap justify-center items-center gap-8 sm:gap-14 mb-10 overflow-hidden py-2">
            <Image
            src="/images/manage.png"
            alt="MANAGE logo"
            width={160}
            height={130}
            className="h-[130px] sm:h-[160px] w-auto object-contain hover:scale-110 transition duration-300"
            />
            <Image
            src="/images/alagappa.png"
            width={220}
            height={200}
            className="h-[200px] sm:h-[220px] w-auto object-contain hover:scale-110 transition duration-300"
            alt="Alagappa logo"
            />
            <Image
            src="/images/mkv.png"
            width={180}
            height={150}
            className="h-[150px] sm:h-[180px] w-auto object-contain hover:scale-110 transition duration-300"
            alt="MKV logo"
            />
            <Image
            src="/images/gov.png"
            width={85}
            height={100}
            className="h-[100px] sm:h-[85px] w-auto object-contain hover:scale-110 transition duration-300"
            alt="Gov logo"
            />
            </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-justify max-w-4xl mx-auto leading-relaxed mb-12">
            Our startup is proudly incubated under{" "}
            <a
              href="https://www.manage.gov.in/managecia/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-red-700 inline-block relative
                  after:block after:h-[2px] after:bg-red-600 after:scale-x-0 
                  after:transition-transform after:duration-300 
                  hover:after:scale-x-100 after:origin-left"
            >
              MANAGE-CIA, Hyderabad
            </a>{" "}
            and{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Alagappa+Incubation+Forum+Karaikudi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-red-700 inline-block relative
                  after:block after:h-[2px] after:bg-red-600 after:scale-x-0 
                  after:transition-transform after:duration-300 
                  hover:after:scale-x-100 after:origin-left"
            >
              Alagappa Incubation Forum
            </a>
            , supported by Government of India innovation ecosystems. We have
            also been awarded funding under the prestigious{" "}
            <a
              href="https://www.manage.gov.in/managecia/RKVYProg.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-red-700 inline-block relative
                  after:block after:h-[2px] after:bg-red-600 after:scale-x-0 
                  after:transition-transform after:duration-300 
                  hover:after:scale-x-100 after:origin-left"
            >
              RKVY-RAFTAAR
            </a>{" "}
            program, recognizing our work as innovative, scalable, and
            impactful. We are also recognized as a <span className="font-semibold text-red-700">DPIIT-certified startup</span> under the Startup India initiative.
          </p>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="group p-6 rounded-xl border border-gray-200 
              hover:border-red-500 hover:-translate-y-2 hover:shadow-lg transition duration-300 
              flex items-center justify-center text-center min-h-[120px]"
            >
              <h4 className="font-semibold mb-2 text-red-600">
                <a
                  href="https://www.manage.gov.in/managecia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block
                  after:block after:h-[2px] after:bg-red-600 after:scale-x-0 
                  after:transition-transform after:duration-300 
                  hover:after:scale-x-100 after:origin-left"
                >
                  MANAGE-CIA, Hyderabad
                </a>
              </h4>
            </div>

            <div
              className="group p-6 rounded-xl border border-gray-200 
              hover:border-red-500 hover:-translate-y-2 hover:shadow-lg transition duration-300 
              flex items-center justify-center text-center min-h-[120px]"
            >
              <h4 className="font-semibold mb-2 text-red-600">
                <a
                  href="https://accet.ac.in/incubation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block
                  after:block after:h-[2px] after:bg-red-600 after:scale-x-0 
                  after:transition-transform after:duration-300 
                  hover:after:scale-x-100 after:origin-left"
                >
                  Alagappa Incubation Forum
                </a>
              </h4>
            </div>

            <div
              className="group p-6 rounded-xl border border-gray-200 
              hover:border-red-500 hover:-translate-y-2 hover:shadow-lg transition duration-300 
              flex items-center justify-center text-center min-h-[120px]"
            >
              <h4 className="font-semibold mb-2 text-red-600">
                <a
                  href="/documents/Bulldroid_DPIT.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block
                  after:block after:h-[2px] after:bg-red-600 after:scale-x-0 
                  after:transition-transform after:duration-300 
                  hover:after:scale-x-100 after:origin-left"
                >
                  DPIIT Certificate
                </a>
              </h4>
            </div>

            <div
              className="group p-6 rounded-xl border border-gray-200 
              hover:border-red-500 hover:-translate-y-2 hover:shadow-lg transition duration-300 
              flex items-center justify-center text-center min-h-[120px]"
            >
              <div>
                <h4 className="font-semibold mb-2 text-red-600">
                  Govt Program
                </h4>

                <p className="text-gray-600 text-sm group-hover:text-black">
                  <a
                    href="https://www.manage.gov.in/managecia/RKVYProg.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block
                    after:block after:h-[2px] after:bg-black after:scale-x-0 
                    after:transition-transform after:duration-300 
                    hover:after:scale-x-100 after:origin-left"
                  >
                    RKVY-RAFTAAR
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="text-center mt-20 animate-fadeIn">
          <button
            onClick={() => router.push("/contact")}
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
            Be Part Of What’s Coming
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}