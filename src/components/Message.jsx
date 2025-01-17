import React from "react";
import { FaQuoteLeft, FaUniversity } from "react-icons/fa";

const SchoolSection = () => {
  return (
    <div className="bg-ray-100 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="flex flex-col items-center md:w-1/3 p-4">
          <img
            src="https://via.placeholder.com/300x400"
            alt="MD of the school"
            className="w-48 h-64 object-cover rounded-lg mb-4"
          />
          {/* MD Name and Qualification */}
          <h2 className="text-xl font-bold text-gray-800 mt-2">Mr. John Doe</h2>
          <p className="text-gray-600 text-sm flex items-center mt-1">
            <FaUniversity className="text-yellow-500 mr-2" />
            M.Ed., Ph.D. in Educational Leadership
          </p>
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-6 md:p-10">
          {/* Message */}
          <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
            <FaQuoteLeft className="text-yellow-500 mr-2" /> Message from Our
            Managing Director
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            "Education is not the filling of a pail, but the lighting of a fire.
            At our school, we strive to ignite the passion for learning in every
            student, nurturing their potential to achieve greatness. Together,
            we build a community of lifelong learners and future leaders."
          </p>

          {/* Vision */}
          <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2">
            <FaUniversity className="text-yellow-500 mr-2" /> Our Vision
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our vision is to create an inspiring environment where students are
            empowered to reach their full potential, fostering innovation,
            empathy, and a global perspective.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolSection;
