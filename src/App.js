import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import { Projects } from "./components/Projects.js";
import { Contact } from "./components/Contacts.js";
import Footer from "./components/Footer";
//import { Link, Element } from "react-scroll";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
