import React from 'react'

function CompletedCard(props: { srcImage: any; construFor: any; workOn: any; location: any; start: any; end: any; firstCard: any;}) {
     const entries = Object.entries(props);

    return (
     <div className={`py-10 ${props.firstCard ? "border-t-4 border-[#2D7FBD]" : ""}`}>
        <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-6xl border">
            <div className="md:flex transition-all duration-500 ease-in-out">
                <div className="md:shrink-0  transition-all duration-500 ease-in-out">
                    <img
                        className="h-56 max-w-full aspect-[4/2] overflow-hidden object-cover md:h-56 md:max-[945px]:w-[320px] max-md:w-full transition-all duration-500 ease-in-out"
                        src={props.srcImage}
                        alt="Modern building architecture"
                    />
                </div>
            <div className="px-8 max-[530px]:px- py-4">
                <div className="text-base max-[900px]:text-sm font-poppins font-semibold tracking-wide text-indigo-500 uppercase transition-all duration-500 ease-in-out">Site Informations</div>
                    <p className="w-fit min-[1200px]:text-[1.3vw] min-[850px]:max-[1200px]:text-[2vw] text-lg font-poppins  border-b-2 border-blue-400 transition-all duration-500 ease-in-out">
                        {props.construFor}
                    </p>
                    <p className="mt-4 text-gray-500 text-xl">
                        Work On : {props.workOn}
                    </p>
                    <p className="mt-2 text-gray-500 text-xl">
                        Location : {props.location}
                    </p>
                    <p className="mt-2 flex max-md:flex-col text-gray-500 text-xl transition-all duration-500 ease-in-out">
                        Start On : {props.start}
                        <span className="ml-10 max-md:ml-0 max-md:mt-2 text-gray-500 text-xl">
                            End On : {props.end}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CompletedCard