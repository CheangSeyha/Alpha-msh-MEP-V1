import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const partners = [
  { name: "Aba", logo: "/Slide/ABA-Logo.webp" },
  { name: "BD_logo", logo: "/Slide/bd-logo.png" },
  { name: "Chipmong", logo: "/Slide/Chipmong-logo.png" },
  { name: "Woori Bank", logo: "/Slide/wooriBank.png" },
];

export default function PartnershipSlider() {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        speed={5000} // Control speed (higher = slower)
        autoplay={{
          delay: 0, // No delay, continuous movement
          disableOnInteraction: false,
        }}
        grabCursor={false}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {partners.concat(partners).map((partner, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={300}
              height={300}
              className="w-60 h-60 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
