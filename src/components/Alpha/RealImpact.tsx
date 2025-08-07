import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { useTranslations } from "next-intl";

const blockVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function RealImpact() {
  const t = useTranslations("HomePage");
  const stats = [
    { label: "Clients", value: 180 },
    { label: "employee", value: 300 },
    { label: "experience", value: 20 },
    { label: "project", value: 40 },
  ];

  return (
    <div className="bg-[#121D2F] py-20 flex flex-col items-center justify-center my-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center justify-center gap-3 px-3"
      >
        <h2 className="text-4xl font-bold text-white font-exo">
          {t("whychooseus")}
        </h2>
        <p className="text-center text-lg text-white font-exo">
          {t("wdescription")}
        </p>
      </motion.div>

      <div className="w-full flex flex-wrap items-center justify-evenly mt-10 p-4 gap-x-10 gap-y-12">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={blockVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="flex text-5xl font-bold text-blue-800 font-exo">
              <AnimatedCounter targetNumber={item.value} />
              {item.value !== 300 && <p>+</p>}
            </div>
            <p className="mt-2 text-white font-exo">{t(item.label)}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default RealImpact;
