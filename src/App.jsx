import React from "react";

// UI Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Sections
import Intro from "./sections/Intro/Intro";
import Skills from "./sections/Skills/Skills";
import TechStack from "./sections/TechStacks/TechStack";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

const App = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <Skills />
            <TechStack />
            <Projects />
            <Contact />
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default App;
