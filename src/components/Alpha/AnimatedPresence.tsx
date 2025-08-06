import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function AnimatedPresence() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5, // Trigger when 50% of the element is visible
    once: false, // Let it trigger multiple times
  });

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
      initial={{ x: -200, opacity: 0 }}

      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="p-6 m-10 bg-blue-500 text-white rounded-xl shadow-lg w-fit text-3xl font-bold"

      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-6 m-10 bg-blue-500 text-white rounded-xl shadow-lg w-fit"
    >
      T
    </motion.div>
  );
}

export default AnimatedPresence;
