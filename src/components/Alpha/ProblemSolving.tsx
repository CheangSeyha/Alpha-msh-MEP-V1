import React from "react";
import { FaCog, FaDraftingCompass, FaHardHat } from "react-icons/fa";
import { BorderBeam } from "../magicui/border-beam";

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
function ProblemSolving() {
  return (
    <div className="w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="relative inline-block pb-1">
        <h2 className="text-center text-2xl md:text-3xl font-bold font-exo relative z-10">
          The Problem We're Solving
        </h2>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-75 md:w-92.5 h-[3px] bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 rounded"></div>
      </div>
      <p className="text-center text-lg mt-4 font-light font-exo">
        We ensure the integrity of every project from the ground up through
        Civil Engineering, building strong foundations and durable structures.
        Our MEP services equip buildings with all critical internal systems for
        safety, comfort, and functionality. Finally, our Architectural design
        brings the project to life, focusing on finishes and layout to create a
        beautiful and cohesive space.
      </p>
      <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-5 lg:gap-20 mt-8">
        {Problem.map((item, index) => (
          <div key={index} className="flex-1 w-full">
            <div className="flex flex-col items-center bg-blue-50 rounded-lg p-5 h-full overflow-hidden">
              <div className="text-4xl mb-2 p-2">{item.icon}</div>
              <div className="flex flex-col gap-1 mt-2 mb-2">
                <h3 className="text-xl text-center font-bold font-exo">
                  {item.title}
                </h3>
                <p className="text-sm text-center font-exo">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProblemSolving;

{
  /* <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 mt-8">
        {Problem.map((item, index) => (
          <div key={index}>
            <div className="w-80 flex flex-col items-center bg-white shadow-md rounded-lg p-5">
              <div className="text-4xl mb-2 p-2">{item.icon}</div>
              <div className="flex flex-col gap-1 mt-2 mb-2">
                <h3 className="text-xl text-center font-bold font-exo">
                  {item.title}
                </h3>
                <p className="text-base text-center font-exo">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */
}
