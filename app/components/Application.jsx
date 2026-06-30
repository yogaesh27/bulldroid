"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, User, Phone, ArrowLeft } from "lucide-react";
import internship from "../../public/images/internship.png";
import Image from "next/image";

export default function Application() {
  const [internDomain, setInternDomain] = useState("");

  const router = useRouter();

  const [joinErrors, setJoinErrors] = useState({});
  const [joinSuccess, setJoinSuccess] = useState(false);

  const [joinForm, setJoinForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const handleJoinChange = (e) => {
    setJoinForm({ ...joinForm, [e.target.name]: e.target.value });
  };

  const handleJoinSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!joinForm.name) newErrors.name = "Name required";
    if (!joinForm.email) newErrors.email = "Email required";
    if (!joinForm.phone) newErrors.phone = "Phone number required";
    if (!joinForm.role) newErrors.role = "Please select a role";
    if (!joinForm.message) newErrors.message = "Tell us about yourself";

    if (joinForm.role === "Intern" && !internDomain) {
      newErrors.internDomain = "Please enter your internship domain";
    }

    setJoinErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      const res = await fetch("/api/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...joinForm,
          internDomain,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setJoinSuccess(true);
        setTimeout(() => setJoinSuccess(false), 3000);

        setJoinForm({
          name: "",
          email: "",
          phone: "",
          role: "",
          message: "",
        });

        setInternDomain("");
        setJoinErrors({});
      } else {
        alert("Failed to submit application.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again.");
    }
  };

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg space-y-5 animate-slideUp transition-all duration-500">
          {/* BACK BUTTON */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors duration-300"
          >
            <ArrowLeft size={16} /> Back
          </button>

          <h3 className="text-2xl font-semibold">Join Our Team</h3>

          {/* NAME */}
          <div>
            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
              <User size={18} />
              <Input
                name="name"
                placeholder="Your Name"
                value={joinForm.name}
                onChange={handleJoinChange}
              />
            </div>
            {joinErrors.name && (
              <p className="text-red-500 text-sm">{joinErrors.name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
              <Mail size={18} />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={joinForm.email}
                onChange={handleJoinChange}
              />
            </div>
            {joinErrors.email && (
              <p className="text-red-500 text-sm">{joinErrors.email}</p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
              <Phone size={18} />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={joinForm.phone}
                onChange={handleJoinChange}
              />
            </div>
            {joinErrors.phone && (
              <p className="text-red-500 text-sm">{joinErrors.phone}</p>
            )}
          </div>

          {/* ROLE */}
          <div>
            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
              <FontAwesomeIcon icon={faBriefcase} />

              <select
                name="role"
                value={joinForm.role}
                onChange={handleJoinChange}
                className="w-full border rounded-lg p-2 bg-white"
              >
                <option value="">Select Role</option>
                <option value="Robotics Engineer">Robotics Engineer</option>
                <option value="Mechanical Designer">Mechanical Designer</option>
                <option value="Embedded Systems Engineer">
                  Product Development Engineer
                </option>
                <option value="Intern">Intern</option>
              </select>
            </div>

            {joinErrors.role && (
              <p className="text-red-500 text-sm">{joinErrors.role}</p>
            )}
          </div>

          {/* SHOW ONLY IF INTERN SELECTED */}
          {joinForm.role === "Intern" && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-3 mt-2 transition-all duration-300 hover:scale-[1.02]">
                <Image
                  src={internship}
                  alt="domain"
                  className="w-5 h-5 object-contain"
                />

                <Input
                  name="internDomain"
                  placeholder="Enter your preferred domain (e.g. AI, Robotics, Web Dev)"
                  value={internDomain}
                  onChange={(e) => setInternDomain(e.target.value)}
                />
              </div>

              {joinErrors.internDomain && (
                <p className="text-red-500 text-sm">
                  {joinErrors.internDomain}
                </p>
              )}
            </div>
          )}

          {/* MESSAGE */}
          <div>
            <textarea
              name="message"
              placeholder="Tell us about yourself..."
              value={joinForm.message}
              onChange={handleJoinChange}
              className="w-full border rounded-lg p-3 h-32 transition-shadow duration-300 focus:shadow-md"
            />
            {joinErrors.message && (
              <p className="text-red-500 text-sm">{joinErrors.message}</p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <Button
            onClick={handleJoinSubmit}
            className="bg-red-600 hover:bg-red-700 text-white w-full transition-all duration-500 hover:scale-[1.05]"
          >
            Apply Now
          </Button>

          {/* SUCCESS MESSAGE */}
          {joinSuccess && (
            <div className="flex items-center gap-2 text-green-600 text-sm animate-fadeIn">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              Application submitted
            </div>
          )}
        </div>
      </div>
    </section>
  );
}