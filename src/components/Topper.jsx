import React, { useState, useEffect } from "react";

const Toppers = () => {
  const toppers = [
    {
      id: 1,
      name: "Aarav Sharma",
      img: "https://i.pinimg.com/474x/6b/7e/d6/6b7ed698713c09ad9e6afc7dcb996a09.jpg",
      class: "10th ",
    },
    {
      id: 2,
      name: "Ishita Verma",
      img: "https://www.mrmed.in/Guruvigneshwari.jpg",
      class: "12th ",
    },
    {
      id: 3,
      name: "Sana Khan",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOeiQhUXDO6Rl2Ugfi1m-HfNw_3Hmeqw1nPC9AAiTlhL8yW_TTLn-EkHBqNpdingIaPo&usqp=CAU",
      class: "10th ",
    },
    {
      id: 4,
      name: "Ayesha Parveen",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCeyIeNUMwF5Z4ze0RyK0c6UQ_UOuFGyuFeZEIvg1WxND09gdOIZznleKod-YV-90F60&usqp=CAU",
      class: "12th ",
    },
    {
      id: 5,
      name: "Hira Javed",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ33DeuWHvA1LK_P3Yn-5Br4i4q9cn-AQlfqm6iqDLgEMIk-teFD5m8X0wBNfq7GXEWLZM&usqp=CAU",
      class: "10th ",
    },
    {
      id: 6,
      name: "Anas Khan",
      img: "https://i.pinimg.com/736x/05/7f/df/057fdfd101877c6e33c11f3fda62ab9b.jpg",
      class: "12th ",
    },
    {
      id: 7,
      name: "Adnan Sheikh",
      img: "https://www.charusat.ac.in/cmpica/images/faculty_photo/jaypanchal.jpg",
      class: "12th ",
    },
   
    {
      id: 9,
      name: "Nazim Ahamed",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVI0hDIloDMjTT0hpF0UAWdJAJeydAG2isNo6OK_I6DiVF8cK0NNXUga5priFdu9O2_PQ&usqp=CAU",
      class: "12th ",
    },
    {
      id: 10,
      name: "Shama Parveen",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzd7g_u_IqhwNJArxQtDhBgkTijbwBP3uUQg&s",
      class: "12th ",
    },
    // {
    //   id: 11,
    //   name: "Aryan Choudhary",
    //   img: "https://via.placeholder.com/150",
    //   class: "10th ",
    // },
    // {
    //   id: 12,
    //   name: "Meera Bhat",
    //   img: "https://via.placeholder.com/150",
    //   class: "12th ",
    // },
    // {
    //   id: 13,
    //   name: "Dev Sharma",
    //   img: "https://via.placeholder.com/150",
    //   class: "10th ",
    // },
    // {
    //   id: 14,
    //   name: "Pooja Sinha",
    //   img: "https://via.placeholder.com/150",
    //   class: "12th ",
    // },
    // {
    //   id: 15,
    //   name: "Rohan Joshi",
    //   img: "https://via.placeholder.com/150",
    //   class: "10th ",
    // },
    // {
    //   id: 16,
    //   name: "Aditi Nair",
    //   img: "https://via.placeholder.com/150",
    //   class: "12th ",
    // },
    // {
    //   id: 17,
    //   name: "Samarth Goel",
    //   img: "https://via.placeholder.com/150",
    //   class: "10th ",
    // },
    // {
    //   id: 18,
    //   name: "Tara Kapoor",
    //   img: "https://via.placeholder.com/150",
    //   class: "12th ",
    // },
    // {
    //   id: 19,
    //   name: "Manav Mishra",
    //   img: "https://via.placeholder.com/150",
    //   class: "10th ",
    // },
    // {
    //   id: 20,
    //   name: "Naina Reddy",
    //   img: "https://via.placeholder.com/150",
    //   class: "12th ",
    // },
  ];

  const toppersPerSlide = 6; // Number of toppers displayed per slide
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateDirection, setAnimateDirection] = useState("left");

  // Automatically change the slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

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
        <h2 className="text-4xl font-bold text-center text-[#064E96] mb-12 ">
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
                  className="w-24 h-24 mx-auto object-cover rounded-full mb-4 border-4 border-[#064E96]"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {topper.name}
                </h3>
                <p className="text-gray-500">{topper.class}</p>
              </div>
            ))}
          </div>
          {/* Navigation buttons */}
          {/* <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
            <button
              onClick={handlePrevious}
              className="bg-[#064E96] text-white p-2 rounded-full hover:bg-[#064E96]"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="bg-[#064E96] text-white p-2 rounded-full hover:bg-[#064E96]"
            >
              &#8594;
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Toppers;
