import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Skills from "../components/Skills";

function Home() {
  return (
    <div className="theme-app theme-text-primary relative min-h-screen overflow-x-hidden">
      <div className="page-grid" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
