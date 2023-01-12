import './App.css';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

export default App;
