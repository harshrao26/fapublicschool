import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="flex items-center md:space-x-4 space-x-3 p-2 bg-white z-50">
        {/* Phone */}
        <div className="flex items-center space-x-1">
          <FiPhone className="text-[#064E96]" />
          <span className="md:text-sm text-xs text-[#064E96]">
            +91-9936578800
          </span>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-1">
          <FiMail className="text-[#064E96]" />
          <span className="md:text-sm text-xs text-[#064E96]">
            fapsjaunpur@gmail.com
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center md:space-x-3 space-x-1">
          <a
            href="https://www.facebook.com/profile.php?id=61571933045797"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#064E96] hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/f.a_publicschool/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#064E96] hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="text-white shadow-sm z-50 bg-[#064E96]">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="text-2xl font-bold">
            <Link to="/">
              <img src={logo} alt="logo" className="w-20" />
            </Link>
          </div>
          <button
            className="md:hidden text-2xl focus:outline-none text-white"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul
            className={`md:flex md:items-center md:gap-6 absolute md:static top-24 left-0 w-full md:w-auto bg-[#064E96] md:bg-transparent transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li
              className="text-lg hover:text-gray-300 py-2 px-4 md:px-0"
              onClick={closeMenu}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="text-lg hover:text-gray-300 py-2 px-4 md:px-0"
              onClick={closeMenu}
            >
              <Link to="/about">About Us</Link>
            </li>
            <li
              className="text-lg hover:text-gray-300 py-2 px-4 md:px-0"
              onClick={closeMenu}
            >
              <Link to="/academics">Academics</Link>
            </li>
            <li
              className="text-lg hover:text-gray-300 py-2 px-4 md:px-0"
              onClick={closeMenu}
            >
              <Link to="/admission">Admission</Link>
            </li>
            <li
              className="text-lg hover:text-gray-300 py-2 px-4 md:px-0"
              onClick={closeMenu}
            >
              <Link to="/curriculum">Curriculum</Link>
            </li>
            <li
              className="text-lg hover:text-gray-300 py-2 px-4 md:px-0"
              onClick={closeMenu}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
