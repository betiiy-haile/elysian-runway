import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-900 selection:bg-black selection:text-white">
      <Nav />
      <main className="scroll-mt-16">
        <Hero />
        <About />
        <Schedule />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
