"use client";
import Footer from "@/components/Alpha/Footer";
import HeroSlider from "@/components/Alpha/HeroSlider";
import Navbar from "@/components/Alpha/Navbar";

export default function Home() {
  return (
    <div className="relative max-h-screen">
      <header>
        <Navbar />
      </header>
      <main >
        <HeroSlider />
      </main>
      <Footer />
    </div>
  );
}
