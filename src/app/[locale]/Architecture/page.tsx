"use client";
import Footer from "@/components/Alpha/Footer";
import ScrollProgressBar from "@/components/Alpha/ScollProgressBar";
import ScrollToTop from "@/components/Alpha/ScrollToTop";
import NavBar from "@/components/Alpha/Navbar";
import { motion } from "framer-motion";
import React from "react";
import ImageSlider from "@/components/Alpha/ArchitectureSlider";

const projectImages = [
  "/Architecture/archi_planner.jpg",
  "/Civil/civil1.jpg",
  "/Civil/civil2.jpg",
  "/Civil/civil3.webp",

];

function page() {
  function t(arg0: string): React.ReactNode | import("motion-dom").MotionValue<number> | import("motion-dom").MotionValue<string> {
    throw new Error("Function not implemented.");
  }


  return (
     <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="z-70">
        <NavBar />
      </header>
      <main className="flex flex-col">
        <section className="w-full z-50">
          <div className="relative w-full">
            <motion.img
              src="/arch_pic1.jpg"
              alt="cambodia"
              className="object-cover w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <motion.h1
              className="max-[450px]:hidden absolute bottom-[61%] max-[450px]:right-10 max-[1200px]:bottom-[55%] right-[10vw] max-[1635px]:right-[1vw] max-[950px]:left-[55%] max-[950px]:top-[25%] transform -translate-x-1/2 font-poppins text-sm md:text-2xl lg:text-4xl font-bold text-white uppercase p-2 md:p-5 "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="flex flex-col font-exo">
                Form
                <div className="max-[450px]:hidden flex lowercase font-poppins text-sm md:text-xl lg:text-2xl whitespace-nowrap w-fit font-light pl-24 max-[950px]:pl-16 max-[600px]:pl-10"><span className="border-b-2 border-white w-16 mb-2"></span>design that captivates</div>
              </div>
            </motion.h1>
            <motion.h1
              className="max-[450px]:hidden absolute bottom-1/2 max-[1200px]:bottom-[44%] right-[15vw] max-[1635px]:right-[7vw] max-[950px]:left-[51%] max-[950px]:top-[35%] transform -translate-x-1/2 text-start font-poppins text-sm md:text-2xl lg:text-4xl font-bold text-white uppercase p-2 md:p-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="flex flex-col font-exo">
                Flow
                <div className="max-[450px]:hidden flex lowercase font-poppins text-sm md:text-xl lg:text-2xl whitespace-nowrap w-fit font-light pl-24 max-[950px]:pl-16 max-[600px]:pl-9"><span className="border-b-2 border-white w-16 mb-2"></span>systems that harmonize</div>
              </div>
            
            </motion.h1>
            <motion.h1
              className="max-[450px]:hidden absolute bottom-[33%] z-20 max-[1200px]:bottom-[28%] right-[12vw] max-[1635px]:right-[2vw] max-[950px]:left-[46%] max-[950px]:top-[45%] transform -translate-x-1/2 text-start font-poppins text-sm md:text-2xl lg:text-4xl font-bold text-white uppercase p-2 md:p-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="flex flex-col font-exo">
                function
                <div className="flex lowercase font-poppins text-sm md:text-xl lg:text-2xl whitespace-nowrap w-fit font-light pl-42 max-[950px]:pl-28 max-[600px]:pl-16"><span className="border-b-2 border-white w-16 mb-2"></span>spaces that perform flawlessly.</div>
              </div>
            </motion.h1>
            <motion.h1
              className="absolute min-[450px]:hidden top-[25vw] max-[430px]:top-[18vw] right-4 text-start font-poppins font-bold text-xl text-white uppercase"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
                form, flow, function
            </motion.h1>
            <div className="absolute bottom-0 z-10 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent">
              <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-start w-1/3 max-xl:w-2/3 max-[555px]:w-11/12 max-[555px]:ml-2  absolute bottom-[10vw] max-[1200px]:bottom-[7vw] left-[10%] max-[555px]:left-0 text-sm md:text-xl mx-auto font-exo font-medium leading-tight text-white mt-5 px-4 py-2 rounded-md bg-black/10 backdrop-blur-sm"
              >
                At <span className="font-bold text-blue-800">ALPHA MS</span><span className="font-bold text-red-800">H</span>, we blend architectural beauty with seamless engineering to create environments where every detail works together for your success.
              </motion.p>
            </div>
              {/* for desktop */}
              <div className="max-md:hidden absolute bottom-[3vw] z-60 right-0 p-[1.2rem] bg-blue-800 text-[1.2vw] text-white font-light rounded-tl-full font-poppins">
                <div className="ml-2">"Alpha MSH CO., Ltd</div>

              </div>
              <div className="max-md:hidden absolute -bottom-20 z-30 right-0 w-8/12 p-[1.2rem] py-[2rem] bg-blue-800 flex justify-evenly items-center text-[2vw] text-white font-extrabold rounded-bl-full border-l-8 border-b-8 border-t-8 border-[#CACAC8] font-poppins">
                <div className="w-1/3 border-r-8 border-white text-center">Trustable</div>
                <div className="w-1/3 border-r-8 border-white text-center">Reliable</div>
                <div className="w-1/3 text-center">Efficient</div>
              </div>
            {/* for mobile */}
              <div className="min-md:hidden absolute -bottom-[5vw] z-30 left-[21vw] w-fit bg-blue-800 py-[3vw] px-[7vw] gap-2 flex justify-evenly items-center text-[3vw] text-white font-extrabold font-poppins">
                <div className="w-fit text-center">Trustable,</div>
                <div className="w-fit text-center">Reliable,</div>
                <div className="w-fit text-center">Efficient</div>
              </div>
          </div>
        </section>
        <section className="w-full bg-[#CACAC8] max-md:px-0 relative z-40 pb-20">
          {/* Circle Style */}
          <div className="absolute w-20 h-20 top-[13vw] left-[30vw] bg-amber-500 rounded-full opacity-25"></div>
          <div className="absolute w-20 h-20 top-[13vw] left-[15vw] bg-amber-500 rounded-full opacity-25"></div>
          <div className="absolute w-20 h-20 top-[70vw] left-[40vw] bg-amber-500 rounded-full opacity-25"></div>
          <div className="absolute w-20 h-20 top-[70vw] left-[50vw] bg-amber-500 rounded-full opacity-25"></div>
          <div className="absolute w-20 h-20 bottom-[35vw] right-10 bg-amber-500 rounded-full opacity-25"></div>
          <div className="absolute w-20 h-20 bottom-[35vw] right-40 bg-amber-500 rounded-full opacity-25"></div>

          <div className="w-full px-[2vw] mt-25 max-md:w-full max-md:p-5 max-md:mb-10 text-center">
              <h2 className="text-6xl font-bold">Our Services</h2>
              <p className="mt-4 text-lg">We offer a wide range of architectural and engineering services to meet your needs.</p>
          </div>
          <div className="w-full flex max-md:flex-col mx-auto justify-between items-center p-10 max-md:p-5">
            <div className="w-1/2 max-md:w-full max-md:p-5 max-md:mb-10 flex flex-col">
              <h2 className="text-4xl font-bold">Vision Shapers</h2>
              <p className="mt-4 text-lg md:pr-20 max-md:pr-0">carefully analyze and organize spaces to ensure they are not only functional and safe but also comfortable and visually appealing. 
                They consider flow, accessibility, sustainability, and long-term usability to create environments that meet the needs of both people and purpose.</p>
            </div>
            <div className="w-1/2 flex justify-end items-end max-md:w-full">
              <div className="w-full h-[25vw] max-md:h-[35vw] relative bg-[#A7BDD8] rounded-tl-full rounded-br-full">
                  <img src="/Architecture/archi_planner.jpg" alt="Service" className="object-cover w-11/12 h-11/12 max-md:w-10/12 max-md:h-full absolute -left-[5rem] top-20 max-md:-top-10 max-md:left-[7.5vw] rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row-reverse max-md:flex-col md:mt-40 justify-between items-center p-10 max-md:p-5">
            <div className="w-1/2 max-md:w-full max-md:p-5 max-md:mb-10 flex flex-col md:pl-30">
              <h2 className="text-4xl font-bold">Design Liaisons</h2>
              <p className="mt-4 text-lg">act as the essential link between clients, engineers, builders, and other stakeholders. They translate complex architectural ideas and technical details into clear,
                 understandable language, ensuring that everyone involved in the project is aligned and informed at every stage.</p>
            </div>
            <div className="w-1/2 flex justify-end items-end max-md:w-full">
              <div className="w-full h-[28vw] max-md:h-[35vw] relative bg-[#595959] rounded-tr-full">
                  <img src="/Civil/CivilDone3.jpg" alt="Service" className="object-cover w-11/12 h-10/12 max-md:w-10/12 max-md:h-full absolute -right-[5rem] top-9 max-md:-top-10 max-md:right-[7.5vw] rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
          <div className="w-full flex max-md:flex-col mx-auto justify-between items-center p-10 max-md:p-5">
            <div className="w-1/2 max-md:w-full max-md:p-5 max-md:mb-10 flex flex-col justify-center items-start">
              <h2 className="text-4xl font-bold">Creative Problem-Solvers </h2>
              <p className="mt-4 text-lg md:pr-20 max-md:pr-0">tackle challenges that arise from site limitations, budget constraints, zoning regulations, and unforeseen design issues. They think creatively and strategically to
                 find solutions that balance aesthetics, functionality, and feasibility, turning obstacles into opportunities for innovation.</p>
            </div>
            <div className="w-1/2 flex justify-end items-end max-md:w-full">
              <div className="w-full h-[25vw] max-md:h-[35vw] relative bg-[#A7BDD8] rounded-tl-full">
                  <img src="/Architecture/archi_planner.jpg" alt="Service" className="object-cover w-11/12 h-11/12 max-md:w-10/12 max-md:h-full absolute -left-[5rem] top-30 max-md:-top-10 max-md:left-[7.5vw] rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row-reverse max-md:flex-col md:mt-40 justify-between items-center p-10 max-md:p-5">
            <div className="w-1/2 max-md:w-full max-md:p-5 max-md:mb-10 flex flex-col justify-center items-start md:pl-30">
              <h2 className="text-4xl font-bold">Project Stewards</h2>
              <p className="mt-4 text-lg">manage the project’s journey from initial concept and sketches to the completed building. They oversee timelines, coordinate between teams, monitor quality, and ensure that each stage 
                progresses smoothly, keeping the project on track and maintaining the vision and standards set from the beginning.</p>
            </div>
            <div className="w-1/2 flex justify-end items-end max-md:w-full">
              <div className="w-full h-[28vw] max-md:h-[35vw] relative bg-[#595959] rounded-tr-full rounded-bl-full">
                  <img src="/Architecture/archi_planner.jpg" alt="Service" className="object-cover w-11/12 h-10/12 max-md:w-10/12 max-md:h-full absolute -right-[5rem] top-9 max-md:-top-10 max-md:right-[7.5vw] rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="relative">
            {/* Background image */}
            <div className="fixed inset-0 w-screen h-screen bg-cover bg-center">
              <img src="/Architecture/bg-inArchitecture.webp" alt="Our Approach" className="object-cover w-full h-full rounded-lg shadow-lg" />
            </div>

            {/* Overlay (optional) */}
            <div className="fixed inset-0 bg-black/30"></div>

            {/* Scrollable content */}
            <div className="relative z-10">
              <section className="h-[500px] flex items-center justify-center text-white">
                <h1 className="text-6xl font-poppins font-bold">Explore Our Project</h1>
              </section>

              <section className="bg-white">
                {/* <p className="text-2xl text-black">More content scrolling...</p> */}
                <div className="w-full">
                  <p className="text-xl font-poppins font-light p-4 text-black">Project Overview</p>
                </div>
                <div className="border-b-2 border-[#121D2F] w-full p-10">
                  <div className="w-full md:px-20 md:pr-[7rem]">
                    <h1 className="text-4xl font-poppins font-bold py-4">Our Recent Work</h1>
                    <p className="text-xl font-poppins font-light text-black">
                      Our architectural projects are designed with a focus on sustainability, functionality, and aesthetics. We aim to create spaces that not only meet the needs of our clients but also enhance the environment and community.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className="w-full max-md:px-0 relative z-10 pb-20 bg-white ">
          <div className="absolute w-100 h-100 -top-56 -left-[10vw] bg-amber-500 rounded-full opacity-25"></div>
          <div className="absolute w-100 h-100 top-[33vw] z-10 left-[35vw] bg-amber-500 rounded-full opacity-25 max-lg:hidden"></div>
          <div className="absolute w-20 h-20 bottom-[10vw] z-10 right-10 bg-amber-500 rounded-full opacity-25"></div>
          <div className="absolute w-20 h-20 bottom-[20vw] z-10 right-40 bg-amber-500 rounded-full opacity-25"></div>

            <ImageSlider images={projectImages} visibleCount={2} year={2025} project="Project 1" />
            <ImageSlider images={projectImages} visibleCount={2} year={2025} project="Project 2" />
            <ImageSlider images={projectImages} visibleCount={2} year={2025} project="Project 3" />
        </section>
      </main>
      <footer className="bg-white relative z-50">
        <Footer />
      </footer>
      <ScrollToTop />
      <ScrollProgressBar />
    </div>
    
  );
}

export default page;
