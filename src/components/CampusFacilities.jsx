import React from "react";
import {
  FaChalkboardTeacher,
  FaLaptop,
  FaFlask,
  FaBook,
  FaFutbol,
  FaShieldAlt,
  FaBus,
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Class Rooms",
    detail:
      "Equipped with smart boards and modern seating arrangements for an enhanced learning experience.",
    image: "https://via.placeholder.com/600x400?text=Class+Rooms",
  },
  {
    icon: <FaLaptop />,
    title: "Computer Lab",
    detail:
      "State-of-the-art computer lab with high-speed internet and the latest systems for practical learning.",
    image: "https://via.placeholder.com/600x400?text=Computer+Lab",
  },
  {
    icon: <FaBook />,
    title: "Library",
    detail:
      "A spacious library with a vast collection of books, journals, and digital resources to support academic excellence.",
    image: "https://via.placeholder.com/600x400?text=Library",
  },
  {
    icon: <FaFutbol />,
    title: "Play Area",
    detail:
      "Large play areas with facilities for football, cricket, and other outdoor activities to ensure physical fitness.",
    image: "https://via.placeholder.com/600x400?text=Play+Area",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safety & Security",
    detail:
      "24x7 security with CCTV surveillance and trained personnel ensuring a safe campus for students and staff.",
    image: "https://via.placeholder.com/600x400?text=Safety",
  },
  {
    icon: <FaBus />,
    title: "Transport",
    detail:
      "Fleet of GPS-enabled buses and vans for safe and efficient transportation of students and staff.",
    image: "https://via.placeholder.com/600x400?text=Transport",
  },
];

const CampusFacilities = () => {
  return (
    <div className="bg--100 py-12 px-6 lg:px-20">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-12">
        Campus Facilities
      </h1>
      <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
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
              <div className="text-green-700 text-5xl mb-4 flex justify-center">
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
