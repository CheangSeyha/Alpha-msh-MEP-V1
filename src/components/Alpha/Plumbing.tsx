import React from "react";
import { useTranslations } from "next-intl";
import { PlumbingSystem } from "@/data/ServiceProject";
import { BorderBeam } from "../magicui/border-beam";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

function Plumbing() {
  const t = useTranslations("Plumbing");

  // Split into two groups
  const firstHalf = PlumbingSystem.slice(0, 5);
  const secondHalf = PlumbingSystem.slice(5);

  const renderItems = (items: any[]) =>
    items.map((item, index) => (
      <motion.div
        key={index}
        className={`flex flex-col md:flex-row gap-2 md:gap-12 pb-10 md:pb-20 ${
          index !== items.length - 1 ? "border-b-3 border-b-[#1b42ce]" : ""
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        {/* Image */}
        <div className="relative w-full md:w-3/4 lg:w-1/2 h-60 overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out p-4">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <BorderBeam
            duration={6}
            size={400}
            className="absolute inset-0 from-transparent via-red-500 to-transparent"
          />
          <BorderBeam
            duration={6}
            delay={3}
            size={400}
            borderWidth={2}
            className="absolute inset-0 from-transparent via-[#1b42ce] to-transparent"
          />
        </div>

        {/* Text */}
        <div className="w-full flex flex-col gap-4 md:gap-6">
          <h2 className="text-start text-xl md:text-2xl font-semibold font-exo mt-2">
            {t(item.title)}
          </h2>
          <p className="text-xs md:text-sm lg:text-base font-exo">
            {t(item.description)}
          </p>
        </div>
      </motion.div>
    ));

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="relative">
        <div className="fixed inset-0 w-screen h-screen bg-cover bg-center">
          <img
            src="/plumbing/pexels-sonny-vermeer-505472791-17728787.jpg"
            alt="Our Approach"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/30"></div>
      </div>
      {/* First 5 items in bg-white */}
      <div className="w-full mx-auto bg-white z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-0">
          <div className="w-full flex flex-col gap-10 md:gap-20 mt-10 mb-10">
            {renderItems(firstHalf)}
          </div>
        </div>
      </div>
      {/* Big gap showing background */}
      <div className="h-100"></div> {/* Adjust height as needed */}
      {/* Last 5 items in bg-white */}
      <div className="w-full mx-auto bg-white z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-0">
          <div className="w-full flex flex-col gap-10 md:gap-20 mt-10 mb-10">
            {renderItems(secondHalf)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plumbing;
