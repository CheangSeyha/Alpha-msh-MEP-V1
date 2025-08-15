"use client";
import Footer from "@/components/Alpha/Footer";
import HeroSlider from "../../components/Alpha/HeroSlider";
import Navbar from "@/components/Alpha/Navbar";
import Project from "@/components/Alpha/Project";
import RealImpact from "@/components/Alpha/RealImpact";
import ProblemSolving from "@/components/Alpha/ProblemSolving";
import Services from "@/components/Alpha/Services";
import NewsEvents from "@/components/Alpha/NewsEvents";
import PartnershipSlider from "@/components/Alpha/PartnershipSwiper";
import { motion } from "framer-motion";
import AnimatedPresence from "@/components/Alpha/AnimatedPresence";
import { useTranslations } from "next-intl";
import ScrollToTop from "@/components/Alpha/ScrollToTop";
import ScrollProgressBar from "@/components/Alpha/ScollProgressBar";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      <main className="flex-1 flex flex-col">
        {/* Hero section */}
        <section className="relative w-full h-screen overflow-hidden">
          <HeroSlider />
        </section>

        {/* Problem Solving */}
        <section className="bg-blue-500/10">
          <div className="max-w-6xl mx-auto p-4 md:p-2 md:px-4.5 lg:p-2.5 mt-20 mb-20">
            <ProblemSolving />
          </div>
        </section>

        <section className="bg-[#121D2F] py-20">
          <div className=" flex flex-col justify-center items-center">
            <AnimatedPresence />
          </div>
        </section>
        {/* Our Services */}
        <section id="Services">
          <div className="max-w-6xl flex flex-col gap-5 mx-auto mt-20 p-4 md:p-2 md:px-4.5 lg:p-2.5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="pb-1 flex justify-center"
            >
              <div className="relative inline-block text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-exo relative pb-2 z-10">
                  {t("ourservices")}
                </h2>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 origin-center w-full h-[3px] bg-[#1b42ce] rounded"
                />
              </div>
            </motion.div>

            <Services />
          </div>
        </section>

        {/* Real Impact */}
        <section>
          <RealImpact />
        </section>

        {/* Projects */}
        <section>
          <Project />
        </section>

        {/* Partnership Slider */}
        <section className="bg-blue-500/10">
          <div className="max-w-6xl flex flex-col gap-5 mx-auto mt-10 p-4 md:p-2 md:px-4.5 lg:p-2.5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="pb-1"
            >
              <div className="relative inline-block text-start">
                <h2 className="text-3xl md:text-4xl font-bold font-exo relative pb-2 z-10">
                  {t("ourpartnership")}
                </h2>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 origin-left w-full h-[3px] bg-[#1b42ce] rounded"
                />
              </div>
            </motion.div>

            <PartnershipSlider />
          </div>
        </section>

        {/* News & Events */}
        <section>
          <div>
            <NewsEvents />
          </div>
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
