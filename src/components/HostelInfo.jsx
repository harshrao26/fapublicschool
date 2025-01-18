import React from "react";
import { FaShieldAlt, FaLeaf, FaBed, FaMobileAlt } from "react-icons/fa";

const HostelInfo = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white text-center py-6">
          <h1 className="text-3xl font-bold">
            Safe and Hygienic Accommodation for Students
          </h1>
          <p className="mt-2 text-lg">
            Located on the school campus with modern facilities
          </p>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center space-x-4">
            <FaShieldAlt className="text-blue-600 text-2xl" />
            <p className="text-gray-700 text-lg">Fully Secured Hostel</p>
          </div>

          <div className="flex items-center space-x-4">
            <FaMobileAlt className="text-red-600 text-2xl" />
            <p className="text-gray-700 text-lg">
              No Mobile/Laptop Allowed Inside
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <FaLeaf className="text-green-600 text-2xl" />
            <p className="text-gray-700 text-lg">
              Green and Peaceful Atmosphere
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <FaBed className="text-purple-600 text-2xl" />
            <p className="text-gray-700 text-lg">
              Separate Hostel for Boys and Girls
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelInfo;
