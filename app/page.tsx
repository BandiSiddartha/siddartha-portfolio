import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsMatrix from "./components/SkillsMatrix";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsMatrix />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
