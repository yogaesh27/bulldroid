"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, Phone, User, ArrowLeft, Users } from "lucide-react";

export function CTA() {
  const router = useRouter();

  const [view, setView] = useState("menu");

  const [errors, setErrors] = useState({});
  const [contactSuccess, setContactSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name) newErrors.name = "Please enter your name";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) newErrors.phone = "Phone number required";
    if (!form.message) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setContactSuccess(true);

        setTimeout(() => {
          setContactSuccess(false);
        }, 3000);

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setErrors({});
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again.");
    }
  };

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-xl mx-auto px-4">

        {view === "menu" && (
          <div className="text-center space-y-10 animate-fadeIn">

            <h2 className="relative inline-block text-3xl sm:text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-gray-800">
            <span className="relative z-10">Connect With BULLDROID</span>
            <span className="absolute inset-0 bg-red-500/40 blur-xl rounded-lg animate-[pulse_6s_ease-in-out_infinite]"></span>
          </h2>

            <p className="text-gray-600 transition-opacity duration-500 hover:opacity-80">
              Choose how you would like to interact with us
            </p>

            <div className="grid gap-6 mt-10">

              <button
                onClick={() => setView("contact")}
                className="group bg-white border rounded-xl p-8 shadow hover:shadow-xl transition-all duration-500 hover:border-red-500 hover:scale-[1.03]"
              >
                <h3 className="flex items-center justify-center gap-2 text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors duration-300">
                  <Phone size={20} />
                  Contact Us
                </h3>

                <p className="text-gray-500 transition-opacity duration-300 group-hover:opacity-80">
                  Ask questions, request demos, or partner with us
                </p>
              </button>

              <button
                onClick={() => router.push("/application")}
                className="group bg-white border rounded-xl p-8 shadow hover:shadow-xl transition-all duration-500 hover:border-red-500 hover:scale-[1.03]"
              >
                <h3 className="flex items-center justify-center gap-2 text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors duration-300">
                  <Users size={20} />
                  Join Our Team
                </h3>

                <p className="text-gray-500 transition-opacity duration-300 group-hover:opacity-80">
                  Apply to work with our robotics engineering team
                </p>
              </button>

            </div>
          </div>
        )}

        {view === "contact" && (
          <div className="bg-white p-8 rounded-xl shadow-lg space-y-5 animate-slideUp transition-all duration-500">

            <button
              onClick={() => setView("menu")}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors duration-300"
            >
              <ArrowLeft size={16} />
              Back
            </button>

            <h3 className="text-2xl font-semibold transition-transform duration-500 hover:scale-105">
              Contact Us
            </h3>

            <div>
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
                <User size={18} />
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
                <Mail size={18} />
                <Input
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
                        <div>
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
                <Phone size={18} />
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your message..."
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 h-32 transition-shadow duration-300 focus:shadow-md"
              />

              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <Button
              onClick={handleSubmit}
              className="bg-red-600 hover:bg-red-700 text-white w-full transition-all duration-500 hover:scale-[1.05]"
            >
              Send Message
            </Button>

            {contactSuccess && (
              <div className="mt-3 flex items-center gap-2 text-green-600 text-sm animate-fadeIn">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                Message sent successfully
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}