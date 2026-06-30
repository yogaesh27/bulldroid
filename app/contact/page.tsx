import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {CTA} from "../components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bulldroid for AI, robotics, automation, and software solutions.",
};
export default function Contactus() {
  return (
    <>
      <Navigation />
      <CTA/>
      <Footer/>
    </>
  );
}