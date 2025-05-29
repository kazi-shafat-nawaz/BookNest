// import React, { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import SearchBar from "../components/SearchBar";


const destinations = [
  { title: "Paris", image: "/images/paris.jpg" },
  { title: "Bali", image: "/images/bali.webp" },
  { title: "Dubai", image: "/images/dubai.webp" }
];

const hotels = [
  {
    name: "The Royal Stay",
    location: "Paris, France",
    image: "/images/royal.jpg",
  },
  {
    name: "Beach Paradise",
    location: "Malibu, USA",
    image: "/images/beach.jpg",
  },
  {
    name: "Urban Escape",
    location: "Tokyo, Japan",
    image: "/images/urban.webp",
  },
];

const Home = () => {

  // const [searchData, setSearchData] = useState(null);

  // const handleSearch = (data) => {
  //   setSearchData(data); // { city, checkIn, checkOut, guests, rooms }
  // };
  return (
    <>
      <div className="relative">
        <HeroSlider />
        <SearchBar />

      </div>


      <div className="pt-20">
        {/* Top Destinations */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Top Destinations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-4 text-center text-lg font-semibold">
                  {dest.title}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Hotels */}
        <section className="bg-gray-100 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Hotels
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {hotels.map((hotel, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{hotel.name}</h3>
                  <p className="text-sm text-gray-600">{hotel.location}</p>
                  <button className="mt-3 bg-yellow-400 text-slate-800 rounded-lg hover:bg-yellow-300 flex items-center justify-center px-4 py-2">
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section >

        {/* Testimonials */}
        <section section className="bg-white py-12" >
          <h2 className="text-3xl font-bold text-center mb-6">
            What Our Guests Say
          </h2>
          <div className="max-w-4xl mx-auto px-4 text-center text-gray-700">
            <p className="text-lg">
              “Amazing experience! Booking was easy and the hotel exceeded
              expectations.”
            </p>
            <p className="mt-2 italic text-sm">– Sarah M., London</p>
          </div>
        </section >
      </div >
    </>
  );
};

export default Home;
