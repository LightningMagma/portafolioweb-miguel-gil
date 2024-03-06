import React from "react";
import './App.css'
import Navbar from "./components/Nabvar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import AcademicActivity from "./components/AcademicActivity/AcademicActivity";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <AcademicActivity />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </>
  )
}
export default App