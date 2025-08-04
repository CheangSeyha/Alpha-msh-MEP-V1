import React from "react";

function Project() {
  return (
    <div className="max-w-screen py-12 mb-10">
      <div className="max-w-6xl mx-auto p-4 md:p-2 md:px-4.5 lg:p-2.5">
        <h2 className="text-4xl font-bold font-exo mb-6">Our Projects</h2>
        <p className="text-lg mb-8">
          Explore our diverse portfolio showcasing successful civil,
          architectural, and MEP projects across various sectors.
        </p>
        <div className="max-w-full flex flex-wrap gap-6">
          {/* Completed Project */}
          <div className="relative md:w-[500px] bg-cover bg-center font-exo overflow-hidden group">
            <img
              src="/completed.jpg"
              alt="Project"
              className="w-full object-cover rounded-xl shadow-md group-hover:scale-110 transition-transform duration-500 ease-in-out group-hover:brightness-75"
            />
            <div className="absolute bottom-0 left-0 transform">
              <div className="backdrop-blur-md bg-white/20 p-6 rounded-xl shadow-lg text-center">
                <a href="/Future" className="text-4xl font-bold text-black">
                  Completed
                </a>
                <p className="text-black text-center mt-2">
                  We build with precision and care.
                </p>
              </div>
            </div>
            <div className="absolute top-5 right-10 transform">
              <div className="backdrop-blur-md bg-white/20 px-6 py-2.5 rounded-full shadow-lg text-center">
                <a href="/Future" className="text-xl font-bold text-white hover:text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
                  See More
                </a>
              </div>
            </div>
          </div>
          {/* Future Project */}
          <div className="relative md:w-[500px] bg-cover bg-center font-exo overflow-hidden group">
            <img
              src="/Inprogress.jpg"
              alt="Project"
              className="w-full object-cover rounded-xl shadow-md group-hover:scale-110 transition-transform duration-500 ease-in-out group-hover:brightness-75"
            />
            <div className="absolute bottom-0 left-0 transform">
              <div className="backdrop-blur-md bg-white/20 p-6 rounded-xl shadow-lg text-center">
                <a href="/Future" className="text-4xl font-bold text-black">
                In Progress
                </a>
                <p className="text-black text-center mt-2">
                  We build with precision and care.
                </p>
              </div>
            </div>
            <div className="absolute top-5 right-10 transform">
              <div className="backdrop-blur-md bg-white/20 px-6 py-2.5 rounded-full shadow-lg text-center">
                <a href="/Future" className="text-xl font-bold text-white hover:text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="relative md:w-[500px] bg-cover bg-center font-exo overflow-hidden group">
            <img
              src="/futureproject.jpg"
              alt="Project"
              className="w-full object-cover rounded-xl shadow-md group-hover:scale-110 transition-transform duration-500 ease-in-out group-hover:brightness-75"
            />
            <div className="absolute bottom-0 left-0 transform">
              <div className="backdrop-blur-md bg-white/20 p-6 rounded-xl shadow-lg text-center">
                <a href="/Future" className="text-4xl font-bold text-black">
                  Future
                </a>
                <p className="text-black text-center mt-2">
                  We build with precision and care.
                </p>
              </div>
            </div>
            <div className="absolute top-5 right-10 transform">
              <div className="backdrop-blur-md bg-white/20 px-6 py-2.5 rounded-full shadow-lg text-center">
                <a href="/Future" className="text-xl font-bold text-white hover:text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
