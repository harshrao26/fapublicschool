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
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Social Media Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-gray-300 text-2xl"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-2xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-2xl"
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
                  className="text-white hover:text-gray-300 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-white hover:text-gray-300 transition"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-white hover:text-gray-300 transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-gray-300 transition"
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
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
