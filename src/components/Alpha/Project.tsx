import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

function Project() {
  const t = useTranslations("HomePage");
  const projects = [
    {
      title: "completed",
      img: "/completed.jpg",
      url: "/Completed",
      describe: "cdescription",
    },
    {
      title: "inprogress",
      img: "/Inprogress.jpg",
      url: "/Inprogress",
      describe: "idescription",
    },
    {
      title: "future",
      img: "/futureproject.jpg",
      url: "/Future",
      describe: "fdescription",
    },
  ];

  return (
    <div className="max-w-screen py-12 mb-10">
      <div className="max-w-6xl mx-auto p-4 md:p-2 md:px-4.5 lg:p-2.5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pb-1"
        >
          <div className="relative inline-block text-start">
            <h2 className="text-3xl md:text-4xl font-bold font-exo relative pb-2 z-10">
              {t("ourprojects")}
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 origin-left w-full h-[3px] bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 rounded"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg mb-8 mt-2 font-light font-exo"
        >
          {t("pdescriptions")}
        </motion.p>

        <div className="max-w-full flex flex-wrap gap-6">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative md:w-[500px] bg-cover bg-center font-exo overflow-hidden group"
            >
              <img
                src={item.img}
                alt={t(item.title)}
                className="w-full object-cover rounded-xl shadow-md group-hover:scale-110 transition-transform duration-500 ease-in-out group-hover:brightness-75"
              />
              <div className="absolute bottom-0 left-0 transform">
                <div className="backdrop-blur-md bg-white/20 p-6 rounded-xl shadow-lg text-center">
                  <a
                    href={item.url}
                    className="text-2xl md:text-4xl font-exo font-bold text-black"
                  >
                    {t(item.title)}
                  </a>
                  <p className="text-black font-exo text-sm text-center mt-2">
                    {t(item.describe)}
                  </p>
                </div>
              </div>
              <div className="absolute top-5 right-10 transform">
                <div className="backdrop-blur-md bg-white/20 px-6 py-2.5 rounded-full shadow-lg text-center">
                  <a
                    href={item.url}
                    className="text-xl font-bold text-white hover:text-blue-500 group-hover:text-blue-700 transition-colors duration-300"
                  >
                    {t("btn")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
