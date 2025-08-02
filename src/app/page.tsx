"use client";
import Footer from "@/components/Alpha/Footer";
import HeroSlider from "@/components/Alpha/HeroSlider";
import Navbar from "@/components/Alpha/Navbar";
import Services from "@/components/Alpha/Services";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 flex flex-col">
        {/* Hero section */}
        <section className="relative w-full h-screen">
          <HeroSlider />
        </section>
        {/* Main content section */}
        <section className="bg-slate-200" id="Services">
          <div className="max-w-6xl flex flex-col gap-5 mx-auto mt-10 p-4 md:p-2 md:px-4.5 lg:p-2.5">
            <div className="relative inline-block pb-1">
              <h2 className="text-center text-3xl font-bold font-exo relative z-10">
                Our Services
              </h2>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-42 h-[3px] bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 rounded"></div>
            </div>
            <Services />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
