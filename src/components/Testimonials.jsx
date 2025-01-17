import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      message:
        "F A Public School has been an incredible experience. The teachers go above and beyond to ensure every student succeeds.",
    },
    {
      name: "Ishita Verma",
      message:
        "The extracurricular opportunities here are amazing! I discovered my love for painting thanks to the art club.",
    },
    {
      name: "Rohan Joshi",
      message:
        "Learning at this school has been nothing short of inspiring. The environment is both competitive and nurturing.",
    },
    {
      name: "Ananya Gupta",
      message:
        "The support from teachers and peers helped me achieve my dreams. I’ll always cherish these memories.",
    },
    {
      name: "Vihaan Singh",
      message:
        "F A Public School's focus on holistic development made me confident and prepared for real-life challenges.",
    },
    {
      name: "Sneha Iyer",
      message:
        "I will always be grateful for the guidance I received. My time here was filled with learning and joy.",
    },
    {
      name: "Manav Mishra",
      message:
        "Being here felt like being part of a family. I loved the dedication and care from everyone in the school.",
    },
    {
      name: "Diya Roy",
      message:
        "I learned so much, both academically and personally. This school shaped who I am today.",
    },
    {
      name: "Kabir Malhotra",
      message:
        "The sports facilities are top-notch. It helped me grow not just as a student but also as an athlete.",
    },
    {
      name: "Priya Patel",
      message:
        "I joined this school with high expectations, and it exceeded them all. Thank you for everything!",
    },
    {
      name: "Nikhil Kapoor",
      message:
        "The best thing about this school is the supportive community. Everyone genuinely cares about each other.",
    },
    {
      name: "Aanya Sinha",
      message:
        "From day one, I felt welcomed and valued. The experience was absolutely transformative.",
    },
  ];

  return (
    <div className="marquee-container bg-yellow-50 py-8">
      <h2 className="text-center text-3xl font-bold text-yellow-800 mb-6">
        What Our Students Say
      </h2>
      <div className="marquee">
        <div className="marquee-content">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white shadow-md p-4 m-4 rounded-md"
            >
              <p className="text-gray-800 italic mb-2">
                "{testimonial.message}"
              </p>
              <h3 className="text-gray-900 font-semibold">
                - {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
        <div className="marquee-content">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${index}-duplicate`}
              className="testimonial-card bg-white shadow-md p-4 m-4 rounded-md"
            >
              <p className="text-gray-800 italic mb-2">
                "{testimonial.message}"
              </p>
              <h3 className="text-gray-900 font-semibold">
                - {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
