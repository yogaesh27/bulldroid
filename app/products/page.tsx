import Navigation from "../components/Navigation";
import { Products } from "../components/Products"; // <-- Added curly braces
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <Products />
      <Footer />
    </>
  );
}