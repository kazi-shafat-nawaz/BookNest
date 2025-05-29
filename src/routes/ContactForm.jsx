import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";


const ContactForm = () => {

  const contactFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };

  const [formData, setFormData] = useState(contactFormData);
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleReset = () => {
    setFormData(contactFormData);
    setErrors({});
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    // validation part
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    console.log(Object.keys(newErrors).length);


    // if no errors, proceed to submit
    console.log("Submitted Data:", formData);
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    setFormData(contactFormData);
    alert("Form Submitted Successfully!");
    setErrors({});
  }




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
        <form onSubmit={handleSubmit}>
          <div className="bg-white flex flex-col md:flex-col p-5 space-y-7 rounded-xl border border-gray-200 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
            {/* Name Fields */}
            <div className="flex flex-col gap-1 text-slate-800">
              <label className="font-medium">Name <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    className={`w-full p-2 border rounded-lg transition focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 col-span-1
                      ${errors.firstName ? 'border-red-500' : 'border-gray-600'}`}
                    placeholder="First"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm ml-2 mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-600 rounded-lg transition focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 "
                    placeholder="Last"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm ml-2 mt-1">{errors.lastName}</p>}
                </div>
              </div>
            </div>

            {/* Email field */}
            <div className="flex flex-col gap-1 text-slate-800">
              <label className="font-medium">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                className={`w-full p-2 border rounded-lg transition focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200
                  ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="john@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm ml-2 mt-1">{errors.email}</p>}
            </div>

            {/* Phone field */}
            <div className="flex flex-col gap-1 text-slate-800">
              <label className="font-medium">Phone <span className="text-red-500">*</span></label>
              <input
                type="tel"
                className={`w-full p-2 border rounded-lg transition focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200
                  ${errors.phone ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="013********"
                maxLength={11}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-sm ml-2 mt-1">{errors.phone}</p>}
            </div>

            {/* Message field */}
            <div className="flex flex-col gap-1 text-slate-800">
              <label className="font-medium">Message</label>
              <textarea
                placeholder="Type your message here..."
                className="w-full h-28 p-2 border border-gray-600 rounded-lg transition focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-around items-center">
              <div>
                <button
                  type="button"
                  className="bg-blue-500 text-white rounded-lg hover:bg-blue-400 flex items-center justify-center px-4 py-2 font-semibold"
                  onClick={handleReset}
                >
                  Reset</button>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-yellow-400 text-slate-800 rounded-lg hover:bg-yellow-300 flex items-center justify-center px-4 py-2 font-semibold"
                >
                  Submit</button>
              </div>


            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
