import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useRef } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function AnimatedPresence() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5, // Trigger when 50% of the element is visible
    once: false, // Let it trigger multiple times
  });

  const t = useTranslations("quoteCompany");

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="font-exo font-bold flex flex-wrap items-center justify-center gap-5 text-center px-5 lg:p-10"
    >
      <FaQuoteLeft
        className="text-white"
        style={{
          width: "clamp(3rem, 5vw, 7rem)",
          height: "clamp(3rem, 5vw, 7rem)",
        }}
      />
      <span
        className="text-white uppercase leading-tight"
        style={{
          fontSize: "clamp(2rem, 4vw, 5rem)",
        }}
      >
        {t("quote")}
      </span>
    </motion.div>
  );
}

export default AnimatedPresence;
