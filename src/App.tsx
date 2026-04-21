import "./App.css";
import Footer from "./components/Footer";
import Menubar from "./components/Menubar";
import Navbar from "./components/Navbar";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Home from "./containers/Home";
import Projects from "./containers/Projects";

function App() {
  return (
    <div className="layout">
      <div className="layout__navbar">
        <Navbar />
      </div>
      <div className="layout__content">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <div className="layout__menubar">
        <Menubar />
      </div>
    </div>
  );
}

export default App;
