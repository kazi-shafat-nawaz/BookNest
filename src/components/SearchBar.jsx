
import React, { useState } from "react";
import { FaSearch, FaCalendarAlt, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
const SearchBar = () => {

const [destination, setDestination] = useState("");
const [checkIn, setCheckIn] = useState("");
const [checkOut, setCheckOut] = useState("");
const [guests, setGuests] = useState("");
const [rooms, setRooms] = useState("");


const handleSearch = () => {
    console.log("Searching for:", {
      destination,
      checkIn,
      checkOut,
      guests,
      rooms,
    });

    <Link to = "/about">
    </Link>


    // You can navigate or call API here
  };


    return (
        <div className="bg-white shadow-lg rounded-xl p-4 max-w-6xl  mx-auto -mt-40 z-10 relative ">
      <div className="flex flex-col md:flex-row items-stretch gap-4">
        {/* Destination */}
        <div className="flex items-center border rounded-lg px-3 py-2 flex-1">
          <FaSearch className="text-gray-500 mr-2" />
          <div className="flex flex-col w-full">
            <span className="text-xs text-gray-500">Location</span>
            <input
              type="text"
              placeholder="Where to?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* Check-in */}
        <div className="flex items-center border rounded-lg px-3 py-2">
          <FaCalendarAlt className="text-gray-500 mr-2" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Check in</span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="outline-none text-sm"
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="flex items-center border rounded-lg px-3 py-2">
          <FaCalendarAlt className="text-gray-500 mr-2" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Check out</span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="outline-none text-sm"
            />
          </div>
        </div>

        {/* Guests and Rooms */}
        <div className="flex items-center border rounded-lg px-3 py-2">
          <FaUserFriends className="text-gray-500 mr-2" />
          <div className="flex flex-col text-sm">
            <span className="text-xs text-gray-500">Guests and rooms</span>
            <div className="flex gap-2">
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min={1}
                className="w-12 border rounded px-1 text-center"
              />
              <span>Guests,</span>
              <input
                type="number"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                min={1}
                className="w-12 border rounded px-1 text-center"
              />
              <span>Room</span>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-yellow-400 text-black font-semibold rounded-lg px-6 py-2 hover:bg-yellow-300 self-center"
        >
          Search
        </button>
      </div>
    </div>
    );
};

export default SearchBar;