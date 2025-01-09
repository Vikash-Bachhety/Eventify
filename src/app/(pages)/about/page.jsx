"use client";

import React from "react";
import { FaBullhorn, FaGlobeAmericas, FaHandsHelping, FaUsers, FaEnvelope } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden -z-10">

      {/* Content */}
      <div className="relative w-full z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left mt-20 px-6 md:px-12 py-10 text-white space-y-10 md:space-x-10">

        {/* Mission Section */}
        <div className="max-w-3xl py-10 bg-black/20  rounded-bl-3xl rounded-tr-3xl px-6 border-2 border-white animate-pulse lg:w-1/2">
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
            <FaBullhorn className="text-4xl text-indigo-100" />
            <h2 className="text-3xl md:text-4xl font-semibold">Our Mission</h2>
          </div>
          <p className="mt-4 text-base md:text-lg">
            Our mission is to connect audiences with the best live experiences and empower artists to share their talents with the world. We strive to make every event a moment to remember. We believe that live events have the unique power to bring people together, foster creativity, and inspire change.
          </p>
          <p className="mt-4 text-base md:text-sm">
            We are dedicated to providing a platform that not only allows people to discover exciting events but also supports artists and organizers by offering them the tools and resources they need to succeed. By facilitating connections and collaborations, we aim to create a thriving ecosystem where the arts and entertainment industries can flourish.
          </p>
          <p className="mt-4 text-base md:text-lg">
            Our team works tirelessly to ensure that every event listed on our platform is curated with care and attention to detail. We partner with a wide range of event organizers to ensure diversity in the experiences we offer, from music and performing arts to food festivals and cultural events.
          </p>
        </div>

        {/* Vision Section */}
        <div className="max-w-3xl py-10 bg-black/20  rounded-bl-3xl rounded-tr-3xl px-6 border-2 border-white animate-pulse lg:w-1/2">
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
            <FaGlobeAmericas className="text-4xl text-indigo-100" /> {/* React Icon for Vision */}
            <h2 className="text-3xl md:text-4xl font-semibold">Our Vision</h2>
          </div>
          <p className="mt-4 text-base md:text-lg">
            To be the leading platform for discovering, organizing, and enjoying events globally. We envision a future where everyone has access to extraordinary live experiences, regardless of their location or background. Our vision is to create a world where people can connect with others through shared interests, discover new talents, and be inspired by the power of live events.
          </p>
          <p className="mt-4 text-base md:text-sm">
            As we look to the future, we are focused on expanding our reach globally. We aim to become the go-to platform for event discovery, offering personalized recommendations based on your preferences and interests. Whether you’re looking for the hottest new concert, a life-changing seminar, or a unique theater production, Eventify will be there to guide you.
          </p>
          <p className="mt-4 text-base md:text-sm">
            By embracing technology, innovation, and creativity, we are working to make live experiences more accessible, enjoyable, and impactful. We believe that the future of live events is about creating connections that go beyond the physical space, integrating virtual and hybrid experiences that allow anyone, anywhere, to be part of something special.
          </p>
          <p className="mt-4 text-base md:text-lg">
            Ultimately, our vision is to build a community where everyone, from artists to fans, can come together and celebrate the power of live events, sharing moments that last a lifetime. We are committed to fostering a culture of inclusivity, creativity, and passion in everything we do.
          </p>
        </div>
      </div>

      {/* Additional Sections */}

      <div className="relative w-full z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left mt-20 px-6 md:px-12 py-10 text-white space-y-10 md:space-x-10">

        {/* Values Section */}
        <div className="max-w-3xl py-10 bg-black/20  rounded-bl-3xl rounded-tr-3xl px-6 border-2 border-white animate-pulse lg:w-1/2">
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
            <FaHandsHelping className="text-4xl text-indigo-100" /> {/* React Icon for Values */}
            <h2 className="text-3xl md:text-4xl font-semibold">Our Values</h2>
          </div>
          <p className="mt-4 text-base md:text-lg">
            We believe in integrity, creativity, and inclusivity. These core values guide our efforts in every project we undertake, ensuring that we not only meet the expectations of our audience and partners but also exceed them. Our commitment to diversity, respect, and accountability allows us to build long-lasting relationships with both clients and artists.
          </p>
          <p className="mt-4 text-base md:text-sm">
            Innovation is at the heart of everything we do, and we continuously strive to push the boundaries of what’s possible. We remain dedicated to helping our users discover new experiences while supporting artists and organizers with the tools they need to bring their visions to life.
          </p>
        </div>

        {/* Team Section */}
        <div className="max-w-3xl py-10 bg-black/20 rounded-bl-3xl rounded-tr-3xl px-6 border-2 border-white animate-pulse lg:w-1/2">
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
            <FaUsers className="text-4xl text-indigo-100" /> {/* React Icon for Team */}
            <h2 className="text-3xl md:text-4xl font-semibold">Our Team</h2>
          </div>
          <p className="mt-4 text-base md:text-lg">
            Our team is made up of passionate individuals who share a common goal of bringing people together through unforgettable live experiences. From our dedicated event curators to our customer support team, each member plays a critical role in ensuring that our platform continues to thrive.
          </p>
          <p className="mt-4 text-base md:text-sm">
            We value teamwork, transparency, and open communication, allowing us to collaborate effectively and deliver exceptional service. Our team’s diverse talents and perspectives are the foundation of our success, and we are constantly looking for new ways to innovate and improve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
