import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { MdDownload } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const slides = [
  "/Video/Civil.mp4",
  "/Video/Architecture.mp4",
  "/Video/Electric.mp4",
  "/Video/Mechanical.mp4",
  "/Video/Plumbing.mp4",
];

export default function HeroSlider() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Swiper */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-screen object-cover blur-[1px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute bg-opacity-40 z-100" />
      {/* Text Layer */}
      <div className="w-full xl:max-w-6xl absolute z-20 top-1/2 left-[50%] lg:left-[50.5%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 md:p-2 md:px-4.5 lg:p-2.5">
        <h1 className="text-start text-2xl font-bold font-exo mb-2 leading-tight">
          Welcome to
        </h1>
        <h1 className="text-start text-3xl md:text-[64px] font-bold font-exo mb-4 leading-tight lg:border-b-5 lg:border-[#1B42CE] pb-2 lg:w-fit">
          Alpha MSH Co., Ltd.
        </h1>
        <p className="text-start text-sm md:text-lg mx-auto font-exo font-medium leading-tight text-white mt-5">
          We are a Cambodia registered company specializing in the design and
          installation of Mechanical, Electrical, Plumbing, and Fire Fighting
          (MEPF) systems. In addition to MEPF, we provide comprehensive Civil
          and Architectural services, allowing us to deliver fully integrated
          and seamless construction solutions. With a skilled and experienced
          team, we are committed to delivering reliable and high-quality
          services tailored to our clients’ needs
        </p>
        <div className="flex flex-col sm:flex-row gap-2 md:gap-5 mt-5 md:mt-8 xl:mt-5">
          <motion.button
            whileHover="hover"
            className="w-fit flex items-center bg-red-700 text-white py-2.5 px-5.5 rounded-lg transition-colors duration-300"
          >
            <p className="font-exo text-base font-medium">Our Services</p>
            <motion.div
              variants={{
                hover: { rotate: 360 },
              }}
              transition={{ duration: 0.6 }}
            >
              <FaArrowDown className="w-3 h-4 ml-2" />
            </motion.div>
          </motion.button>

          <motion.button
            whileHover="hover"
            className="min-[1440px]:hidden w-fit  flex items-center bg-[#1b42ce] text-white py-2.5 px-5 rounded-lg  transition-colors duration-300"
          >
            <p className="font-exo text-base font-medium">
              Get Company Profile
            </p>
            <motion.div
              animate={{ rotate: [0, 360, -360, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <MdDownload className="w-6 h-6 ml-2" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      <div className="max-[1440px]:hidden absolute bottom-0 z-30 top-[85%] xl:right-[22.5%]">
        <motion.button
          whileHover="hover"
          className="flex items-center bg-[#1b42ce] text-white py-4 px-6 rounded-lg transition-colors duration-300"
        >
          <p className="font-exo text-base font-medium">Get Company Profile</p>
          <motion.div
            animate={{ rotate: [0, 360, -360, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <MdDownload className="w-6 h-6 ml-2" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
