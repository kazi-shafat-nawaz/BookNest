import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-2 border-2 border-red-500">

        <div className=" bg-white rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-5">Contact Us</h1>
          <p className="text-gray-600 mb-5 ">Have a question about your stay or booking? We are here to help you every step of the way.</p>
          <div className="flex flex-col gap-4 text-gray-600">
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

        <form className="border-2 border-purple-500 rounded-xl shadow-lg">
          <h1>Form</h1>
        </form>

      </div>
    </>
  );
};

export default Contact;
