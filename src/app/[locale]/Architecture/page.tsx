"use client";
import Footer from "@/components/Alpha/Footer";
import ScrollProgressBar from "@/components/Alpha/ScollProgressBar";
import ScrollToTop from "@/components/Alpha/ScrollToTop";
import NavBar from "@/components/Alpha/Navbar";
import { motion } from "framer-motion";
import React from "react";
import ImageSlider from "@/components/Alpha/ArchitectureSlider";
import ArchitectureServices from "@/components/Alpha/ArchitectureServices";
import ArchitectureLandingPage from "@/components/Alpha/ArchitectureLandingPage";
import { useTranslations } from "next-intl";

    const projectImages1 = [
      "/Architecture/archi_planner.jpg",
      "/Civil/civil1.jpg",
      "/Civil/civil2.jpg",
      "/Civil/civil3.webp",

    ];

    const projectImages2 = [
      "/Architecture/Project1/project1_01.jpg",
      "/Architecture/Project1/project1_02.jpg",
      "/Architecture/Project1/project1_03.jpg",
      "/Architecture/Project1/project1_04.jpg",
    ];

    const projectImages = [
      "/Architecture/archi_planner.jpg",
      "/Civil/civil1.jpg",
      "/Civil/civil2.jpg",
      "/Civil/civil3.webp",
    ];


function page() {
  function t(
    arg0: string
  ):
    | React.ReactNode
    | import("motion-dom").MotionValue<number>
    | import("motion-dom").MotionValue<string> {
    throw new Error("Function not implemented.");
  }

  const t1 = useTranslations("Architecture");

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="z-70">
        <NavBar />
      </header>
      <main className="flex flex-col">
        <section className="w-full z-50">
          <ArchitectureLandingPage />
        </section>
        <section className="w-full bg-[#CACAC8] max-md:px-0 relative z-40 pb-20">
          {/* Circle Style */}
          <div className="absolute w-20 h-20 top-[13vw] left-[30vw] bg-amber-500 rounded-full opacity-25"></div>
          <div className="absolute w-20 h-20 top-[13vw] left-[15vw] bg-amber-500 rounded-full opacity-25"></div>
          <div className="absolute w-20 h-20 top-[70vw] left-[40vw] bg-amber-500 rounded-full opacity-25"></div>
          <div className="absolute w-20 h-20 top-[70vw] left-[50vw] bg-amber-500 rounded-full opacity-25"></div>
          <div className="absolute w-20 h-20 bottom-[35vw] right-10 bg-amber-500 rounded-full opacity-25"></div>
          <div className="absolute w-20 h-20 bottom-[35vw] right-40 bg-amber-500 rounded-full opacity-25"></div>

          <ArchitectureServices />
        </section>
        <section className="w-full">
          <div className="relative">
            {/* Background image */}
            <div className="fixed inset-0 w-screen h-screen bg-cover bg-center">
              <img
                src="/Architecture/bg-inArchitecture.webp"
                alt="Our Approach"
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
            </div>

            {/* Overlay (optional) */}
            <div className="fixed inset-0 bg-black/30"></div>

            {/* Scrollable content */}
            <div className="relative z-10">
              <section className="h-[500px] flex items-center justify-center text-white">
                <h1 className="text-6xl font-poppins font-bold">
                  {t1("explore")}
                </h1>
              </section>

              <section className="bg-white">
                {/* <p className="text-2xl text-black">More content scrolling...</p> */}
                <div className="w-full">
                  <p className="text-xl font-poppins font-light p-4 text-black">
                    {t1("project")}
                  </p>
                </div>
                <div className="border-b-2 border-[#121D2F] w-full p-10">
                  <div className="w-full md:px-20 md:pr-[7rem]">
                    <h1 className="text-4xl font-poppins font-bold py-4">
                      {t1("recentwork")}
                    </h1>
                    <p className="text-xl font-poppins font-light text-black">
                      {t1("adescription")}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className="w-full max-md:px-0 relative z-10 pb-20 bg-white ">
          <div className="absolute w-100 h-100 -top-56 -left-[10vw] bg-[#1B42CE] rounded-full opacity-25"></div>
          <div className="absolute w-100 h-100 top-[33vw] z-10 left-[35vw] bg-[#1B42CE] rounded-full opacity-25 max-lg:hidden"></div>
          <div className="absolute w-20 h-20 bottom-[10vw] z-10 right-10 bg-[#1B42CE] rounded-full opacity-25"></div>
          <div className="absolute w-20 h-20 bottom-[20vw] z-10 right-40 bg-[#1B42CE] rounded-full opacity-25"></div>
          <div className="absolute w-20 h-20 bottom-[30vw] z-10 right-60 bg-[#1B42CE] rounded-full opacity-25"></div>

            <ImageSlider images={projectImages1} visibleCount={2} year="2025" project="Project 1" />
            <ImageSlider images={projectImages2} visibleCount={2} year="2025" project="Project 2" />
            <ImageSlider images={projectImages} visibleCount={2} year="2025" project="Project 3" />
        </section>
      </main>
      <footer className="bg-white relative z-50">
        <Footer />
      </footer>
      <ScrollToTop />
      <ScrollProgressBar />
    </div>
  );
}

export default page;
