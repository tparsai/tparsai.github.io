import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HelloSection from "./components/HelloSection";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import "./App.css";

function App() {
  useEffect(() => {
    window.animateHeaders({
      "#name_header": "90%",
      "#hello_header": "90%",
      "#resume_header": "70%",
      "#portfolio_header": "70%",
      "#contacts_header": "70%",
      "#writeletter_header": "70%",
    });
    window.setupMobileNav();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <HelloSection />
      <ProfileSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
