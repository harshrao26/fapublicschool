import React from "react";
import classroom from "../assets/classroom.jpg";
const AccommodationSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-200 py-20 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Section */}
        <div className="space-y-8 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight leading-tight">
            Safe and Hygienic Environment for Students at Classroom
          </h2>
          <p className="text-lg text-gray-800 max-w-lg">
            We ensure a safe and hygienic environment for students in the
            classroom. Equipped with modern amenities, the classroom is designed
            to provide a comfortable and conducive learning experience.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
            {[
              "Fully Secured School.",
              "No Mobile/Laptop is Allowed inside the School.",
              "Green and Peaceful Atmosphere.",
              "Discipline Ensured for Academic Excellence.",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <p className="w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </p>
                <p className="text-base font-medium text-gray-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Background Image */}
        <div className="relative rounded-l overflow-hidden ">
         <img src={classroom} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
