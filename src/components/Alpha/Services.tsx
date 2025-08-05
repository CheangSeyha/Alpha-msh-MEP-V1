import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { BorderBeam } from "../magicui/border-beam";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const OurServices = [
  {
    title: "Mechanical",
    img: "/Services/Mechanical.jpg",
    description:
      "Focuses on creating a comfortable and healthy indoor environment through the design and installation of heating, ventilation, and air-conditioning (HVAC) systems.",

    url: "/Mechanical",
  },
  {
    title: "Electrical",
    img: "/Services/Electrical.jpg",
    description:
      "Covers all power and technology systems. This includes both low-voltage (LV) for power distribution, lighting, and safety, and extra-low-voltage (ELV) for security, data, and building management systems.",
    url: "/Electrical",
  },
  {
    title: "Plumbing",
    img: "/Services/Plumbing.jpg",
    description:
      "Manages all water-related infrastructure, including the supply of fresh water, drainage for waste and rain, and specialized systems for fire suppression and recreational facilities.",
    url: "/Plumbing",
  },
  {
    title: "Civil",
    img: "/Services/Civil.jpg",
    description:
      "Establishes the structural foundation of a building, encompassing site preparation, excavation, concrete work, and the construction of the building's main framework",
    url: "/Civil",
  },
  {
    title: "Architecture",
    img: "/Services/Architecture.jpg",
    description:
      " Deals with the aesthetic and functional design of the building, including the exterior façade, interior finishes, roofing, and the installation of doors, windows, and other decorative elements.",
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
                  alt={item.title}
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
                  {item.title}
                </h2>
                <p className="w-full text-xs md:text-sm lg:text-base font-medium font-exo">
                  {item.description}
                </p>
                <div className="flex justify-end items-end mt-5 md:mt-8">
                  <button
                    onClick={() => handleServiceClick(item.url)}
                    className=" bg-[#1b42ce] flex items-center text-white py-2.5 px-4 rounded-lg transition-colors duration-300"
                  >
                    <p className="font-exo text-base font-medium">See more</p>
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
