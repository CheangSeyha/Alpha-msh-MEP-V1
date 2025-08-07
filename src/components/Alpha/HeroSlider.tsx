import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { MdDownload } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const slides = [
  "/Video/Civil.mp4",
  "/Video/Architecture.mp4",
  "/Video/Electric.mp4",
  "/Video/Mechanical.mp4",
  "/Video/Plumbing.mp4",
];

export default function HeroSlider() {
  const t = useTranslations("HomePage");
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
      <div className="w-full xl:max-w-6xl absolute z-50 top-1/2 left-[50%] lg:left-[50.5%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 md:p-2 md:px-4.5 lg:p-2.5">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-start text-2xl font-bold font-exo mb-2 leading-tight"
        >
          {t("welcome")}
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-start text-2xl min-[760px]:text-5xl lg:text-[64px] font-bold font-exo mb-4 leading-tight border-b-5 border-[#1B42CE] pb-2 w-fit"
        >
          {t("welcome2")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-start text-sm md:text-lg mx-auto font-exo font-medium leading-tight text-white mt-5 px-4 py-2 rounded-md bg-black/40 backdrop-blur-sm"
        >
          {t("description")}
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-2 md:gap-5 mt-5 md:mt-8 xl:mt-5">
          <motion.button
            whileHover="hover"
            onClick={() => {
              document
                .getElementById("Services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-fit flex items-center bg-red-700 text-white py-2.5 px-5.5 rounded-lg transition-colors duration-300"
          >
            <p className="font-exo text-base font-medium">{t("ourservices")}</p>
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
            <a
              href="/1-ALPHA MSH PROFILE COMPANY 2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <p className="font-exo text-base font-medium">
                {t("profilecompany")}
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
            </a>
          </motion.button>
        </div>
      </div>

      <div className="max-[1440px]:hidden absolute bottom-0 z-30 top-[85%] xl:right-[22.5%]">
        <motion.button
          whileHover="hover"
          className="flex items-center bg-[#1b42ce] text-white py-4 px-6 rounded-lg transition-colors duration-300"
        >
          <a
            href="/1-ALPHA MSH PROFILE COMPANY 2021.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <p className="font-exo text-base font-medium">
              {t("profilecompany")}
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
          </a>
        </motion.button>
      </div>
    </div>
  );
}
