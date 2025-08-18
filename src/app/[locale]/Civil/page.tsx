"use client";
import Footer from "@/components/Alpha/Footer";
import Navbar from "@/components/Alpha/Navbar";
import ScrollToTop from "@/components/Alpha/ScrollToTop";
import ScrollProgressBar from "@/components/Alpha/ScollProgressBar";
import { motion } from "framer-motion";
import Civil from "@/components/Alpha/Civil";
import { useTranslations } from "next-intl";
import ImageSlider from "@/components/Alpha/CivilSlider";

const projectImage = [
  "/Architecture/archi_planner.jpg",
  "/Civil/civil1.jpg",
  "/Civil/civil2.jpg",
  "/Civil/civil3.webp",
];

export default function page() {
  const t = useTranslations("CivilService");
  return (
    <div className="relative flex flex-col min-h-screen">
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
                src="/Civil/CPM_news_ChipMongRetail2_07-09-2021.jpg"
                alt="Our Approach"
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
            </div>

            {/* Overlay (optional) */}
            <div className="fixed inset-0 bg-black/30"></div>

            {/* Scrollable content */}
            <div className="relative flex justify-center items-center h-100 z-10">
              <p className="text-6xl font-poppins font-bold text-white text-center">
                {t("explore")}
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-white z-40">
          {/* <p className="text-2xl text-black">More content scrolling...</p> */}
          <div className="w-full">
            <p className="text-xl font-exo font-light p-4 text-black">
              {t("project")}
            </p>
          </div>
          <div className="border-b-2 border-[#121D2F] w-full p-10">
            <div className="w-full md:px-20 md:pr-[7rem]">
              <h1 className="text-4xl font-exo font-bold py-4">
                {t("recentwork")}
              </h1>
              <p className="text-xl font-exo font-light text-black">
                {t("rdescription")}
              </p>
            </div>
          </div>
        </section>

        <section className="w-full max-md:px-0 relative z-10 pb-20 bg-white ">
          <div className="absolute w-20 h-20 lg:w-50 lg:h-50 top-1 left-10 bg-[#1B42CE]  opacity-25"></div>
          <div className="absolute w-50 h-50 bottom-20 z-10 left-1 bg-[#1B42CE]  opacity-25 max-lg:hidden"></div>
          <div className="absolute w-20 h-20 bottom-[10vw] z-10 right-10 bg-[#1B42CE]  opacity-25"></div>
          <div className="absolute w-20 h-20 bottom-[90vw] z-10 left-10 bg-[#1B42CE] opacity-25"></div>

          <ImageSlider
            images={projectImage}
            visibleCount={2}
            year={t("year1")}
            project={t("project1")}
          />
          <ImageSlider
            images={projectImage}
            visibleCount={2}
            year={t("year2")}
            project={t("project2")}
          />
          <ImageSlider
            images={projectImage}
            visibleCount={2}
            year={t("year3")}
            project={t("project3")}
          />
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
