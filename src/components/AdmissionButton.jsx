import React from "react";
import { FaBell } from "react-icons/fa";

const AdmissionButton = () => {
  return (
    <div className="fixed bottom-5 left-5 z-50">
      <button className="flex items-center gap-3 bg-[#dd2c2c] text-white px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-slow-blink">
        <FaBell className="md:text-2xl lg:text-2xl text-base animate-pulse" />
        <div className="flex flex-col items-start">
          <p className="md:text-sm lg:text-sm text-xs">Admission Open</p>
          <p className="text-yellow-300 font-extrabold text-sm md:text-base lg:text-lg animate-slow-bounce">
            {/* 🎉 HURRY UP! 🎉 */}
             HURRY UP! 
          </p>
        </div>
      </button>
    </div>
  );
};

export default AdmissionButton;
