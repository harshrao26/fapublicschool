import React, { useEffect } from "react";
import Hero from "./Hero.jsx";
import Message from "./Message.jsx";
import Topper from "./Topper.jsx";
import CampusFacilities from "./CampusFacilities.jsx";
import LearningGrowthSection from "./LearningGrowthSection.jsx";
import AccommodationSection from "./AccommodationSection.jsx";
import StatsSection from "./StatsSection.jsx";
import OurEducation from "./OurEducation.jsx";
import Testimonials from "./Testimonials.jsx";
import Gallery from "./Gallery.jsx";
import Contact from "./Contact.jsx";
const Home = () => {
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
    <div>
      <Hero />
      <Message />
      <CampusFacilities />
      <LearningGrowthSection />
      <AccommodationSection />
      <StatsSection />
      <OurEducation />
      <Topper />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
