// CompletedCard.tsx
"use client"
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface CompletedCardProps {
  srcImage: string;
  construFor: string;
  workOn: string;
  location: string;
  start: string;
  end: string;
  firstCard?: boolean;
}

function CompletedCard({ srcImage, construFor, workOn, location, start, end, firstCard }: CompletedCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-lg shadow-lg p-4 flex max-lg:flex-col items-center"
    >
       <div className={`w-full py-10 ${firstCard ? "border-t-4 border-[#2D7FBD]" : ""}`}>
        <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-6xl border">
            <div className="md:flex transition-all duration-500 ease-in-out">
                <div className="md:shrink-0  transition-all duration-500 ease-in-out">
                    <img
                        className="h-56 max-w-full aspect-[4/2] overflow-hidden object-cover md:h-56 md:max-[945px]:w-[320px] max-md:w-full transition-all duration-500 ease-in-out"
                        src={srcImage}
                        alt="Modern building architecture"
                    />
                </div>
            <div className="px-8 max-[530px]:px- py-4">
                <div className="text-base max-[900px]:text-sm font-poppins font-semibold tracking-wide text-indigo-500 uppercase transition-all duration-500 ease-in-out">Site Informations</div>
                    <p className="w-fit min-[1200px]:text-[1.3vw] min-[850px]:max-[1200px]:text-[2vw] text-lg font-poppins  border-b-2 border-blue-400 transition-all duration-500 ease-in-out">
                        {construFor}
                    </p>
                    <p className="mt-4 text-gray-500 text-xl">
                        Work On : {workOn}
                    </p>
                    <p className="mt-2 text-gray-500 text-xl">
                        Location : {location}
                    </p>
                    <p className="mt-2 flex max-md:flex-col text-gray-500 text-xl transition-all duration-500 ease-in-out">
                        Start On : {start}
                        <span className="ml-10 max-md:ml-0 max-md:mt-2 text-gray-500 text-xl">
                            End On : {end}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </motion.div>
  );
}

export default CompletedCard;
 