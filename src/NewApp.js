import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Analytics from "./Components/Analytics";
import NewsLetter from "./Components/NewsLetter";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function NewApp() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
}

export default NewApp;
