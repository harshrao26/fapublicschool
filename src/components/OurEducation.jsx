import React from "react";
import {
  FaChalkboardTeacher,
  FaDollarSign,
  FaClipboardList,
} from "react-icons/fa"; // You can import your desired icons

const OurEducation = () => {
  const details = [
    {
      icons: <FaChalkboardTeacher className="text-8xl text-blue-500" />,
      text: "Skilled Teachers",
      para: "Skilled and experienced teachers are the backbone of any school. We have a team of highly skilled and experienced teachers who are committed to providing quality education.",
    },
    {
      icons: <FaDollarSign className="text-8xl text-red-500" />,
      text: "Affordable Courses",
      para: "We provide quality education at affordable prices. We believe that education is the key to success and everyone should have access to quality education.",
    },
    {
      icons: <FaClipboardList className="text-8xl text-green-500" />,
      text: "Practical Education",
      para: "We believe that practical education is the key to success. We provide practical education to our students to make them ready for the real world.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12 px-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-center text-[#064E96]">
          Our Education Values
        </h2>
        <p className="text-base text-gray-600 max-w-xl mt-2 ">
          We are committed to providing the best education to our students
          through skilled teachers, affordable courses, and practical learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {details.map((val, key) => (
          <div
            key={key}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <div className="mb-4">{val.icons}</div>
            <p className="text-2xl font-semibold text--700">{val.text}</p>
            <p className="text-center text-gray-600 mt-2 font-normal">
              {val.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurEducation;
