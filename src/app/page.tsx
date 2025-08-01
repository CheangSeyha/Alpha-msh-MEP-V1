"use client";
import HeroSlider from "@/components/Alpha/HeroSlider";
import Navbar from "@/components/Alpha/Navbar";
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
        <section>
          <div className="max-w-6xl flex flex-col gap-20 mx-auto mt-10 p-4 md:p-2 md:px-4.5 lg:p-2.5">
            {/*  1st section */}
            <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
              <div className="w-full"></div>
              <div className="w-full flex flex-col gap-5">
                <h1 className="text-3xl font-bold">Title</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  modi quis ea odio labore numquam ut minus eligendi, vitae
                  repellendus nulla nostrum expedita consectetur quisquam dicta
                  voluptatibus cupiditate temporibus quo.
                </p>
                <div className="flex justify-end items-end">
                  <button className=" bg-[#1b42ce] flex items-center text-white py-2.5 md:py-4 px-6 rounded-lg transition-colors duration-300">
                    <p className="font-exo text-base font-medium">See more</p>
                    <FaArrowRight className="w-6 h-6 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
