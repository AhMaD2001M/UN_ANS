import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Hero from "./components/hero";
import Services from "./components/Services";
import BlogSlider from "./components/BlogSlider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
i

function App() {
  return (
    <>
    <Navbar/>
      <ErrorBoundary>
        <Hero/>
      </ErrorBoundary>
      <Services/>
      <BlogSlider/>
      <Footer/>
     
    </>
  );
}

export default App;
