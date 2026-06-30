import Navigation from "../components/Navigation";
import { Products } from "../components/Products"; // <-- Added curly braces
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Discover Bulldroid's innovative products in AI, robotics, automation, and embedded systems.",
};

export default function Page() {
  return (
    <>
      <Navigation />
      <Products />
      <Footer />
    </>
  );
}