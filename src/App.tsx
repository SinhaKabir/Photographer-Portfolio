import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import VideoShowcase from './components/VideoShowcase';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="bg-[var(--color-background)] min-h-screen selection:bg-[var(--color-primary)] selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <VideoShowcase />
      <Testimonials />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
