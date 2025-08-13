import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";
import { FaSitemap } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { MdEngineering, MdOutlineVerified } from "react-icons/md";
import { SiBlueprint } from "react-icons/si";

const serviceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

function Civil() {
  const CivilService = [
    {
      title: "title1",
      description: "description1",
      img: "/Civil/Project Execution & Supervision.jpg",
    },
    {
      title: "title2",
      description: "description2",
      img: "/Civil/CivilDone3.jpg",
    },
    {
      title: "title3",
      description: "description3",
      img: "/Civil/Quality Assurance.jpg",
    },
    {
      title: "title4",
      description: "description4",
      img: "/Civil/Safety & Compliance.jpg",
    },
    {
      title: "title5",
      description: "description5",
      img: "/Civil/Documentation & Reporting.jpeg",
    },
  ];

  const t = useTranslations("CivilService");

  return (
    <div className="w-full mx-auto mt-10">
      <div className="flex flex-col mb-20 md:mb-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pb-1 flex justify-center"
        >
          <div className="relative inline-block text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-exo relative uppercase pb-2 z-10">
              {t("cservices")}
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 origin-center w-full h-[3px] bg-[#1B42CE]  rounded"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-lg md:text-xl mt-4 font-light font-exo"
        >
          {t("ctext")}
        </motion.p>
      </div>
      <div className="w-full flex flex-col gap-10 md:gap-20">
        {CivilService.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${
              index === 1 || index === 3 ? "md:flex-row-reverse" : ""
            } items-center gap-5 md:gap-20`}
            custom={index}
            variants={serviceVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="relative w-full md:w-1/2 h-96 flex items-center justify-center"
            >
              {/* Background square */}
              <div
                className={`absolute bg-[#121D2F] w-full h-1/2 md:w-[90%] md:h-[90%] left-0 top-0 z-0 ${
                  index === 1 || index === 3 ? "md:left-[10%]" : ""
                }`}
              />
              {/* Image */}
              <img
                src={item.img}
                alt={t(item.title)}
                className={`absolute w-[80%] h-[80%] object-cover top-[10%] md:top-[5%] z-50 shadow-lg ${
                  index === 1 || index === 3
                    ? "md:right-[35%]"
                    : "md:left-[35%]"
                }`}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.4 }}
              viewport={{ once: true }}
              className="w-full flex flex-col items-center"
            >
              <div className="text-black text-xl md:text-2xl lg:text-3xl font-exo mt-2">
                {t(item.title)}
              </div>
              <p className="text-black text-start text-sm md:text-base max-w-4xl font-exo mt-2">
                {t(item.description)}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Civil;
