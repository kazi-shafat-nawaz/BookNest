import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white text-gray-800 pt-10 px-4">
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column – Hotel Image */}
        <div>
          <img
            src="/images/hotel3.jpg"
            alt="Hotel"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4 text-gray-600">
            Welcome to <span className="font-semibold">BookNest</span>, a modern hotel booking platform that simplifies your travel experience. Our system is built to help you find and book the perfect stay with ease.
          </p>
          <p className="mb-4 text-gray-600">
            With a focus on design, speed, and user-friendliness, we ensure that both travelers and hotel owners benefit from a seamless digital booking process.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To create a simple, responsive, and effective hotel booking experience accessible to everyone, everywhere.
          </p>
        </div>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">Meet the Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 text-center mb-10 ">
          {/* Team Member 1 */}
          <div>
            <img
              src="/images/shafat.png"
              alt="Shafat"
              className="w-28 h-28 mx-auto rounded-full object-cover shadow-md"
            />
            <h4 className="mt-4 font-semibold">Kazi Shafat Nawaz</h4>
            <p className="text-sm text-gray-600">Frontend Developer</p>
          </div>

          {/* Team Member 2 */}
          <div>
            <img
              src="/images/rezwan.png"
              alt="Rezwan"
              className="w-28 h-28 mx-auto rounded-full object-cover shadow-md"
            />
            <h4 className="mt-4 font-semibold">Rezwan Ahmed</h4>
            <p className="text-sm text-gray-600">Frontend Developer</p>
          </div>



        </div>
      </div>
    </div>
  );
};

export default About;
