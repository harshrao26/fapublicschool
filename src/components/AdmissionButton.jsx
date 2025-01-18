import React from "react";
import { FaBell } from "react-icons/fa";

const AdmissionButton = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50">
      <button className="flex items-center gap-2 bg-[#dd2c2c] text-white px-6 py-3 text-lg font-semibold rounded-full animate-blink hover:scale-110 transition-transform duration-300">
        <FaBell className="md:text-2xl lg:text-2xl text-base" />
        <p className="md:text-sm lg:text-sm text-xs">Admission Start</p>
      </button>
    </div>
  );
};

export default AdmissionButton;
