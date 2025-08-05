import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

function Project() {
  const projects = [
    { title: "Completed", img: "/completed.jpg", url: "/Future" },
    { title: "In Progress", img: "/Inprogress.jpg", url: "/Future" },
    { title: "Future", img: "/futureproject.jpg", url: "/Future" },
  ];

  return (
    <div className="max-w-screen py-12 mb-10">
      <div className="max-w-6xl mx-auto p-4 md:p-2 md:px-4.5 lg:p-2.5">
        {/* Title & Underline Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative inline-block pb-1"
        >
          <h2 className="text-start text-4xl text-black font-bold font-exo relative z-10">
            Our Projects
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-1 w-51 h-[3px] bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 rounded origin-left"
          ></motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg mb-8 mt-2 font-light font-exo"
        >
          Explore our diverse portfolio showcasing successful civil,
          architectural, and MEP projects across various sectors.
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
                alt={item.title}
                className="w-full object-cover rounded-xl shadow-md group-hover:scale-110 transition-transform duration-500 ease-in-out group-hover:brightness-75"
              />
              <div className="absolute bottom-0 left-0 transform">
                <div className="backdrop-blur-md bg-white/20 p-6 rounded-xl shadow-lg text-center">
                  <a href={item.url} className="text-4xl font-bold text-black">
                    {item.title}
                  </a>
                  <p className="text-black text-center mt-2">
                    We build with precision and care.
                  </p>
                </div>
              </div>
              <div className="absolute top-5 right-10 transform">
                <div className="backdrop-blur-md bg-white/20 px-6 py-2.5 rounded-full shadow-lg text-center">
                  <a
                    href={item.url}
                    className="text-xl font-bold text-white hover:text-blue-500 group-hover:text-blue-700 transition-colors duration-300"
                  >
                    See More
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
