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
          intellectual growth and personality development.
        </p>

        {/* Academic Programs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Curriculum Program */}
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <img
                src="https://www.sec-ed.co.uk/media/svcnbps4/curriculum2-as.jpg" // Add actual image path
                alt="Curriculum"
                className="w-24 h-24 rounded-full shadow-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Curriculum</h3>
            <p>
              Our curriculum follows the CBSE pattern, blending academics with
              exciting extracurricular activities.
            </p>
          </div>

          {/* Teachers Section */}
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <img
                src="https://wp.scoopwhoop.com/wp-content/uploads/2017/09/59ae90b07c99885c215254f7_4b5b611d-d1be-4962-9e67-a156a967d9bb.jpg" // Add actual image path
                alt="Teachers"
                className="w-24 h-24 rounded-full shadow-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Experienced Teachers</h3>
            <p>
              Our dedicated teachers inspire and nurture students, fostering
              both academic and personal growth.
            </p>
          </div>

          {/* Graduation Programs */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/016/081/866/small/career-education-with-kids-growth-concept-learning-model-to-associate-activity-for-real-experience-in-flat-cartoon-hand-drawn-template-illustration-vector.jpg" // Add actual image path
                alt="Graduation"
                className="w-24 h-24 rounded-full shadow-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Career Programs</h3>
            <p>
              Our specialized programs equip students with leadership and
              academic skills for a bright future.
            </p>
          </div>

          {/* Student-Centered Approach */}
          <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXmRQlat5RhNZ7roeEwcGHXguBX2ToZPq4w&s" // Add actual image path
                alt="Students"
                className="w-24 h-24 rounded-full shadow-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Student-Centered Approach
            </h3>
            <p>
              We focus on holistic development through personalized guidance and
              engaging peer learning.
            </p>
          </div>
        </div>

        {/* Academic Facilities */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#064e96] mb-6">
            State-of-the-Art Facilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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

            {/* <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
