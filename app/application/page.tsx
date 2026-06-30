import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Application from "../components/Application";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application",
  description:
    "Get in touch with Bulldroid for AI, robotics, automation, and software solutions.",
};

export default function Contactus() {
  return (
    <>
      <Navigation />
      <Application/>
      <Footer/>
    </>
  );
}