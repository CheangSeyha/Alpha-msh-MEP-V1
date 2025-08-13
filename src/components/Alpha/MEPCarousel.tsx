"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function MEPCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-center text-xl md:text-5xl font-bold font-exo">
        MEP Members
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Sun Muyeng",
    title: "MEP Design",
    src: "/",
  },
  {
    category: "Tan Chankanha",
    title: "MEP Design",
    src: "/",
  },
  {
    category: "Chhum Daly",
    title: "MEP Design",
    src: "/",
  },

  {
    category: "Kem Prachnha",
    title: "Senior MEP Design",
    src: "/",
  },
  {
    category: "Kheng Phanchhet",
    title: "MEP Design",
    src: "/",
  },
  {
    category: "Chan Sachak",
    title: "MEP Design",
    src: "/",
  },
  {
    category: "Sary Vireak",
    title: "MEP Design",
    src: "/",
  },
];
