import React from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import SearchBar from "./components/SearchBar";
import PropertyList from "./components/PropertyList";
import WhyChooseUs from "./components/WhyChooseUs";
import BlogSection from "./components/BlogSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <SearchBar />
      <PropertyList />
      <WhyChooseUs />
      <BlogSection />
      <TeamSection />
      <Footer />
    </>
  );
}

export default App;
