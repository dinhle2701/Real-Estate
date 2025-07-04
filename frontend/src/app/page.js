import Discover from "@/components/user/components/Discover";
import Feature from "@/components/user/components/Feature";
import Footer from "@/components/user/components/Footer";
import Intro from "@/components/user/components/Intro";
import Navbar from "@/components/user/components/Navbar";
import PropertyGridSection from "@/components/user/components/PropertyGridSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="index">
      <main className="relative">
        <Navbar />
        <Intro />
        <Feature />
        <Discover />
        <PropertyGridSection />
        <Footer />
      </main>
    </div>
  );
}
