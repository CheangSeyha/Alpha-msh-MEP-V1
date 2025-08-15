import { useTranslations } from "next-intl";
import React from "react";

function ArchitectureServices() {
  const t = useTranslations("Architecture");
  return (
    <div>
      <div className="w-full px-[2vw] mt-25 max-md:w-full max-md:p-5 max-md:mb-10 text-center">
        <h2 className="text-6xl font-bold">{t("aservices")}</h2>
        <p className="mt-4 text-lg">{t("atext")}</p>
      </div>
      <div className="w-full flex max-md:flex-col mx-auto justify-between items-center p-10 max-md:p-5">
        <div className="w-1/2 max-md:w-full max-md:p-5 max-md:mb-10 flex flex-col">
          <h2 className="text-4xl font-bold">{t("title1")}</h2>
          <p className="mt-4 text-lg md:pr-20 max-md:pr-0">
            {t("description1")}
          </p>
        </div>
        <div className="w-1/2 flex justify-end items-end max-md:w-full">
          <div className="w-full h-[25vw] max-md:h-[35vw] relative bg-[#A7BDD8] rounded-tl-full rounded-br-full">
            <img
              src="/Architecture/archi_planner.jpg"
              alt="Service"
              className="object-cover w-11/12 h-11/12 max-md:w-10/12 max-md:h-full absolute -left-[5rem] top-20 max-md:-top-10 max-md:left-[7.5vw] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row-reverse max-md:flex-col md:mt-40 justify-between items-center p-10 max-md:p-5">
        <div className="w-1/2 max-md:w-full max-md:p-5 max-md:mb-10 flex flex-col md:pl-30">
          <h2 className="text-4xl font-bold">{t("title2")}</h2>
          <p className="mt-4 text-lg">{t("description2")}</p>
        </div>
        <div className="w-1/2 flex justify-end items-end max-md:w-full">
          <div className="w-full h-[28vw] max-md:h-[35vw] relative bg-[#595959] rounded-tr-full">
            <img
              src="/Civil/CivilDone3.jpg"
              alt="Service"
              className="object-cover w-11/12 h-10/12 max-md:w-10/12 max-md:h-full absolute -right-[5rem] top-9 max-md:-top-10 max-md:right-[7.5vw] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex max-md:flex-col mx-auto justify-between items-center p-10 max-md:p-5">
        <div className="w-1/2 max-md:w-full max-md:p-5 max-md:mb-10 flex flex-col justify-center items-start">
          <h2 className="text-4xl font-bold">{t("title3")} </h2>
          <p className="mt-4 text-lg md:pr-20 max-md:pr-0">
            {t("description3")}"
          </p>
        </div>
        <div className="w-1/2 flex justify-end items-end max-md:w-full">
          <div className="w-full h-[25vw] max-md:h-[35vw] relative bg-[#A7BDD8] rounded-tl-full">
            <img
              src="/Architecture/problem_solving.webp"
              alt="Service"
              className="object-cover w-11/12 h-11/12 max-md:w-10/12 max-md:h-full absolute -left-[5rem] top-30 max-md:-top-10 max-md:left-[7.5vw] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row-reverse max-md:flex-col md:mt-40 justify-between items-center p-10 max-md:p-5">
        <div className="w-1/2 max-md:w-full max-md:p-5 max-md:mb-10 flex flex-col justify-center items-start md:pl-30">
          <h2 className="text-4xl font-bold">{t("title4")}</h2>
          <p className="mt-4 text-lg">{t("description4")}</p>
        </div>
        <div className="w-1/2 flex justify-end items-end max-md:w-full">
          <div className="w-full h-[28vw] max-md:h-[35vw] relative bg-[#595959] rounded-tr-full rounded-bl-full">
            <img
              src="/Architecture/Project Stewards.webp"
              alt="Service"
              className="object-cover w-11/12 h-10/12 max-md:w-10/12 max-md:h-full absolute -right-[5rem] top-9 max-md:-top-10 max-md:right-[7.5vw] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchitectureServices;
