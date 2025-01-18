import React from "react";

const AccommodationSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-200 py-20 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Section */}
        <div className="space-y-8 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight leading-tight">
            Safe and Hygienic Accommodation for Students at Hostel
          </h2>
          <p className="text-lg text-gray-800 max-w-lg">
            We provide safe and hygienic accommodation for students at the
            hostel. Located within the campus, our hostel is equipped with all
            modern facilities for a comfortable stay.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
            {[
              "Fully Secured Hostel.",
              "No Mobile/Laptop is Allowed inside the Hostel.",
              "Green and Peaceful Atmosphere.",
              "Separate Hostel for Boys and Girls.",
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
                <p className="text-lg font-medium text-gray-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Background Image */}
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{
              backgroundImage: `url('https://via.placeholder.com/600x400')`,
            }}
          ></div>
          <div className="relative z-10 p-8 bg-black bg-opacity-60 text-white rounded-lg">
            <h3 className="text-3xl font-bold">Experience the Comfort</h3>
            <p className="mt-4 text-lg">
              Our hostel offers a peaceful environment with modern amenities to
              ensure a comfortable and enjoyable stay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
