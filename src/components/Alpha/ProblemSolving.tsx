import React from "react";
import { FaCog, FaDraftingCompass, FaHardHat } from "react-icons/fa";
import { motion } from "framer-motion";

const Problem = [
  {
    icon: <FaHardHat />,
    title: "Foundation & Structure",
    description:
      "We ensure a project's stability and durability by expertly handling all civil works, from foundations to the structural frame.",
  },
  {
    icon: <FaCog />,
    title: "Internal Systems & Infrastructure",
    description:
      "We equip buildings with critical MEP systems for safety, comfort, and functionality, including HVAC, power, and plumbin",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Design & Finishes",
    description:
      "We provide comprehensive architectural design to create functional and aesthetically pleasing spaces from the exterior facade to interior finishes.",
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
  return (
    <div className="w-full flex flex-col justify-center items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative inline-block pb-1"
      >
        <h2 className="text-center text-2xl md:text-3xl font-bold font-exo relative z-10">
          The Problem We're Solving
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-1/2 origin-center transform -translate-x-1/2 w-[300px] md:w-[370px] h-[3px] bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 rounded"
        ></motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center text-lg mt-4 font-light font-exo"
      >
        We ensure the integrity of every project from the ground up through
        Civil Engineering, building strong foundations and durable structures.
        Our MEP services equip buildings with all critical internal systems for
        safety, comfort, and functionality. Finally, our Architectural design
        brings the project to life, focusing on finishes and layout to create a
        beautiful and cohesive space.
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
                  {item.title}
                </h3>
                <p className="text-sm text-center font-exo">
                  {item.description}
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
