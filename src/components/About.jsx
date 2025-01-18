import React from "react";
import { FaSchool, FaUserGraduate, FaLaptop, FaGamepad } from "react-icons/fa";
import { MdOutlineLibraryBooks, MdEmail, MdPhone } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="bg-gray-5 pt-10 md:pt-32 p-6 md:p-10">
      <h1 className="text-center text-3xl font-bold text-[#064E96] mb-8">
        About F.A. Public School
      </h1>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#064E96] mb-4 flex items-center">
          <FaSchool className="mr-2" /> School Overview
        </h2>
        <p className="text-gray-700 leading-relaxed">
          F.A. Public School, located in Mohammad Hasan Market, Firoshepur,
          Jaunpur, offers education from Nursery to Class 5th and is on the path
          to becoming a Junior High School soon. It follows the CBSE pattern
          integrated with NEP 2020, delivering a UK-based education concept and
          focusing on technology-driven smart classes.
        </p>
      </section>

      {/* Teaching and Facilities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#064E96] mb-4 flex items-center">
          <FaLaptop className="mr-2" /> Technology-Based Teaching
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li>Smart classes equipped with advanced technology.</li>
          <li>
            Regular homework and test/exam marks shared via SMS to parents.
          </li>
          <li>Focus on overall personality development of students.</li>
        </ul>
      </section>

      {/* Library Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#064E96] mb-4 flex items-center">
          <MdOutlineLibraryBooks className="mr-2" /> Library Facilities
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our library is well-stocked with a wide range of books and includes a
          dedicated study room to provide a peaceful learning environment for
          students.
        </p>
      </section>

      {/* Games and Activities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#064E96] mb-4 flex items-center">
          <FaGamepad className="mr-2" /> Indoor & Outdoor Games
        </h2>
        <p className="text-gray-700 leading-relaxed">
          F.A. Public School offers a variety of indoor and outdoor games, along
          with proper kits and facilities to encourage physical fitness and
          sportsmanship among students.
        </p>
      </section>

      {/* Admission Details */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#064E96] mb-4 flex items-center">
          <FaUserGraduate className="mr-2" /> Admission Details
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Admission fees: <span className="font-bold">Rs. 00</span>
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#064E96] mb-4 flex items-center">
          <MdPhone className="mr-2" /> Contact Information
        </h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          <span className="font-semibold">Manager/Director:</span> Dr. M. Sajid
          Sherwani ‘Alig’, Ph.D
        </p>
        <p className="text-gray-700 flex items-center">
          <MdEmail className="mr-2 text-[#064E96]" /> Email:
          fapsjaunpur@gmail.com
        </p>
        <p className="text-gray-700 flex items-center">
          <MdPhone className="mr-2 text-green-500" /> Contact: 870774714
        </p>
      </section>

     
    </div>
  );
};

export default AboutUs;
