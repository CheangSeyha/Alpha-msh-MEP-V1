"use client";
import Footer from "@/components/Alpha/Footer";
import Navbar from "@/components/Alpha/Navbar";
import { useTranslations } from "next-intl";
import ScrollToTop from "@/components/Alpha/ScrollToTop";
import ScrollProgressBar from "@/components/Alpha/ScollProgressBar";
import { motion } from "framer-motion";
import Civil from "@/components/Alpha/Civil";

export default function page() {
  const t = useTranslations("HomePage");
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      <main className="flex flex-col">
        <section className="w-full mx-auto">
          <div className="relative w-full mx-auto">
            <motion.img
              src="/Civil/civil2.jpg"
              alt="cambodia"
              className="object-cover w-full h-[70vh] lg:h-[100vh]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Overlay with z-index 1 */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-[2px]"></div>

            {/* Text1 */}
            <motion.div
              className="absolute z-20 top-1/4 left-1/2 transform -translate-x-1/2 text-center md:left-[60%] md:-translate-x-0 md:text-left lg:top-1/4 lg:left-[28%] xl:left-[80%] lg:-translate-x-1/2 lg:text-start"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <h1 className="font-exo text-lg sm:text-xl md:text-3xl xl:text-4xl font-bold text-white uppercase">
                Build
              </h1>
              <p className="font-exo text-xs sm:text-sm xl:text-base text-white mt-1 max-w-[250px] sm:max-w-[400px]">
                Representing the creation of structures, infrastructure, and
                communities from concept to completion
              </p>
            </motion.div>

            {/* Text2 */}
            <motion.div
              className="absolute z-20 top-2/4 left-1/2 transform -translate-x-1/2 text-center md:left-1/3 md:-translate-x-0 md:text-left lg:top-2/4 lg:left-[35%] xl:left-[10%] lg:text-start"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <h1 className="font-exo text-lg sm:text-xl md:text-3xl xl:text-4xl font-bold text-white uppercase">
                Strength
              </h1>
              <p className="font-exo text-xs sm:text-sm xl:text-base text-white mt-1 max-w-[250px] sm:max-w-[400px]">
                Symbolizing durability, structural integrity, and engineering
                excellence to withstand time and challenges.
              </p>
            </motion.div>

            {/* Text3 */}
            <motion.div
              className="absolute z-20 top-3/4 left-1/2 transform -translate-x-1/2 text-center md:left-1/12 md:-translate-x-0 md:text-left lg:top-3/4 lg:left-[75%] xl:left-[80%] lg:-translate-x-1/2 lg:text-start"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <h1 className="font-exo text-lg sm:text-xl md:text-3xl xl:text-4xl font-bold text-white uppercase">
                Trust
              </h1>
              <p className="font-exo text-xs sm:text-sm xl:text-base text-white mt-1 max-w-[250px] sm:max-w-[500px]">
                Reflecting reliability, professionalism, and commitment to
                delivering safe, high-quality projects.
              </p>
            </motion.div>

            {/* Bottom Text */}
            <motion.h1
              className="absolute hidden lg:block w-full bottom-0 left-1/2 transform -translate-x-1/2 text-center font-exo text-xs lg:text-lg font-medium text-white p-4 z-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              At <span className="font-bold text-blue-500">Alpha-MSH</span>, We
              build with vision, strengthen with engineering excellence, and
              earn trust through reliable, high-quality results.
            </motion.h1>
          </div>
        </section>
        <section className="w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-20">
          <Civil />
        </section>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>

      <ScrollToTop />
      <ScrollProgressBar />
    </div>
  );
}
