"use client";
import Footer from "@/components/Alpha/Footer";
import Navbar from "@/components/Alpha/Navbar";
import Plumbing from "@/components/Alpha/Plumbing";
import ScrollProgressBar from "@/components/Alpha/ScollProgressBar";
import ScrollToTop from "@/components/Alpha/ScrollToTop";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

function page() {
  const t = useTranslations("Plumbing");
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-100">
        <Navbar />
      </header>
      <main className="flex flex-col">
        <section className="w-full mx-auto">
          <div className="relative w-full mx-auto">
            <div className="relative w-full mx-auto z-50">
              <motion.img
                src="/plumbing/mainPlumbing.jpg"
                alt="cambodia"
                className="object-cover w-full h-[100vh]"
              />
              {/* Overlay with z-index 1 */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-[1px]"></div>

              <motion.div
                className=" w-full lg:max-w-6xl mx-auto absolute z-20 top-[35%] md:top-2/5 left-1/2 transform -translate-x-1/2 p-5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <h1 className="font-exo text-3xl md:text-4xl xl:text-5xl font-bold text-white uppercase">
                  Plumbing Services
                </h1>
                <p className="font-exo text-sm xl:text-base text-white mt-4 w-fit leading-normal">
                  Plumbing service is a work that designs and installs all
                  water-related systems in a building, including hot and cold
                  water supply, drainage, and specialized systems for fire
                  suppression and water treatment. It is essential for a
                  building's safety, hygiene, and functionality.
                </p>
              </motion.div>

              <div
                className="absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2"
                onClick={() => {
                  document
                    .getElementById("plumbingServices")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FaAngleDoubleDown className="text-white animate-bounce w-10 h-10" />
              </div>
            </div>
          </div>
        </section>

        <section id="plumbingServices">
          <Plumbing />
        </section>
      </main>
      <footer className="relative bg-white z-50">
        <Footer />
      </footer>

      <ScrollToTop />
      <ScrollProgressBar />
    </div>
  );
}

export default page;
