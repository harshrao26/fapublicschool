import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import kids from '../assets/kids.jpg'
import kids1 from '../assets/kids1.jpg'
import kids2 from '../assets/kids2.jpg'
import kids3 from '../assets/kids3.jpg'
import kids4 from '../assets/kids4.jpg'
const Hero = () => {
  const images = [
    kids,
    kids1,
    kids2,
    kids3,
    kids4    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden pt-20">
      <div
        className={`w-full h-full flex items-center justify-center transition-transform duration-500 ${
          direction === "right" ? "translate-x-0" : "-translate-x-0"
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover absolute"
            style={{
              left: `${index * 100}%`,
              transition: "transform 0.5s ease-in-out",
            }}
          />
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full   hover:bg-gray-700"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full   hover:bg-gray-700"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Hero;
