"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function CivilandArchitectureCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <h2 className="max-w-7xl pl-4 mx-auto text-center text-xl md:text-5xl font-bold font-exo">
        Civil & Architecture Members
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Leangey Chhorn",
    title: "Architecture Design",
    src: "/",
  },
  {
    category: "",
    title: "",
    src: "/",
  },
  {
    category: "",
    title: "",
    src: "/",
  },
  {
    category: "",
    title: "",
    src: "/",
  },
  {
    category: "",
    title: "",
    src: "/",
  },
  {
    category: "",
    title: "",
    src: "/",
  },
  {
    category: "",
    title: "",
    src: "/",
  },
  {
    category: "",
    title: "",
    src: "/",
  },
];
