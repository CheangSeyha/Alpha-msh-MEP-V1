"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function OfficeCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-center text-xl md:text-5xl font-exo font-bold ">
        Office Members
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Mong Lika",
    title: "Accounting",
    src: "/",
  },
  {
    category: "Seat Sela",
    title: "Material Purchaser",
    src: "/",
  },
  {
    category: "Chomreoun Dara",
    title: "Stock Management",
    src: "/",
  },
];
