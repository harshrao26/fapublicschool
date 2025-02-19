import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#064E96] text-white py-12 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-4xl font-extrabold text-white mb-4">
            F.A. PUBLIC SCHOOL
          </div>
          <p className="text-lg text-gray-200 mb-6 text-center md:text-left">
            The cornerstone in our pedagogical model is the progression for each
            student at the student’s own pace and according to the ambitions of
            the student.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61571933045797"
              className="text-gray-200 hover:text-blue-500"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/f.a_publicschool/"
              className="text-gray-200 hover:text-blue-500"
            >
              <FaInstagram size={20} />
            </a>
            {/* <a href="#" className="text-gray-200 hover:text-blue-500">
              <FaLinkedinIn size={20} />
            </a> */}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white">Quick Links</h3>
          <ul className="text-gray-200">
            <li>
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/academics" className="hover:text-blue-500">
                Academics
              </Link>
            </li>
            <li>
              <Link to="/admission" className="hover:text-blue-500">
                Admission
              </Link>
            </li>
            <li>
              <Link to="/curriculum" className="hover:text-blue-500">
                Curriculum
              </Link>
            </li>
            {/* <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Support Section */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white">Support</h3>
          <ul className="text-gray-200">
            {/* <li>
              <Link to="/hostel" className="hover:text-blue-500">
                Hostel Facilities
              </Link>
            </li> */}
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact Us
              </Link>
            </li>
            {/* <li>
              <Link to="/disclosures" className="hover:text-blue-500">
                Mandatory Public Disclosures
              </Link>
            </li> */}
            {/* <li>
              <Link to="/cbse-curriculum" className="hover:text-blue-500">
                CBSE Curriculum
              </Link>
            </li> */}
          </ul>
        </div>
        {/* Support Section */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white">Location</h3>
          <p>Mohammad Hasan Market, Firoshepur, Jaunpur UP - 222001</p>
          <p>Phone: +91-9936578800</p>
        </div>
      </div>

      {/* School Hours & Copyright */}
      <div className="text-center mt-6 text-gray-200">
        <p className="text-lg">School Hours: 8 AM - 3 PM, Monday - Saturday</p>
        {/* <p className="text-sm">
          Co-Ed school affiliated to Central Board of Secondary Education
          (CBSE), managed by Vision Educational And Technical Trust.
        </p> */}
        <p className="text-xs mt-4">
          © 2025 FA Public School. All rights reserved.
        </p>
        <p className="text-xs mt-4">
          Created be the Developers of{" "}
          <a href="https://www.advertfuros.com/" className="underline">
            Advert Furos
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
