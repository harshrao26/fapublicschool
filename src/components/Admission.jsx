import React, { useEffect } from "react";
import {
  FaRegAddressCard,
  FaRegClock,
  FaUserGraduate,
  FaPhoneAlt,
} from "react-icons/fa";

const Admissions = () => {
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
          Admissions at F.A. Public School
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          We welcome all students to join our  educational institution. Explore the admission
          process and get started today!
        </p>

        {/* Admission Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Admission Requirement */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaRegAddressCard className="text-[#064e96] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-[#064e96] mb-2">
              Admission Requirement
            </h3>
            <p className="text-gray-700">
              All students must meet the age criteria as per the respective
              class and must submit the required documents during the admission
              process.
            </p>
          </div>

          {/* Admission Timing */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaRegClock className="text-[#064e96] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-[#064e96] mb-2">
              Admission Timing
            </h3>
            <p className="text-gray-700">
              Admissions are open from January to March each year. Visit us or
              contact the office for detailed schedules and any updates.
            </p>
          </div>

          {/* Eligibility */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaUserGraduate className="text-[#064e96] text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-[#064e96] mb-2">
              Eligibility
            </h3>
            <p className="text-gray-700">
              F.A. Public School welcomes students of all backgrounds. The
              eligibility criteria depend on the class and age of the student.
            </p>
          </div>
        </div>

        {/* Admission Fee Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#064e96] mb-6">
            Admission Fees
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            The admission fee structure is competitive and affordable. Fees can
            be paid annually, and discounts are available for early
            applications.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h4 className="text-xl font-semibold text-[#064e96] mb-2">
              Fee Breakdown
            </h4>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Registration Fee: ₹500</li>
              <li>Tuition Fee: ₹15,000 per year</li>
              <li>Activity Fee: ₹2,000 per year</li>
              <li>Library Fee: ₹1,000 per year</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="bg-[#064e96] p-6 rounded-lg shadow-lg text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Contact Us for Admissions
            </h3>
            <p className="text-lg mb-4">
              For more details or to schedule a visit, feel free to reach out to
              us:
            </p>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <FaPhoneAlt className="text-3xl" />
              <span className="text-lg">8707747148</span>
            </div>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <FaRegAddressCard className="text-3xl" />
              <span className="text-lg">
                Mohammad Hasan Market, Firoshepur, Jaunpur
              </span>
            </div>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <a
                href="mailto:fapsjaunpur@gmail.com"
                className="text-lg underline"
              >
                fapsjaunpur@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
