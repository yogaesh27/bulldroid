import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Bulldroid provides AI, robotics, automation, IoT, and software solutions.",
};

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero/>
      <Footer/>
    </>
  );
}