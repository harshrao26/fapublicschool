import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed w-full z-50">
      <div className="flex  items-center space-x-4 p-2 bg-yellow-400 z-50">
        {/* Phone */}
        <div className="flex items-center space-x-1">
          <FiPhone className="text-gray-600" />
          <span className="text-sm text-gray-800">+91-8707747148</span>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-1">
          <FiMail className="text-gray-600" />
          <span className="text-sm text-gray-800">fapsjaunpur@gmail.com</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <nav className=" text-yellow-500 shadow-sm z-50 bg-white">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="text-2xl font-bold">
            {" "}
            <Link to="/">School Name</Link>
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
