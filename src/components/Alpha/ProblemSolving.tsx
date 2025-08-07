import React from "react";
import { FaCog, FaDraftingCompass, FaHardHat } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Problem = [
  {
    icon: <FaHardHat />,
    title: "title1",
    description: "description1",
  },
  {
    icon: <FaCog />,
    title: "title2",
    description: "description2",
  },
  {
    icon: <FaDraftingCompass />,
    title: "title3",
    description: "description3",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
function ProblemSolving() {
  const t = useTranslations("HomePage");
  return (
    <div className="w-full flex flex-col justify-center items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pb-1 flex justify-center"
      >
        <div className="relative inline-block text-center">
          <h2 className="text-2xl md:text-4xl font-bold font-exo relative pb-2 z-10">
            {t("problemsolving")}
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 origin-center w-full h-[3px] bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 rounded"
          />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center text-lg mt-4 font-light font-exo"
      >
        {t("sdescription")}
      </motion.p>

      <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-5 lg:gap-20 mt-8">
        {Problem.map((item, index) => (
          <motion.div
            key={index}
            className="flex-1 w-full"
            custom={index}
            variants={cardVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col items-center bg-white rounded-lg p-5 h-full overflow-hidden">
              <motion.div
                className="text-4xl mb-2 p-2"
                animate={{ rotate: index === 1 ? 360 : 0 }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              >
                {item.icon}
              </motion.div>
              <div className="flex flex-col gap-1 mt-2 mb-2">
                <h3 className="text-xl text-center font-bold font-exo">
                  {t(item.title)}
                </h3>
                <p className="text-sm text-center font-exo">
                  {t(item.description)}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProblemSolving;
