import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./assets/styles/style.css";
import Card from "./components/Card";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <main>
        {/* <About />
        <Skills />
        <Experience />
        <Education />
        <Contact /> */}
        <Card />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
