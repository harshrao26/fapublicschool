import React, { useEffect } from "react";
import {
  FaBook,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";
import classroom from '../assets/classroom.jpg'
import lib from '../assets/lib.jpg'
import lab from '../assets/lab.png'
const Academics = () => {
  useEffect(() => {
    // Ensure scrolling to the top of the document when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use "auto" for instant scroll
    });

    // As a fallback, scroll the root element
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className=" py-12 px-6 pt-32">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#064e96] mb-6">
          Academics at F.A. Public School
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          We offer a well-rounded academic experience with a focus on both
          intellectual growth and personal development.
        </p>

        {/* Academic Programs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Curriculum Program */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaBook className="text-[#064e96] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-[#064e96] mb-2">
              Curriculum
            </h3>
            <p className="text-gray-700">
              Our curriculum is based on the CBSE pattern and designed to offer
              a balanced mix of academics and extracurricular activities.
            </p>
          </div>

          {/* Teachers Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaChalkboardTeacher className="text-[#064e96] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-[#064e96] mb-2">
              Experienced Teachers
            </h3>
            <p className="text-gray-700">
              Our teachers are highly qualified and passionate about nurturing
              the intellectual and emotional growth of students.
            </p>
          </div>

          {/* Graduation Programs */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaGraduationCap className="text-[#064e96] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-[#064e96] mb-2">
              Graduation Programs
            </h3>
            <p className="text-gray-700">
              We offer specialized programs that prepare students for higher
              education with an emphasis on both academics and leadership.
            </p>
          </div>

          {/* Student-Centered Approach */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaUsers className="text-[#064e96] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-[#064e96] mb-2">
              Student-Centered Approach
            </h3>
            <p className="text-gray-700">
              Our school focuses on the holistic development of students through
              personalized guidance, mentoring, and peer learning.
            </p>
          </div>
        </div>

        {/* Academic Facilities */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#064e96] mb-6">
            State-of-the-Art Facilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={classroom}
                alt="Smart Class"
                className="w-full h-56 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-[#064e96] mb-2">
                Smart Classes
              </h4>
              <p className="text-gray-700">
                Fully equipped classrooms with smart boards to enhance the
                learning experience and foster creativity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={lib}
                alt="Library"
                className="w-full h-56 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-[#064e96] mb-2">
                Library
              </h4>
              <p className="text-gray-700">
                A well-stocked library with a wide range of books, journals, and
                e-learning resources for all subjects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={lab}
                alt="Science Lab"
                className="w-full h-56 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-[#064e96] mb-2">
                Science Lab
              </h4>
              <p className="text-gray-700">
                A well-equipped science lab where students can experiment,
                discover, and engage in practical learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
