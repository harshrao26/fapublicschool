import React from "react";
import { FaSchool, FaChalkboardTeacher, FaHome, FaBus } from "react-icons/fa";

const LearningGrowthSection = () => {
  return (
    <div className="bg-green-50 py-12 px-6 lg:px-20">
      {/* Learning and Growth Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        {/* Image Section */}
        <div>
          <img
            src="https://via.placeholder.com/600x400?text=Green+Ambiance"
            alt="Green Ambiance"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            Learning and Growth in Green and Nurturing Ambiance
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            At our institution, we believe that a harmonious environment plays a
            vital role in shaping young minds. Surrounded by lush greenery, we
            provide a nurturing ambiance that inspires creativity, focus, and
            holistic growth for every student.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            With state-of-the-art facilities and a serene setting, our campus is
            designed to foster learning while ensuring the well-being of
            students, helping them thrive academically and personally.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Our Nurturing Community Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        {/* Content Section */}
        <div>
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            Our Nurturing Community
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our community is committed to the safety and growth of our students.
            All buses are equipped with GPS and CCTV cameras, ensuring a secure
            environment for daily commutes. Our facilities are designed to
            create a holistic space where students can thrive academically and
            socially.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Parents can rest assured knowing that their children are in safe
            hands, surrounded by a nurturing community that prioritizes their
            well-being.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition">
            Discover More
          </button>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://via.placeholder.com/300x200?text=GPS+Enabled+Buses"
            alt="GPS Enabled Buses"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/300x200?text=CCTV+Monitored"
            alt="CCTV Monitored"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/300x200?text=Safe+Environment"
            alt="Safe Environment"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/300x200?text=Community+Care"
            alt="Community Care"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Certified Institute Section */}
      {/* <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-700 mb-12 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaSchool className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Certified Institute
            </h3>
            <p className="text-gray-700">
              Safa Public School is a certified institute affiliated to CBSE,
              New Delhi. We are one of the top CBSE Schools in Lucknow.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaChalkboardTeacher className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Qualified Teachers
            </h3>
            <p className="text-gray-700">
              We have a team of highly qualified teachers who are dedicated to
              providing quality education to the students.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaHome className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Hostel Facilities
            </h3>
            <p className="text-gray-700">
              We provide hostel facilities to the students. The hostel is
              equipped with all the modern facilities and is under the
              supervision of the hostel warden.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaBus className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Transportation
            </h3>
            <p className="text-gray-700">
              We provide transportation facilities. Our school buses are
              equipped with GPS and CCTV cameras for the safety of the students.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LearningGrowthSection;
