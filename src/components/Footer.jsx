import { Link } from "react-router-dom";
import logo from "../assets/logo.png"


const Footer = () => {
    return (
        <>
            <footer className='bg-gray-900 text-gray-100 pt-2'>
                <div className='mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                    {/* div 1: Logo and Moto */}
                    <div>
                        <div className="flex items-center gap-2 justify-center mt-7">
                            <img src={logo} alt="Hotel Logo" className="h-10 w-auto" />
                            <span className="text-1xl italic font-semibold">Book<span className="text-yellow-400">Nest</span></span>
                        </div>

                        <div className="text-sm items-center mt-2 text-gray-400">
                            <h4>Stay Anywhere, Book Here</h4>
                        </div>
                    </div>



                    {/* div 2: Quick Links */}
                    <div className='flex flex-col gap-2'>
                        <h4 className="text-lg font-bold text-gray-300">Quick Links</h4>
                        <ul className="text-gray-400 text-sm flex flex-col gap-2">
                            <li className="hover:text-white hover:underline"><Link to="/">Home</Link></li>
                            <li className="hover:text-white hover:underline"><Link to="/hotels">Hotels</Link></li>
                            <li className="hover:text-white hover:underline"><Link to="/services">Services</Link></li>
                            <li className="hover:text-white hover:underline"><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>

                    {/* div 3: Resources*/}
                    <div className='flex flex-col gap-2'>
                        <h4 className="text-lg font-bold text-gray-300">Resources</h4>
                        <ul className="text-gray-400 text-sm flex flex-col gap-2">
                            <li className="hover:text-white hover:underline"><Link to="/faq">FAQ</Link></li>
                            <li className="hover:text-white hover:underline"><Link to="/contact">Contact Us</Link></li>
                            <li className="hover:text-white hover:underline"><Link to="/privacy">Privacy Policy</Link></li>
                            <li className="hover:text-white hover:underline"><Link to="/t&c">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
                <br />
                {/* div 4: Find Us with map */}
                <div className='flex flex-col justify-center items-center h-96'>
                    <div className="h-full w-full flex justify-center p-4">
                        <iframe
                            title="our location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.437474988804!2d90.36752857457975!3d23.803037786754913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1fa13c3521d%3A0x7e9113ef0f1fe673!2sXEON%20TECHNOLOGY%20LIMITED!5e0!3m2!1sen!2sbd!4v1748157025293!5m2!1sen!2sbd"
                            width="85%"
                            height="100%"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            className="rounded-2xl"
                        ></iframe>
                    </div>
                </div>
                <div className="flex justify-center pb-4">
                    <p className="text-gray-300 text-xs">© 2025 BookNest. All rights reserved.</p>
                </div>
            </footer>


        </>
    );
};

export default Footer;