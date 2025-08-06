"use client";
import React from "react";
import Footer from "@/components/Alpha/Footer";
import NavBar from "@/components/Alpha/Navbar";

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
              In progress projects
            </h1>
          </div>
        </section>
        <section className="flex justify-center items-center text-lg ">
          In the In progress projects page, we will showcase the projects that
          are currently under construction or development. This section will
          highlight the ongoing efforts and progress of our team in various
          projects.
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default page;
