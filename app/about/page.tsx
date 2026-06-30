import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import About from "../components/About_us"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Explore Bulldroid's AI, robotics, automation, IoT, and software development services.",
};
export default function Aboutus() {
  return (
    <>
      <Navigation />
      <About/>
      <Footer/>
    </>
  );
}