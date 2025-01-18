import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#064E96] text-white py-12 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-4xl font-extrabold text-white mb-4">
            FA PUBLIC SCHOOL
          </div>
          <p className="text-lg text-gray-200 mb-6 text-center md:text-left">
            The cornerstone in our pedagogical model is the progression for each
            student at the student’s own pace and according to the ambitions of
            the student.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-200 hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-200 hover:text-blue-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-200 hover:text-blue-500">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white">Quick Links</h3>
          <ul className="text-gray-200">
            <li>
              <a href="#" className="hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                TC Search
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white">Support</h3>
          <ul className="text-gray-200">
            <li>
              <a href="#" className="hover:text-blue-500">
                Hostel Facilities
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Mandatory Public Disclosures
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                CBSE Curriculum
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Admission Banner */}
      {/* <div className="bg-yellow-500 text-blue-900 py-3 text-center font-semibold">
        <span>Admission Open!</span>
      </div> */}

      {/* School Hours & Copyright */}
      <div className="text-center mt-6 text-gray-200">
        <p className="text-lg">School Hours: 8 AM - 3 PM, Monday - Saturday</p>
        <p className="text-sm">
          Co-Ed school affiliated to Central Board of Secondary Education
          (CBSE), managed by Vision Educational And Technical Trust.
        </p>
        <p className="text-xs mt-4">
          © 2025 FA Public School. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
