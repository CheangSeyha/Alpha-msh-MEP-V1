import React from "react";
import { useTranslations } from "next-intl";
import { ElectricalELV, ElectricalLV } from "@/data/ServiceProject";
import { BorderBeam } from "../magicui/border-beam";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Electrical() {
  const t = useTranslations("Electrical");

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center">
        <motion.h1
          className="text-center text-xl sm:text-2xl md:text-3xl font-light font-poppins text-black border-b-3 border-b-[#1b42ce] pb-2.5 uppercase w-fit mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          transition={{ duration: 1 }}
        >
          {t("lowvoltage")}
        </motion.h1>

        <div className="w-full flex flex-col gap-10 md:gap-20 mt-10 mb-10">
          {ElectricalLV.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row gap-2 md:gap-12 pb-10 md:pb-20 ${
                index !== ElectricalLV.length - 1
                  ? "border-b-3 border-b-[#1b42ce]"
                  : ""
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
                <p className="text-xs md:text-sm lg:text-base font-exo ">
                  {t(item.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h1
          className="text-center text-xl sm:text-2xl md:text-3xl font-light font-poppins text-black border-b-3 border-b-[#1b42ce] pb-2.5 uppercase w-fit mt-15"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          transition={{ duration: 1 }}
        >
          {t("extralowvoltage")}
        </motion.h1>

        <div className="w-full flex flex-col gap-10 md:gap-20 mt-10 mb-10">
          {ElectricalELV.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row gap-2 md:gap-12 pb-10 md:pb-20 ${
                index !== ElectricalELV.length - 1
                  ? "border-b-3 border-b-[#1b42ce]"
                  : ""
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
                <h2 className="text-start text-xl md:text-2xl font-semibold font-poppins mt-2">
                  {t(item.title)}
                </h2>
                <p className="text-xs md:text-sm lg:text-base font-poppins">
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

export default Electrical;
