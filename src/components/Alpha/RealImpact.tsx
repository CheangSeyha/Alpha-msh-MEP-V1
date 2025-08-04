import React from "react";
import AnimatedCounter from "./AnimatedCounter";

function RealImpact() {
  return (
    <div className="bg-blue-500/10 py-20 flex flex-col items-center justify-center my-10">
      <div className="w-full flex flex-col items-center justify-center gap-3 px-3">
        <h2 className="text-4xl font-bold font-poppins">Why Choose Us?</h2>
        <p className="text-center text-lg">
          Complete MEP services from design to execution — all under one roof.
        </p>
      </div>
      <div className="w-full flex flex-wrap items-center justify-evenly mt-10 p-4 gap-x-10 gap-y-12">
        <div className="flex flex-col items-center">
          <div className="flex text-5xl font-bold text-blue-800 font-poppins">
            <AnimatedCounter targetNumber={180} />
            <p>+</p>
          </div>
          <p className="mt-2 text-gray-600">Satisfied Clients</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex text-5xl font-bold text-blue-800 font-poppins">
            <AnimatedCounter targetNumber={300} />
          </div>
          <p className="mt-2 text-gray-600">Employees</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex text-5xl font-bold text-blue-800 font-poppins">
            <AnimatedCounter targetNumber={20} />
            <p>+</p>
          </div>
          <p className="mt-2 text-gray-600">Years of Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex text-5xl font-bold text-blue-800 font-poppins">
            <AnimatedCounter targetNumber={40} />
            <p>+</p>
          </div>
          <p className="mt-2 text-gray-600">Projects</p>
        </div>
      </div>
    </div>
  );
}

export default RealImpact;
