import React from "react";
import Navbar from "./components/Navbar.jsx";

import Footer from "./components/Footer.jsx";
import Routing from "./Routing.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
};

export default App;
