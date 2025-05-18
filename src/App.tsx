
import './App.css'; // Re-added CSS import
import Navigation from './components/Navigation'; // To be created
import Hero from './components/Hero';
import About from './components/About';       // To be created
import Skills from './components/Skills';      // To be created
import Projects from './components/Projects';    // To be created
import Contact from './components/Contact';     // To be created
import Footer from './components/Footer';      // To be created

function App() {
  return (
    // The main body styling (bg, text color, centering) is handled by App.css body styles
    // The .app class here is for max-width and padding if needed
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
