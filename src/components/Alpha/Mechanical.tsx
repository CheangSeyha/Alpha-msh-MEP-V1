import React from "react";
import { MechanicalSystems } from "@/data/ServiceProject";
import { useTranslations } from "next-intl";
import { BorderBeam } from "../magicui/border-beam";
import { motion } from "framer-motion";

const listItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};
function Mechanical() {
  const t = useTranslations("Mechanical");
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        <motion.h1
          className="text-center text-[13px] sm:text-xl md:text-2xl lg:text-3xl font-light font-exo text-black border-b-3 border-b-[#1B42CE] pb-2.5 uppercase w-fit mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {t("air-conditioning system")}
        </motion.h1>

        <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-16 mt-5 md:mt-10">
          <div className="relative w-full md:w-3/4 lg:w-1/2 h-60 overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out p-4">
            <img
              src={"/mechanical/air-conditionflow.jpg"}
              alt={"air-conditionflow"}
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

          <div className="w-full flex-wrap">
            <p className="text-xs md:text-sm lg:text-base font-exo">
              {t("description")}
            </p>
          </div>
        </div>

        <motion.h1
          className="text-center text-[13px] sm:text-xl md:text-2xl lg:text-3xl font-light font-exo text-black border-b-3 border-b-[#1B42CE] uppercase w-fit pb-2.5 mt-20 md:mt-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {t("ventilation system")}
        </motion.h1>

        <div className="w-full flex flex-col gap-10 md:gap-20 mt-10 mb-10">
          {MechanicalSystems.map((item, index) => (
            <motion.div
              key={index}
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row gap-2 md:gap-12 pb-10 md:pb-20 ${
                index !== MechanicalSystems.length - 1
                  ? "border-b-3 border-b-[#1B42CE]"
                  : ""
              }`}
            >
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
              <div className="w-full flex flex-col gap-4 md:gap-6">
                <h2 className="text-start text-xl md:text-2xl font-semibold font-exo mt-2">
                  {t(item.title)}
                </h2>
                <p className="text-xs md:text-sm lg:text-base font-exo">
                  {t(item.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mechanical;
