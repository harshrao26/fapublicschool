import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-[#FACC15] to-[#ffcc00] text-black py-10 px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Social Media Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black hover:text-gray-800 text-2xl"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-800 text-2xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-800 text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-800 text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-800 text-2xl"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Internal Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-black hover:text-gray-800 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-black hover:text-gray-800 transition"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-black hover:text-gray-800 transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-black hover:text-gray-800 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* School Pictures */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our School</h3>
            <div className="grid grid-cols-3 gap-2">
              <img
                src="https://via.placeholder.com/100"
                alt="School Pic 1"
                className="rounded-md"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="School Pic 2"
                className="rounded-md"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="School Pic 3"
                className="rounded-md"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="School Pic 4"
                className="rounded-md"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="School Pic 5"
                className="rounded-md"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="School Pic 6"
                className="rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} F.A. Public School. All rights
            reserved.
          </p>
          <p className="text-sm hover:scale-110 transition-all ease-out ">
            Created by the Developers of <a href="" className="underline">Advert Furos</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
