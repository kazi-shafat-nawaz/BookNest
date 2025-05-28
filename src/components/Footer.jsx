import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import OurMap from "./OurMap";


const Footer = () => {
    return (
        <>
            <footer className='bg-gray-800 text-gray-100 pt-2 '>
                <div className='mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center '>
                    {/* div 1: Logo and Moto */}
                    <div >
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
                        <ul className="text-gray-400 text-sm flex flex-col gap-2 p-5">
                            <li className="hover:text-white hover:underline"><Link to="/">Home</Link></li>
                            <li className="hover:text-white hover:underline"><Link to="/hotels">Hotels</Link></li>
                            <li className="hover:text-white hover:underline"><Link to="/services">Services</Link></li>
                            <li className="hover:text-white hover:underline"><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>

                    {/* div 3: Resources*/}
                    <div className='flex flex-col gap-2'>
                        <ul className="text-gray-400 text-sm flex flex-col gap-2 p-5">
                            <li className="hover:text-white hover:underline"><Link to="/faq">FAQ</Link></li>
                            <li className="hover:text-white hover:underline"><Link to="/contact">Contact Us</Link></li>
                            <li className="hover:text-white hover:underline"><Link to="/privacy">Privacy Policy</Link></li>
                            <li className="hover:text-white hover:underline"><Link to="/t&c">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* div 4: Follow Us */}
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <div className="flex flex-row justify-center items-center space-x-4 w-40 gap-1">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="hover:text-blue-500 transition-colors"
                            >
                                <FaFacebookF size={22} />
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="hover:text-pink-500 transition-colors"
                            >
                                <FaInstagram size={22} />
                            </a>
                            <a
                                href="https://x.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="hover:text-gray-400 transition-colors"
                            >
                                <FaXTwitter size={22} />
                            </a>
                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="hover:text-red-500 transition-colors"
                            >
                                <FaYoutube size={22} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* div 5: Find Us with map */}
                <OurMap />

                {/* div 6: rights and reserved */}
                <div className="flex justify-center pb-4">
                    <p className="text-gray-300 text-xs">© 2025 BookNest. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;