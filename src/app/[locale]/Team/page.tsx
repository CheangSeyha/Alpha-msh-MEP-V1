"use client";
import { MEPCarousel } from "@/components/Alpha/MEPCarousel";
import { CivilandArchitectureCarousel } from "@/components/Alpha/CivilandArchitectureCarousel";
import Footer from "@/components/Alpha/Footer";
import Navbar from "@/components/Alpha/Navbar";
import { useTranslations } from "next-intl";
import React from "react";
import { OfficeCarousel } from "@/components/Alpha/OfficeCarousel";
import ScrollToTop from "@/components/Alpha/ScrollToTop";
import ScrollProgressBar from "@/components/Alpha/ScollProgressBar";

function page() {
  const t = useTranslations("Team");
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-50">
        <Navbar />
      </header>
      <main className="flex flex-col mt-30 lg:mt-50">
        <section className="w-full mx-auto">
          <div className="relative w-full mx-auto">
            <img
              src="/cambodia.jpg"
              alt="cambodia"
              className="object-cover w-full h-[%50]"
            />
            <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center font-poppins text-sm md:text-2xl lg:text-4xl font-bold text-black uppercase p-2 md:p-5">
              {t("team")}
            </h1>
          </div>
        </section>

        <section className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-0">
          <MEPCarousel />
          <CivilandArchitectureCarousel />
          <OfficeCarousel />
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
