import React from "react";
import AnimatedCounter from "./AnimatedCounter";

function RealImpact() {
  return (
    <div className="bg-[#121D2F] py-20 flex flex-col items-center justify-center my-10">
      <div className="w-full flex flex-col items-center justify-center gap-3 px-3">
        <h2 className="text-4xl font-bold  text-white font-exo">Why Choose Us?</h2>
        <p className="text-center text-lg text-white font-exo">
          Complete Civil, Architectural, and MEP services from design to execution — all under one roof.
        </p>
      </div>
      <div className="w-full flex flex-wrap items-center justify-evenly mt-10 p-4 gap-x-10 gap-y-12">
        <div className="flex flex-col items-center">
          <div className="flex text-5xl font-bold text-blue-800 font-poppins">
            <AnimatedCounter targetNumber={180} />
            <p>+</p>
          </div>
          <p className="mt-2 text-white font-exo">Satisfied Clients</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex text-5xl font-bold font-exo text-blue-800">
            <AnimatedCounter targetNumber={300} />
          </div>
          <p className="mt-2 text-white font-exo">Employees</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex text-5xl font-bold text-blue-800 font-exo">
            <AnimatedCounter targetNumber={20} />
            <p>+</p>
          </div>
          <p className="mt-2 text-white font-exo">Years of Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex text-5xl font-bold text-blue-800 font-exo">
            <AnimatedCounter targetNumber={40} />
            <p>+</p>
          </div>
          <p className="mt-2 font-exo text-white">Projects</p>
        </div>
      </div>
    </div>
  );
}

export default RealImpact;
