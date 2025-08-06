import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

function Mission() {
  const t = useTranslations("MVC");

  // Variants for text animations
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 overflow-hidden">
      {/* Rotating Image */}
      <div className="bg-white w-fit h-fit">
        <motion.img
          src="/MVC.png"
          alt="mvc"
          loading="eager"
          className="w-full h-full object-contain max-md:rotate-90 max-md:scale-105"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
      </div>

      {/* Text Content */}
      <div className="w-full flex flex-col gap-10">
        {/* Mission Block */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-5"
        >
          <h1 className="text-start text-xl md:text-2xl font-medium font-exo text-black border-b-3 border-b-[#1b42ce] uppercase pb-2.5 w-fit">
            {t("mission")}
          </h1>
          <p className="text-start text-sm md:text-base font-exo text-black">
            {t("description1")}
          </p>
        </motion.div>

        {/* Vision Block */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-5"
        >
          <h1 className="text-start text-xl md:text-2xl font-medium font-exo text-black border-b-3 border-b-[#1b42ce] uppercase pb-2.5 w-fit">
            {t("vision")}
          </h1>
          <p className="text-start text-sm md:text-base font-light font-exo text-black">
            {t("description2")}
          </p>
        </motion.div>

        {/* Core Values Block */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-5"
        >
          <h1 className="text-start text-xl md:text-2xl font-medium font-exo text-black border-b-3 border-b-[#1b42ce] uppercase pb-2.5 w-fit">
            {t("core values")}
          </h1>
          <p className="text-start text-sm md:text-base font-exo text-black">
            {t("description3")}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Mission;
