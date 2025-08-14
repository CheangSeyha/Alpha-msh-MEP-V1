"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  visibleCount?: number;
  year?: number;
  project?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  visibleCount = 2,
  year = 2025,
  project = "Default Project Name"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, images.length - visibleCount)
    );
  };

  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full border-b-2 border-gray-300">
      {/* Left Info + Buttons */}
      <div className="w-full md:w-1/3 flex flex-col p-5">
        <div className="flex flex-col items-end p-5">
          <p>{year}</p>
          <h1 className="text-2xl md:text-3xl font-bold font-poppins">{project}</h1>
        </div>
        <div className="flex justify-end items-center p-5 space-x-4">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`px-5 py-3 rounded-full transition hover:scale-110 ${
              currentIndex === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black/40 text-white hover:bg-black/70"
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          {/* Right Button */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= images.length - visibleCount}
            className={`px-5 py-3 rounded-full transition hover:scale-110 ${
              currentIndex >= images.length - visibleCount
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black/40 text-white hover:bg-black/70"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Images */}
      <div className="w-full md:w-2/3 flex justify-center gap-4 p-5 rounded-lg overflow-hidden">
        {visibleImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slider-${index}`}
            className="object-cover rounded-lg z-50 shadow-lg hover:scale-105 transition duration-500 ease-out
                       w-1/2 md:w-[45%] lg:w-[40%] 
                       h-48 sm:h-60 md:h-72 lg:h-96"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
