import React from 'react'

function Project() {
  return (
    <div className='max-w-screen py-12'>
        <div className='max-w-6xl mx-auto p-4 md:p-2 md:px-4.5 lg:p-2.5'>
            <h2 className=' text-4xl font-bold font-exo mb-6'>Our Projects</h2>
            <p className=' text-lg mb-8'>
            Explore our diverse portfolio showcasing successful civil, architectural, and MEP projects across various sectors.
            </p> 
            <div className='max-w-full flex flex-wrap gap-6'>
                <div className="relative md:w-[500px] bg-cover bg-center font-exo overflow-hidden">
                    <img src="/completed.jpg" alt="Project" className="w-full object-cover rounded-lg shadow-md hover:scale-110 transition-transform duration-500 ease-in-out" />
                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="backdrop-blur-md bg-white/20 p-6 rounded-xl shadow-lg">
                            <a href="/Completed" className="text-4xl font-bold text-black text-center">Completed</a>
                            <p className="text-black text-center mt-2">We build with precision and care.</p>
                        </div>
                    </div>
                </div>
                <div className="relative md:w-[500px] bg-cover bg-center font-exo">
                    <img src="/Inprogress.jpg" alt="Project" className="w-full object-cover rounded-lg shadow-md" />
                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="backdrop-blur-md bg-white/20 p-6 rounded-xl shadow-lg">
                            <a href="/Inprogress" className="text-4xl font-bold text-black text-center">In Progress</a>
                            <p className="text-black text-center mt-2">We build with precision and care.</p>
                        </div>
                    </div>
                </div>
                <div className="relative md:w-[500px] bg-cover bg-center font-exo">
                    <img src="/futureproject.jpg" alt="Project" className="w-full object-cover rounded-xl shadow-md" />
                    <div className="absolute bottom-0 right-1/2">
                        <div className="backdrop-blur-md bg-white/20 p-6 rounded-xl shadow-lg text-center">
                            <a href="/Future" className="text-4xl font-bold text-black">Future</a>
                            <p className="text-black text-center mt-2">We build with precision and care.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project