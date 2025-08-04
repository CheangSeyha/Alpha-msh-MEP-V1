import React from "react";
import { MechanicalSystems } from "@/data/ServiceProject";
import { useTranslations } from "next-intl";

function Mechanical() {
  const t = useTranslations("Mechanical");
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-center text-[13px] sm:text-xl md:text-2xl lg:text-3xl font-light font-poppins text-black border-b-3 border-b-[#2D7FBD] uppercase w-fit mt-10">
          {t("air-conditioning system")}
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-16 mt-5 md:mt-10">
          <div className="w-full md:w-3/4 lg:w-1/2 h-60 overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="/mechanical/air-conditionflow.jpg"
              alt="airconditionflow"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full flex-wrap">
            <p className="text-xs md:text-sm lg:text-base font-poppins">
              {t("description")}
            </p>
          </div>
        </div>
        <h1 className="text-center text-[13px] sm:text-xl md:text-2xl lg:text-3xl font-light font-poppins text-black border-b-3 border-b-[#2D7FBD] uppercase w-fit mt-20 md:mt-30">
          {t("ventilation system")}
        </h1>
        <div className="w-full flex flex-col gap-10 md:gap-20 mt-10 mb-10">
          {MechanicalSystems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-2 md:gap-12 pb-10 md:pb-20 ${
                index !== MechanicalSystems.length - 1
                  ? "border-b-3 border-b-[#2D7FBD]"
                  : ""
              }`}
            >
              <div className="w-full md:w-3/4 lg:w-1/2 h-60 overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out ">
                <img
                  src={item.img}
                  alt={t(item.title)}
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="w-full flex flex-col gap-4 md:gap-6">
                <h2 className="text-start text-xl md:text-2xl font-semibold font-poppins mt-2">
                  {t(item.title)}
                </h2>
                <p className="text-xs md:text-sm lg:text-base font-poppins">
                  {t(item.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mechanical;
