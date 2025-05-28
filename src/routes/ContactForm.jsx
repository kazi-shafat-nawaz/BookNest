import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import OurMap from "../components/OurMap";

const ContactForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-8">

        {/* Contact Us part */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
          <h1 className="text-4xl font-bold mb-5 text-slate-800">Contact Us</h1>
          <p className="text-slate-800 mb-5 ">Have a question about your stay or booking? We are here to help you every step of the way.</p>
          <div className="flex flex-col gap-4 text-slate-800">
            <div className="flex flex-row gap-2">
              <FiPhone className="mt-1" size={20} />
              <p>+880-185-7364528</p>
            </div>
            <div className="flex flex-row gap-2">
              <FiMail className="mt-1" size={20} />
              <p>booknest@gmail.com</p>
            </div>
            <div className="flex flex-row gap-2">
              <FiMapPin className="mt-1" size={20} />
              <p>Mirpur 10, East Monipur</p>
            </div>
          </div>
        </div>

        {/*--------------------------------------------------------------------------------------------------*/}

        {/* Form */}
        <form >
          <div className="bg-white flex flex-col md:flex-col p-5 space-y-7 rounded-xl border border-gray-200 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
            {/* Name Fields */}
            <div className="flex flex-col gap-1 text-slate-800">
              <label className="font-medium">Name <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-600 rounded-lg transition focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 col-span-1"
                  placeholder="First"
                />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-600 rounded-lg transition focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 "
                  placeholder="Last"
                />
              </div>
            </div>

            {/* Email field */}
            <div className="flex flex-col gap-1 text-slate-800">
              <label className="font-medium">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                className="w-full p-2 border border-gray-600 rounded-lg transition focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                placeholder="john@gmail.com"
              />
            </div>

            {/* Phone field */}
            <div className="flex flex-col gap-1 text-slate-800">
              <label className="font-medium">Phone <span className="text-red-500">*</span></label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-600 rounded-lg transition focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                placeholder="013********"
                maxLength={11}
              />
            </div>

            {/* Message field */}
            <div className="flex flex-col gap-1 text-slate-800">
              <label className="font-medium">Message</label>
              <textarea
                placeholder="Type your message here..."
                className="w-full h-28 p-2 border border-gray-600 rounded-lg transition focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-yellow-400 text-slate-800 rounded-lg hover:bg-yellow-300 flex items-center justify-center px-4 py-2 font-semibold"
              >Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
