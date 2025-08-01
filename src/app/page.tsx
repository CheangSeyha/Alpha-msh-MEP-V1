"use client";
import HeroSlider from "@/components/Alpha/HeroSlider";
import Navbar from "@/components/Alpha/Navbar";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black/30 backdrop:blur-md">
      <header>
        <Navbar />
      </header>
      <main className="relative w-full h-screen">
        <HeroSlider />
      </main>
    </div>
  );
}
