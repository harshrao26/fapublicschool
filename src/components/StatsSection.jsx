import React, { useState, useEffect, useRef } from "react";

const StatsSection = () => {
  const [activeStudents, setActiveStudents] = useState(0);
  const [playGrounds, setPlayGrounds] = useState(0);
  const [bestFaculties, setBestFaculties] = useState(0);
  const sectionRef = useRef(null);

  const incrementCounter = (setCounter, target) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < target) {
        count += Math.ceil(target / 100); // Increment by a fraction for smooth animation
        setCounter(count);
      } else {
        clearInterval(interval);
        setCounter(target);
      }
    }, 1); // Adjust speed of the counter
  };

  const handleScroll = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      incrementCounter(setActiveStudents, 1000);
      incrementCounter(setPlayGrounds, 2);
      incrementCounter(setBestFaculties, 20);
      observer.disconnect(); // Stop the observer once the section is in view
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.2, 
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-8">
      <p className="text-4xl font-bold text-center text-[#064E96] mb-12 ">
        Committed To The Best Results !
      </p>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 ">
          <h3 className="text-4xl font-bold text-[#064E96]">
            {activeStudents}+{" "}
          </h3>
          <p className="text-lg text-gray-700">Active Students</p>
        </div>
        <div className="bg-white p-6 ">
          <h3 className="text-4xl font-bold text-[#064E96]">
            {playGrounds}+{" "}
          </h3>
          <p className="text-lg text-gray-700">Play Grounds</p>
        </div>
        <div className="bg-white p-6 ">
          <h3 className="text-4xl font-bold text-[#064E96]">
            {bestFaculties}+{" "}
          </h3>
          <p className="text-lg text-gray-700">Best Faculties</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
