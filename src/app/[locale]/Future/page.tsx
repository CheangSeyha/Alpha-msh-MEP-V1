"use client";
import Footer from "@/components/Alpha/Footer";
import NavBar from "@/components/Alpha/Navbar";
import ScrollProgressBar from "@/components/Alpha/ScollProgressBar";
import ScrollToTop from "@/components/Alpha/ScrollToTop";
import { Scroll } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-50">
        <NavBar />
      </header>
      <main className="flex flex-col mt-50">
        <section className="w-full mx-auto">
          <div className="relative w-full mx-auto">
            <img
              src="/cambodia.jpg"
              alt="cambodia"
              className="object-cover w-full h-[%50]"
            />
            <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center font-exo text-lg md:text-2xl lg:text-4xl font-bold text-black uppercase p-2 md:p-5">
              future projects
            </h1>
          </div>
        </section>

        <section className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-0">
          <img src="/future.jpg" alt="future" />
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
