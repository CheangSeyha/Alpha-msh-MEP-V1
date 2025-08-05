"use client";
import Footer from "@/components/Alpha/Footer";
import HeroSlider from "@/components/Alpha/HeroSlider";
import Navbar from "@/components/Alpha/Navbar";
import Project from "@/components/Alpha/Project";
import RealImpact from "@/components/Alpha/RealImpact";
import ProblemSolving from "@/components/Alpha/ProblemSolving";
import Services from "@/components/Alpha/Services";
import NewsEvents from "@/components/Alpha/NewsEvents";
import PartnershipSlider from "@/components/Alpha/PartnershipSwiper";
import { motion } from "framer-motion";

export default function Home() {
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

        {/* Our Services */}
        <section id="Services">
          <div className="max-w-6xl flex flex-col gap-5 mx-auto mt-10 p-4 md:p-2 md:px-4.5 lg:p-2.5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative inline-block pb-1"
            >
              <h2 className="text-center text-4xl font-bold font-exo relative z-10">
                Our Services
              </h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-1/2 origin-center transform -translate-x-1/2 w-52 h-[3px] bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 rounded"
              ></motion.div>
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
              className="relative inline-block pb-1"
            >
              <h2 className="text-start text-4xl font-bold font-exo relative z-10">
                Our Partnerships
              </h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-36  transform -translate-x-1/2 w-70 h-[3px] bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 rounded"
              ></motion.div>
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
    </div>
  );
}
