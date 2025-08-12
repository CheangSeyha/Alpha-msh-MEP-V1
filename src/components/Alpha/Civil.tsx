import React from "react";
import { FaSitemap } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { MdEngineering, MdOutlineVerified } from "react-icons/md";
import { SiBlueprint } from "react-icons/si";

function Civil() {
  const CivilService = [
    {
      icon: <SiBlueprint />,
      title: "Project Execution & Supervision",
      description:
        "The Civil Engineer monitors daily site activities to ensure they adhere to approved plans, specifications, and established timelines. They provide essential technical guidance to the site teams and subcontractors, guaranteeing that all work is executed in strict accordance with relevant codes, standards, and regulations",
      img: "/Civil/Project Execution & Supervision.jpg",
    },
    {
      icon: <MdEngineering />,
      title: "Coordination & Communication",
      description:
        "Serving as the main technical point of contact, the engineer facilitates communication between the project team, contractors, and consultants. They coordinate with architects, structural engineers, and MEP teams to efficiently resolve any issues that arise on site. Regular attendance at site meetings is also a key duty, where they report on project progress to management.",
      img: "/Civil/CivilDone3.jpg",
    },
    {
      icon: <MdOutlineVerified />,
      title: "Quality Assurance",
      description:
        "A critical part of the role is quality control. The Civil Engineer inspects all materials delivered to the site to ensure they comply with project specifications. They also perform regular quality checks on the work being done and implement corrective actions for any defects or deviations found.",
      img: "/Civil/Quality Assurance.jpg",
    },
    {
      icon: <FaSitemap />,
      title: "Safety & Compliance",
      description:
        "The engineer is responsible for enforcing site safety rules and ensuring compliance with all health and safety regulations. In the event of an incident, they must report it and implement preventative measures to ensure a safe working environment for everyone on site.",
      img: "/Civil/Safety & Compliance.jpg",
    },
    {
      icon: <IoMdDocument />,
      title: "Documentation & Reporting",
      description:
        "The Civil Engineer maintains comprehensive site records, including daily progress reports, inspection logs, and as-built drawings. They are also responsible for preparing detailed reports for management on the project's status, including any delays or issues that have occurred.",
      img: "/Civil/Documentation & Reporting.jpeg",
    },
  ];
  return (
    <div>
      <div className="w-full mx-auto">
        <div className="w-full flex flex-col gap-10 md:gap-20 mt-10">
          {CivilService.map((item, index) => (
            <div
              key={index}
              className={`w-full flex flex-col md:flex-row ${
                index === 1 || index === 3 ? "md:flex-row-reverse" : ""
              } items-center gap-5 md:gap-20`}
            >
              {/* Image overlay */}
              <div className="relative w-full md:w-1/2 h-96 flex items-center justify-center">
                {/* Background square */}
                <div
                  className={`absolute bg-[#121D2F] w-full h-6/12  md:w-[90%] md:h-[90%] left-0 top-0 z-0 ${
                    index === 1 || index === 3 ? "md:left-[10%]" : ""
                  }`}
                />
                {/* Image, slightly offset */}
                <img
                  src={item.img}
                  alt={item.title}
                  className={`absolute w-[80%] h-[80%] object-cover top-[10%] md:top-[5%] z-50 shadow-lg ${
                    index === 1 || index === 3
                      ? "md:right-[35%]"
                      : "md:left-[35%]"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="w-full flex flex-col items-center">
                <div className=" text-black text-xl md:text-2xl lg:text-3xl font-exo mt-2">
                  {item.title}
                </div>
                <p className="text-black text-start text-sm md:text-base max-w-4xl font-exo mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Civil;
