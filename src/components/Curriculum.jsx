import React, { useEffect } from "react";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaTools,
  FaRegListAlt,
} from "react-icons/fa";

const Curriculum = () => {
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
    <section className=" py-16 px-6 pt-32">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#064e96] mb-6">
          Our Curriculum
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          At F.A. Public School, we provide an innovative and balanced
          curriculum that emphasizes both academics and extracurricular
          activities to ensure holistic development for each student.
        </p>

        {/* Curriculum Overview */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Curriculum Overview"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-2xl font-semibold text-[#064e96] mb-4">
              Curriculum Overview
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Our curriculum is designed to foster a love for learning through
              diverse subjects, interactive teaching methods, and a focus on the
              student's overall development. We follow a structured curriculum
              aligned with the CBSE board, and we ensure that each student gets
              personal attention for their growth.
            </p>
            <p className="text-lg text-gray-700">
              Our academic year is divided into different phases: Foundation,
              Skill-building, and Expertise, allowing each student to gradually
              build on their strengths and explore new interests.
            </p>
          </div>
        </div>

        {/* Curriculum Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Early Education */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaBookOpen className="text-[#064e96] text-4xl" />
            </div>
            <h4 className="text-xl font-semibold text-[#064e96] mb-2">
              Early Education (Nursery - Class 2)
            </h4>
            <img
              src="https://via.placeholder.com/150x150"
              alt="Early Education"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700">
              In this stage, we emphasize building foundational skills such as
              language development, basic math, and cognitive skills through
              interactive play-based activities.
            </p>
          </div>

          {/* Primary Education */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaChalkboardTeacher className="text-[#064e96] text-4xl" />
            </div>
            <h4 className="text-xl font-semibold text-[#064e96] mb-2">
              Primary Education (Class 3 - Class 5)
            </h4>
            <img
              src="https://via.placeholder.com/150x150"
              alt="Primary Education"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700">
              Students focus on developing critical thinking skills while
              covering subjects like Science, Math, Social Studies, and English.
              We encourage creativity through co-curricular activities.
            </p>
          </div>

          {/* Middle Education */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaRegListAlt className="text-[#064e96] text-4xl" />
            </div>
            <h4 className="text-xl font-semibold text-[#064e96] mb-2">
              Middle Education (Class 6 - Class 8)
            </h4>
            <img
              src="https://via.placeholder.com/150x150"
              alt="Middle Education"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700">
              At this stage, we dive deeper into core subjects while also
              introducing electives. Students are encouraged to think critically
              and express themselves creatively.
            </p>
          </div>

          {/* Senior Education */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaGraduationCap className="text-[#064e96] text-4xl" />
            </div>
            <h4 className="text-xl font-semibold text-[#064e96] mb-2">
              Senior Education (Class 9 - Class 12)
            </h4>
            <img
              src="https://via.placeholder.com/150x150"
              alt="Senior Education"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700">
              Our senior curriculum prepares students for future academic
              success and careers. We offer specialized streams in Science,
              Commerce, and Humanities. Students are trained in both academics
              and life skills.
            </p>
          </div>
        </div>

        {/* Advanced Teaching Methodology */}
        <div className="mt-16 bg-[#064e96] text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-6">
            Our Advanced Teaching Methodology
          </h3>
          <p className="text-lg mb-4">
            We believe in an interactive, student-centered approach. Our
            teachers use technology, multimedia tools, and real-world examples
            to make learning more engaging. Additionally, we incorporate:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hands-on Learning */}
            <div className="flex justify-center items-center space-x-4">
              <FaTools className="text-3xl" />
              <span className="text-lg">Hands-on learning experiences</span>
            </div>
            {/* Smart Classrooms */}
            <div className="flex justify-center items-center space-x-4">
              <FaChalkboardTeacher className="text-3xl" />
              <span className="text-lg">
                Smart classrooms with digital tools
              </span>
            </div>
            {/* Co-curricular Activities */}
            <div className="flex justify-center items-center space-x-4">
              <FaBookOpen className="text-3xl" />
              <span className="text-lg">
                Wide range of co-curricular activities
              </span>
            </div>
            {/* Personalized Attention */}
            <div className="flex justify-center items-center space-x-4">
              <FaGraduationCap className="text-3xl" />
              <span className="text-lg">
                Personalized attention for every student
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
