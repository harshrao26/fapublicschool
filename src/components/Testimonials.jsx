import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Hassan Ahamed",
      message:
        "F A Public School has been an incredible experience. The teachers go above and beyond to ensure every student succeeds.",
    },
    {
      name: "Anas Khan",
      message:
        "The extracurricular opportunities here are amazing! I discovered my love for painting thanks to the art club.",
    },
    {
      name: "Momina Khatoon",
      message:
        "Learning at this school has been nothing short of inspiring. The environment is both competitive and nurturing.",
    },
    {
      name: "Farhana",
      message:
        "The support from teachers and peers helped me achieve my dreams. I’ll always cherish these memories.",
    },
    {
      name: "Wazir Khan",
      message:
        "F A Public School's focus on holistic development made me confident and prepared for real-life challenges.",
    },
    {
      name: "Akhtar Alam",
      message:
        "I will always be grateful for the guidance I received. My time here was filled with learning and joy.",
    },
    {
      name: "Hamza Ahamed",
      message:
        "Being here felt like being part of a family. I loved the dedication and care from everyone in the school.",
    },
    {
      name: "Diya Roy",
      message:
        "I learned so much, both academically and personally. This school shaped who I am today.",
    },
    {
      name: "Kunaal Gupta",
      message:
        "The sports facilities are top-notch. It helped me grow not just as a student but also as an athlete.",
    },
    {
      name: "Priya Patel",
      message:
        "I joined this school with high expectations, and it exceeded them all. Thank you for everything!",
    },
    {
      name: "Juned Ahamed",
      message:
        "The best thing about this school is the supportive community. Everyone genuinely cares about each other.",
    },
    {
      name: "Adnan Sheikh",
      message:
        "From day one, I felt welcomed and valued. The experience was absolutely transformative.",
    },
  ];

  return (
    <div className="marquee-container bg-blue-50 py-8">
      <h2 className="text-4xl font-bold text-center text-[#064E96] mb-12 ">
        What Parents Say
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
