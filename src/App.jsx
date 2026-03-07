import About from '../components/About/About.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Intro from '../components/Intro/Intro.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import './App.css'

function App() {
  return (
    <>
      <div className="portfolio-container">
        <header>
          <Navbar/>
        </header>
        <main>
          <Intro />
          <About />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}
export default App
