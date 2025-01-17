import React from "react";
import Hero from "./Hero.jsx";
import Message from "./Message.jsx";
import Topper from "./Topper.jsx";
import Testimonials from "./Testimonials.jsx";
import Gallery from "./Gallery.jsx";
import Contact from "./Contact.jsx";
const Home = () => {
  return (
    <div>
      <Hero />
      <Message />
      <Topper />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
