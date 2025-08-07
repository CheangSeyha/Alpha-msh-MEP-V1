import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { BorderBeam } from "../magicui/border-beam";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const OurServices = [
  {
    title: "MechanicalServices",
    img: "/Services/Mechanical.jpg",
    description: "Mdescription",

    url: "/Mechanical",
  },
  {
    title: "ElectricalServices",
    img: "/Services/Electrical.jpg",
    description: "Edescription",
    url: "/Electrical",
  },
  {
    title: "PlumbingServices",
    img: "/Services/Plumbing.jpg",
    description: "Pdescription",
    url: "/Plumbing",
  },
  {
    title: "CivilServices",
    img: "/Services/Civil.jpg",
    description: "Cdescription",
    url: "/Civil",
  },
  {
    title: "ArchitectureServices",
    img: "/Services/Architecture.jpg",
    description: "Adescription",
    url: "/Architecture",
  },
];

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

function Services() {
  const router = useRouter();
  const handleServiceClick = (url: string) => {
    router.push(url);
  };
  const t = useTranslations("HomePage");
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div className="w-full flex flex-col gap-10 md:gap-24 mt-10 mb-10">
          {OurServices.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${
                index === 1 || index === 3 ? "md:flex-row-reverse" : ""
              } gap-2 md:gap-12`}
              custom={index}
              variants={serviceVariants as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="relative w-full md:w-3/4 lg:w-1/2 h-60 overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out p-4"
              >
                <img
                  src={item.img}
                  alt={t(item.title)}
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* BorderBeam Effects */}
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
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.4 }}
                viewport={{ once: true }}
                className="w-full flex flex-col gap-4 md:gap-6"
              >
                <h2 className="text-start text-xl md:text-2xl font-bold font-exo mt-2">
                  {t(item.title)}
                </h2>
                <p className="w-full text-xs md:text-sm lg:text-base font-medium font-exo">
                  {t(item.description)}
                </p>
                <div className="flex justify-end items-end mt-5 md:mt-8">
                  <button
                    onClick={() => handleServiceClick(item.url)}
                    className=" bg-[#1b42ce] flex items-center text-white py-2.5 px-4 rounded-lg transition-colors duration-300"
                  >
                    <p className="font-exo text-base font-medium">{t("btn")}</p>
                    <FaArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
