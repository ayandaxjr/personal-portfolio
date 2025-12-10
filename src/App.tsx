import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FutureSection } from './components/FutureSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FutureSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
