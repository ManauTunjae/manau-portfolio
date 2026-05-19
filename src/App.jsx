import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import ScrollToTop from "./components/Scroll/ScrollToTop.jsx";
import TechStack from "./components/TechStack/TechStack.jsx";
import "./App.css";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <div className="portfolio-container">
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <Intro />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
        <ScrollToTop />
      </div>
    </>
  );
}
export default App;
