"use client";
import Footer from "@/components/Alpha/Footer";
import Navbar from "@/components/Alpha/Navbar";
import ScrollToTop from "@/components/Alpha/ScrollToTop";
import ScrollProgressBar from "@/components/Alpha/ScollProgressBar";
import { motion } from "framer-motion";
import Civil from "@/components/Alpha/Civil";
import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations("CivilService");
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="absolute top-0 left-0 right-0 w-screen h-screen">
        <img src="/Civil/civil3.webp" alt="civil3" className="w-full h-full" />
      </div>
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      <main className="relative flex flex-col bg-gray-200">
        <section className="w-full mx-auto">
          <div className="relative w-full mx-auto z-50">
            <motion.img
              src="/Civil/civil2.jpg"
              alt="cambodia"
              className="object-cover w-full h-[100vh]"
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
                {t("build")}
              </h1>
              <p className="font-exo text-xs sm:text-sm xl:text-base text-white mt-1 max-w-[250px] sm:max-w-[400px]">
                {t("bdescription")}
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
                {t("strength")}
              </h1>
              <p className="font-exo text-xs sm:text-sm xl:text-base text-white mt-1 max-w-[250px] sm:max-w-[400px]">
                {t("sdescription")}
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
                {t("trust")}
              </h1>
              <p className="font-exo text-xs sm:text-sm xl:text-base text-white mt-1 max-w-[250px] sm:max-w-[500px]">
                {t("tdescription")}
              </p>
            </motion.div>
          </div>
        </section>
        <section className="w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-20 z-50 bg-gray-200">
          <Civil />
        </section>
        <section>
          <div className="relative">
            {/* Background image */}
            <div className="fixed inset-0 w-screen h-screen bg-cover bg-center">
              <img
                src="/Civil/civil3.webp"
                alt="Our Approach"
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
            </div>

            {/* Overlay (optional) */}
            <div className="fixed inset-0 bg-black/30"></div>

            {/* Scrollable content */}
            <div className="relative z-10">
              <section className="h-screen flex items-center justify-center text-white">
                {/* <h1 className="text-4xl font-bold">Welcome</h1> */}
              </section>

              <section className="flex items-center justify-center text-white p-10 bg-white">
                <p className="text-2xl text-black">More content scrolling...</p>
              </section>

              <section className="h-screen flex items-center justify-center text-white">
                <p className="text-2xl">Even more content</p>
              </section>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white relative z-60">
        <Footer />
      </footer>

      <ScrollToTop />
      <ScrollProgressBar />
    </div>
  );
}
