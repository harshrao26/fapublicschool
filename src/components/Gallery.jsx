import React, { useEffect } from "react";

const Gallery = () => {
  const images = [
    "https://via.placeholder.com/400x300/FF5733/FFFFFF?text=Image+1",
    "https://via.placeholder.com/400x300/33FF57/FFFFFF?text=Image+2",
    "https://via.placeholder.com/400x300/3357FF/FFFFFF?text=Image+3",
    "https://via.placeholder.com/400x300/FFC300/FFFFFF?text=Image+4",
    "https://via.placeholder.com/400x300/FF33A1/FFFFFF?text=Image+5",
    "https://via.placeholder.com/400x300/57FF33/FFFFFF?text=Image+6",
    "https://via.placeholder.com/400x300/5733FF/FFFFFF?text=Image+7",
    "https://via.placeholder.com/400x300/F0F0F0/FFFFFF?text=Image+8",
  ];
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
    <section className="b-100 py-16 px-6 t-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-center text-[#064E96]  mb-6">
          Gallery
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          A glimpse of our school life, activities, and celebrations. Take a
          look at the pictures that highlight the essence of F.A. Public School.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
