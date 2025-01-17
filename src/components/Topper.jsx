import React, { useState, useEffect } from "react";

const Toppers = () => {
  const toppers = [
    {
      id: 1,
      name: "Aarav Sharma",
      img: "https://via.placeholder.com/150",
      class: "10th ",
    },
    {
      id: 2,
      name: "Ishita Verma",
      img: "https://via.placeholder.com/150",
      class: "12th ",
    },
    {
      id: 3,
      name: "Vihaan Singh",
      img: "https://via.placeholder.com/150",
      class: "10th ",
    },
    {
      id: 4,
      name: "Ananya Gupta",
      img: "https://via.placeholder.com/150",
      class: "12th ",
    },
    {
      id: 5,
      name: "Krishna Patel",
      img: "https://via.placeholder.com/150",
      class: "10th ",
    },
    {
      id: 6,
      name: "Riya Desai",
      img: "https://via.placeholder.com/150",
      class: "12th ",
    },
    {
      id: 7,
      name: "Arjun Kumar",
      img: "https://via.placeholder.com/150",
      class: "10th ",
    },
    {
      id: 8,
      name: "Diya Roy",
      img: "https://via.placeholder.com/150",
      class: "12th ",
    },
    {
      id: 9,
      name: "Kabir Mehta",
      img: "https://via.placeholder.com/150",
      class: "10th ",
    },
    {
      id: 10,
      name: "Sneha Iyer",
      img: "https://via.placeholder.com/150",
      class: "12th ",
    },
    {
      id: 11,
      name: "Aryan Choudhary",
      img: "https://via.placeholder.com/150",
      class: "10th ",
    },
    {
      id: 12,
      name: "Meera Bhat",
      img: "https://via.placeholder.com/150",
      class: "12th ",
    },
    {
      id: 13,
      name: "Dev Sharma",
      img: "https://via.placeholder.com/150",
      class: "10th ",
    },
    {
      id: 14,
      name: "Pooja Sinha",
      img: "https://via.placeholder.com/150",
      class: "12th ",
    },
    {
      id: 15,
      name: "Rohan Joshi",
      img: "https://via.placeholder.com/150",
      class: "10th ",
    },
    {
      id: 16,
      name: "Aditi Nair",
      img: "https://via.placeholder.com/150",
      class: "12th ",
    },
    {
      id: 17,
      name: "Samarth Goel",
      img: "https://via.placeholder.com/150",
      class: "10th ",
    },
    {
      id: 18,
      name: "Tara Kapoor",
      img: "https://via.placeholder.com/150",
      class: "12th ",
    },
    {
      id: 19,
      name: "Manav Mishra",
      img: "https://via.placeholder.com/150",
      class: "10th ",
    },
    {
      id: 20,
      name: "Naina Reddy",
      img: "https://via.placeholder.com/150",
      class: "12th ",
    },
  ];

  const toppersPerSlide = 6; // Number of toppers displayed per slide
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateDirection, setAnimateDirection] = useState("left");

  // Automatically change the slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    setAnimateDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? toppers.length - toppersPerSlide
        : prevIndex - toppersPerSlide
    );
  };

  const handleNext = () => {
    setAnimateDirection("left");
    setCurrentIndex(
      (prevIndex) => (prevIndex + toppersPerSlide) % toppers.length
    );
  };

  const currentToppers = toppers.slice(
    currentIndex,
    currentIndex + toppersPerSlide
  );

  return (
    <div className=" py-12 px-6 md:px-12 overflow-hidden ">
      <div className="max-w-8xl mx-auto relative ">
        <h2 className="text-3xl font-bold text-center text-yellow-700 mb-8">
          Meet Our Toppers
        </h2>
        <div className="relative overflow-hidden">
          <div
            className={`grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-4 transition-transform duration-500 ${
              animateDirection === "left"
                ? "translate-x-0"
                : "-translate-x-full"
            }`}
          >
            {currentToppers.map((topper) => (
              <div
                key={topper.id}
                className="bg-white p-4 rounded-lg border-[1.5px] border-zinc-200 text-center"
              >
                <img
                  src={topper.img}
                  alt={topper.name}
                  className="w-24 h-24 mx-auto object-cover rounded-full mb-4 border-4 border-yellow-500"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {topper.name}
                </h3>
                <p className="text-gray-500">{topper.class}</p>
              </div>
            ))}
          </div>
          {/* Navigation buttons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
            <button
              onClick={handlePrevious}
              className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-700"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-700"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toppers;
