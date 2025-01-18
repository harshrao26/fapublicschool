import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed w-full z-50">
      <div className="flex   items-center md:space-x-4 space-x-3 p-2 bg-[#064E96] z-50">
        {/* Phone */}
        <div className="flex items-center space-x-1">
          <FiPhone className="text-gray-600" />
          <span className="md:text-sm text-xs text-white">
            +91-8707747148
          </span>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-1">
          <FiMail className="text-white" />
          <span className="md:text-sm text-xs text-white">
            fapsjaunpur@gmail.com
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center md:space-x-3 space-x-1">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <nav className=" text-[#064E96] shadow-sm z-50 bg-white">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="text-2xl font-bold">
            {" "}
            <Link to="/">
              <img src={logo} alt="logo" className="w-20" />
            </Link>
          </div>
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul
            className={`md:flex md:items-center md:gap-6 absolute md:static top-24 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li className="text-lg hover:text-gray-300 py-2 px-4 md:px-0">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lg hover:text-gray-300 py-2 px-4 md:px-0">
              <Link to="/about">About Us</Link>
            </li>
            <li className="text-lg hover:text-gray-300 py-2 px-4 md:px-0">
              <Link to="/academics">Academics</Link>
            </li>

            <li className="text-lg hover:text-gray-300 py-2 px-4 md:px-0">
              <Link to="/admission">Admission</Link>
            </li>
            <li className="text-lg hover:text-gray-300 py-2 px-4 md:px-0">
              <Link to="/curriculum">Curriculum</Link>
            </li>
            <li className="text-lg hover:text-gray-300 py-2 px-4 md:px-0">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="text-lg hover:text-gray-300 py-2 px-4 md:px-0">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
