import { useTranslations } from "next-intl";
import React from "react";
import { BsGlobe } from "react-icons/bs";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { motion } from "framer-motion";

function Contact() {
  const t = useTranslations("Contact");

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="flex flex-col justify-start gap-1">
          <div className="relative inline-block pb-2.5">
            <h2 className="text-start text-2xl md:text-3xl text-black font-extralight uppercase font-exo relative z-10">
              {t("moredetails")}
            </h2>
            <div className="absolute bottom-0 left-1 w-64 h-[3px] bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 rounded"></div>
          </div>
          <p className="text-start text-base md:text-lg font-semibold font-exo text-black mt-1">
            {t("Submit your enquiry here")}
          </p>
        </div>
      </motion.div>

      {/* Form Fields */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Family Name & Given Name */}
        <motion.div
          variants={fadeUp}
          className="w-full flex flex-col md:flex-row gap-5 md:gap-11.5 mt-10"
        >
          {/* Family Name */}
          <div className="w-full flex flex-col">
            <p className="text-start text-xs font-light font-exo text-gray-600">
              {t("Familyname")}
            </p>
            <input
              type="text"
              className="w-full border text-sm md:text-base border-gray-300 rounded-[4px] font-exo p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1B42CE]"
              placeholder={t("Familyname")}
            />
          </div>
          {/* Given Name */}
          <div className="w-full flex flex-col">
            <p className="text-start text-xs font-light font-exo text-gray-600">
              {t("Givenname")}
            </p>
            <input
              type="text"
              className="w-full border text-sm md:text-base border-gray-300 rounded-[4px] font-exo p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1B42CE]"
              placeholder={t("Givenname")}
            />
          </div>
        </motion.div>

        {/* Email & Phone */}
        <motion.div
          variants={fadeUp}
          className="w-full flex flex-col md:flex-row gap-5 md:gap-11.5 mt-5"
        >
          <div className="w-full flex flex-col">
            <p className="text-start text-xs font-light font-exo text-gray-600">
              {t("email")}
            </p>
            <input
              type="text"
              className="w-full border text-sm md:text-base border-gray-300 rounded-[4px] font-exo p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1B42CE]"
              placeholder={t("email")}
            />
          </div>
          <div className="w-full flex flex-col">
            <p className="text-start text-xs font-light font-exo text-gray-600">
              {t("phone")}
            </p>
            <input
              type="text"
              className="w-full border text-sm md:text-base border-gray-300 rounded-[4px] font-exo p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1B42CE]"
              placeholder={t("phone")}
            />
          </div>
        </motion.div>

        {/* Subject */}
        <motion.div variants={fadeUp} className="w-full flex flex-col mt-5">
          <p className="text-start text-xs font-light font-exo text-gray-600">
            {t("subject")}
          </p>
          <input
            type="text"
            className="w-full border text-sm md:text-base border-gray-300 font-exo rounded-[4px] p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1B42CE]"
            placeholder={t("subject")}
          />
        </motion.div>

        {/* Message */}
        <motion.div variants={fadeUp} className="w-full flex flex-col mt-5">
          <p className="text-start text-xs font-light font-exo text-gray-600">
            {t("message")}
          </p>
          <textarea
            className="w-full h-48 border text-sm md:text-base border-gray-300 font-exo rounded-[4px] p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1B42CE]"
            placeholder={t("message")}
            rows={5}
          ></textarea>
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={fadeUp} className="w-full flex justify-end mt-5">
          <button className="bg-[#1B42CE] text-white font-exo w-full md:w-80 h-11 rounded-[8px] hover:bg-[#1A5B8C] transition-colors">
            {t("sendmessage")}
          </button>
        </motion.div>
      </motion.div>

      {/* Location & Office Hours */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-13 mt-10"
      >
        {/* Location Info */}
        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          <div className="flex flex-row gap-2">
            <FaLocationDot className="w-5 h-5 md:w-6 md:h-6 text-[#1B42CE]" />
            <p className="w-full text-start text-sm lg:text-lg font-light font-exo text-gray-600">
              #136E, St. 209C Borey Vimean Phnom Penh, Sangkat Chraing Chamreh
              1, Khan Russeykeo, Phnom Penh, Cambodia.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <IoMail className="w-5 h-5 md:w-6 md:h-6 text-[#1B42CE]" />
            <p className="text-start text-sm md:text-lg font-light font-exo text-gray-600">
              infor@alpha-msh.com
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <FaPhone className="w-5 h-5 md:w-6 md:h-6 text-[#1B42CE]" />
            <p className="text-start text-sm md:text-lg font-light font-exo text-gray-600">
              +855 77 457 478 | +855 70 890 614
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <BsGlobe className="w-5 h-5 md:w-6 md:h-6 text-[#1B42CE]" />
            <p className="text-start text-sm md:text-lg font-light font-exo text-gray-600">
              www.alpha-msh.com
            </p>
          </div>
        </motion.div>

        {/* Office Hours */}
        <motion.div variants={fadeUp} className="w-full flex flex-col">
          <p className="text-start text-base md:text-lg font-light font-exo text-black border-b-3 border-b-[#1B42CE] w-fit pb-2.5 uppercase">
            {t("officehour")}
          </p>
          <div className="flex flex-row gap-2 md:gap-4 mt-4">
            <LuClock className="w-6 h-6 md:w-8 md:h-8 text-[#1B42CE]" />
            <div className="flex flex-col gap-1">
              <p className="text-start text-xs sm:text-sm md:text-base font-light font-exo text-black">
                {t("mon-fri")}
              </p>
              <p className="text-start text-xs sm:text-sm md:text-base font-light font-exo text-black">
                {t("sat")}
              </p>
              <p className="text-start text-xs sm:text-sm md:text-base font-light font-exo text-black">
                {t("sun")}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full mt-10 mb-10"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2631.0594209368583!2d104.87586691366513!3d11.627350610185772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM3JzM5LjQiTiAxMDTCsDUyJzM2LjkiRQ!5e0!3m2!1sen!2skh!4v1753006865091!5m2!1sen!2skh"
          loading="lazy"
          className="w-full h-96 object-cover"
        ></iframe>
      </motion.div>
    </div>
  );
}

export default Contact;
