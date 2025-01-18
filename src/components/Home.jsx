import React from "react";
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
