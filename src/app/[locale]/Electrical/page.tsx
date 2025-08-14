"use client";
import Electrical from "@/components/Alpha/Electrical";
import Footer from "@/components/Alpha/Footer";
import Navbar from "@/components/Alpha/Navbar";
import ScrollProgressBar from "@/components/Alpha/ScollProgressBar";
import ScrollToTop from "@/components/Alpha/ScrollToTop";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

function page() {
  const t = useTranslations("Electrical");
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-200">
        <Navbar />
      </header>
      <main className="flex flex-col">
        <section className="w-full mx-auto">
          <div className="relative w-full mx-auto z-100">
            <motion.img
              src="/Electrical/elec.jpg"
              alt="cambodia"
              className="object-cover w-full h-[100vh]"
            />
            {/* Overlay with z-index 1 */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-[2px]"></div>
            <motion.div
              className=" w-full lg:max-w-6xl mx-auto absolute z-30 top-[30%] md:top-2/5 left-1/2 transform -translate-x-1/2 p-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <h1 className="font-exo text-3xl md:text-4xl xl:text-5xl font-bold text-white uppercase">
                Electrical Services
              </h1>
              <p className="font-exo text-sm xl:text-base text-white mt-4 w-fit leading-normal">
                Electrical MEP work designs and installs all power and
                communication systems in a building. This includes managing both
                high-voltage power through transformers and distribution boards,
                as well as low-voltage systems for lighting, security (CCTV,
                access control), communication (data, telephone), and safety
                (fire alarm). These systems are essential for a building's
                functionality, safety, and security.
              </p>
            </motion.div>
            <div
              className="absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2"
              onClick={() => {
                document
                  .getElementById("electricalServices")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <FaAngleDoubleDown className="text-white animate-bounce w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>
        </section>
        {/* electrical */}
        <section className="overflow-hidden" id="electricalServices">
          <Electrical />
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
