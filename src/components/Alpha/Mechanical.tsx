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
        {/*  */}
        <div className="relative w-full mx-auto bg-white z-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-0 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="pb-1 flex justify-center pt-10 mt-10 z-10"
            >
              <div className="relative inline-block text-center">
                <h2 className="text-sm md:text-2xl lg:text-4xl font-bold font-exo uppercase relative pb-2 z-10">
                  {t("air-conditioning system")}
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
          </div>
        </div>
        <div className="relative">
          {/* Background image */}
          <div className="fixed inset-0 w-screen h-screen bg-cover bg-center">
            <img
              src="/mechanical/low-angle-shot-metal-black-ceiling-with-white-ventilation-pipes.jpg"
              alt="Our Approach"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>

          {/* Overlay (optional) */}
          <div className="fixed inset-0 bg-black/30"></div>
        </div>

        {/* venlitation system */}
        <div className="relative w-full bg-white z-50 mt-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="pb-1 flex justify-center pt-10 z-10"
            >
              <div className="relative inline-block text-center">
                <h2 className="text-sm md:text-2xl xl:text-4xl font-bold font-exo uppercase relative pb-2 z-10">
                  {t("ventilation system")}
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
      </div>
    </div>
  );
}

export default Mechanical;
