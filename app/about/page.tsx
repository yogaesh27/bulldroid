import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import About from "../components/About_us"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bulldroid, our mission, vision, and innovative technology solutions.",
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