"use client";
import Footer from "@/components/Alpha/Footer";
import ScrollProgressBar from "@/components/Alpha/ScollProgressBar";
import ScrollToTop from "@/components/Alpha/ScrollToTop";
import NavBar from "@/components/Alpha/Navbar";
import { motion } from "framer-motion";
import React from "react";

function page() {
  function t(arg0: string): React.ReactNode | import("motion-dom").MotionValue<number> | import("motion-dom").MotionValue<string> {
    throw new Error("Function not implemented.");
  }

  return (
     <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="z-50">
        <NavBar />
      </header>
      <main className="flex flex-col">
        <section className="w-full">
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
              <div className="max-md:hidden absolute bottom-[3vw] z-30 right-0 p-[1.2rem] bg-blue-800 text-[1.2vw] text-white font-light rounded-tl-full font-poppins">
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
        <section className="w-full bg-[#CACAC8] py-20 px-10">
          <div>
            <h2 className=" text-6xl font-bold">Our Services</h2>
            <p className="mt-4 text-lg">We offer a wide range of architectural and engineering services to meet your needs.</p>
          </div>
          <div className="mt-8">
            <h3 className="text-4xl font-bold">Our Expertise</h3>
            <ul className="mt-4 list-disc list-inside">
              <li>Architectural Design</li>
              <li>Structural Engineering</li>
              <li>MEP Engineering</li>
              <li>Construction Management</li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
      <ScrollToTop />
      <ScrollProgressBar />
    </div>
  );
}

export default page;
