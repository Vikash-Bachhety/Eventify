"use client";

import React from "react";
import Slogan from "./components/Slogan.jsx";
import EventSection from "./components/EventSection.jsx";
import { useRouter } from "next/navigation.js";
import Events from "./(pages)/events/page.jsx";

export default function Home() {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push("/events")
  }

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-cover bg-right" style={{ backgroundImage: 'url(/bg1.jpg)' }}>

        {/* Background Video */}
        {/* <iframe
          className="top-0 left-0 w-full h-full object-contain -z-10 absolute"
          src="https://www.youtube.com/embed/MuTh3_TkAHw?autoplay=1&loop=1&mute=1&playlist=MuTh3_TkAHw"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe> */}


        {/* Overlay Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white">
            Experience the Best Live Music Events
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl">
            Discover, explore, and book your favorite music performances in one place.
          </p>
          <div className="mt-8 flex space-x-4">
            <button onClick={handleExploreClick} className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 animate-bounce rounded-lg font-semibold shadow-lg transition">
              Explore Events
            </button>
          </div>
        </div>
      </div>
      <Events />
      <Slogan />
      <EventSection />
    </>
  );
}
