"use client";
import React from "react";
import CompletedCard from "@/components/Alpha/CompletedCard";
import Footer from "@/components/Alpha/Footer";
import NavBar from "@/components/Alpha/Navbar";

function page() {
  const cardsData = [
  { srcImage: '/AEONMALL SENSOK/Picture1.png', construFor: 'SATHAPANA BANK ', workOn: 'MEP WORK', location: 'AEON SENSOK MALL', start: 'N/A', end: 'N/A' },
  { srcImage: '/S&P THAI RESTAURANT somdachparn/bakery/Picture3.jpg', construFor: 'S & P THAI RESTAURANT AND BAKERY ', workOn: 'MEP WORK', location: ' SAMDACH PAN AVENUE', start: 'N/A', end: 'N/A' },
  { srcImage: '/Amazon Sorya/Picture3.png', construFor: 'AMAZON COFFEE', workOn: 'MEP WORKER', location: 'SORIYA Centre Point', start: 'N/A', end: 'N/A' },
  { srcImage: '/CAMBI SHOP/Picture1.jpg', construFor: 'COMBI SHOP', workOn: 'MEP WORK', location: 'HKL EXCHANGE SQUARE & AEON MALL', start: 'N/A', end: 'N/A' },
  { srcImage: '/CHIPMONG SUPERMARKET BAKTOUK/Picture1.jpg', construFor: 'CHIPMONG SUPERMARKET ', workOn: 'MEP WORK', location: 'BAKTOUK', start: 'N/A', end: 'N/A' },
  { srcImage: '/S&P THAI RESTAURANT edengarden/Picture3.jpg', construFor: 'S & P THAI RESTAURANT AND BAKERY ', workOn: 'MEP WORK', location: 'EDEN GARDEN', start: 'N/A', end: 'N/A' },
  { srcImage: '/S&P THAI RESTAURANT aeonmallsensok/Picture1.jpg', construFor: 'S & P THAI RESTAURANT AND BAKERY ', workOn: 'MEP WORKER', location: 'AEON SENSOK MALL', start: 'N/A', end: 'N/A' },
  { srcImage: '/Amazon Angdoung/Picture1.jpg', construFor: 'AMAZON COFFEE', workOn: 'MEP WORK', location: 'ANGDOUNG', start: 'N/A', end: 'N/A' },
  { srcImage: '/Starbuckcoffee eden/Picture1.jpg', construFor: 'STARBUCK COFFEE', workOn: 'MEP WORK', location: 'EDEN GARDEN', start: 'N/A', end: 'N/A' },
  { srcImage: '/Starbuckcoffee Aeonmallsensok/Picture1.jpg', construFor: 'STARBUCK COFFEE', workOn: 'MEP WORK', location: 'AEON SENSOK MALL', start: 'N/A', end: 'N/A' },
  { srcImage: '/CPS-CHAPS .jpg', construFor: 'CPS-CHAPS', workOn: 'MEP WORKER', location: 'AEON SENSOK MALL', start: 'N/A', end: 'N/A' },
  { srcImage: '/DAPPER/Picture3.jpg', construFor: 'HANG TEN', workOn: 'MEP WORK', location: 'AEON SENSOK MALL', start: 'N/A', end: 'N/A' },
  { srcImage: '/CHIPMONG SUPERMARKET NORO MALL/Picture4.jpg', construFor: 'STARBUCK COFFEE', workOn: 'MEP WORK', location: 'AEON SENSOK MALL', start: 'N/A', end: 'N/A' },
  { srcImage: '/FUNDERLAND NORO MALL/Picture4.jpg', construFor: 'FUNDERLAND', workOn: 'MEP WORKER', location: 'NORO MALL', start: 'N/A', end: 'N/A' },
  { srcImage: '/D&G VATTANAC CAPITAL/Picture1.png', construFor: 'DOLCE & GABBNA', workOn: 'MEP WORK', location: 'VATTANAC CAPITAL', start: 'N/A', end: 'N/A' },
  { srcImage: '/SHV HOTEL & APARTMENT/Picture2.jpg', construFor: 'SHV HOTEL & APARTMENT', workOn: 'MEP WORK', location: 'N/A', start: 'N/A', end: 'N/A' },
  { srcImage: '/DKHS WAREHOUSE SIEMREAB/Picture1.jpg', construFor: 'DKHS', workOn: 'MEP WORK', location: 'SIEM REAP', start: 'N/A', end: 'N/A' },
  { srcImage: '/SCG LOCATION PPSEZ/Picture1.jpg', construFor: 'SCG', workOn: 'MEP WORK', location: 'PPSEZ', start: 'N/A', end: 'N/A' },
  { srcImage: '/INSTALL FIRE FIGHTING SYSTEM/Picture1.png', construFor: 'INSTALL FIRE FIGHTING SYSTEM', workOn: 'MEP WORK', location: 'GREEN FIELDS', start: 'N/A', end: 'N/A' },
  // { srcImage: '/', construFor: '', workOn: 'MEP WORKER', location: '', start: 'N/A', end: 'N/A' },
 
];

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
            <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center font-poppins text-lg md:text-2xl lg:text-4xl font-bold text-black uppercase p-2 md:p-5">
              Completed Project
            </h1>
          </div>
        </section>

        <section className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-0 space-y-4">
            {cardsData.map((data, index) => (
        <CompletedCard firstCard={index !== 0} key={index} {...data}/>
              
      ))}
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default page;
