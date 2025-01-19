import React from "react";
import {
  FaChalkboardTeacher,
  FaLaptop,
  FaBook,
  FaFutbol,
  FaShieldAlt,
  FaBus,
} from "react-icons/fa";
import classs from "../assets/class.jpg";
import computer from "../assets/computer.jpg";
import lib from "../assets/lib.jpg";
import play from "../assets/play.jpg";
import security from "../assets/security.jpg";
import trans from "../assets/trans.jpeg";

const facilities = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Class Rooms",
    detail:
      "Equipped with smart boards and modern seating arrangements for an enhanced learning experience.",
    image: classs,
  },
  {
    icon: <FaLaptop />,
    title: "Computer Lab",
    detail:
      "State-of-the-art computer lab with high-speed internet and the latest systems for practical learning.",
    image: computer,
  },
  {
    icon: <FaBook />,
    title: "Library",
    detail:
      "A spacious library with a vast collection of books, journals, and digital resources to support academic excellence.",
    image: lib,
  },
  {
    icon: <FaFutbol />,
    title: "Play Area",
    detail:
      "Large play areas with facilities for football, cricket, and other outdoor activities to ensure physical fitness.",
    image: play,
  },
  {
    icon: <FaShieldAlt />,
    title: "Safety & Security",
    detail:
      "24x7 security with CCTV surveillance and trained personnel ensuring a safe campus for students and staff.",
    image: security,
  },
  {
    icon: <FaBus />,
    title: "Transport",
    detail:
      "Fleet of GPS-enabled buses and vans for safe and efficient transportation of students and staff.",
    image: trans,
  },
];

const CampusFacilities = () => {
  return (
    <div className="bg--100 py-12 px-6 lg:px-20">
      <h1 className="text-4xl font-bold text-center text-[#064E96] mb-4 ">
        Campus Facilities
      </h1>
      <p className="text-base text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Our campus is designed to provide the best infrastructure and facilities
        to support the holistic development of our students. Explore the
        state-of-the-art amenities that make our institution a center of
        excellence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={facility.image}
              alt={facility.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-[#064E96] text-5xl mb-4 flex justify-center">
                {facility.icon}
              </div>
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
                {facility.title}
              </h2>
              <p className="text-gray-600 text-center text-sm">
                {facility.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusFacilities;
