import { useEffect, useState } from 'react';
import LightRays from './components/LightRays/LightRays';
import LineSidebar from './components/LineSidebar/LineSidebar';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Experience from './sections/Experience/Experience';
import Skills from './sections/Skills/Skills';
import Education from './sections/Education/Education';
import Contact from './sections/Contact/Contact';
import './App.css';
import './revamp.css';

const sections = ['About', 'Projects', 'Experience', 'Skills', 'Education', 'Contact'];

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference();
    media.addEventListener('change', updatePreference);
    return () => media.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const reference = window.scrollY + window.innerHeight * 0.38;
        let current = 0;
        sections.forEach((name, index) => {
          const element = document.getElementById(name.toLowerCase());
          if (element && element.offsetTop <= reference) current = index;
        });
        setActiveSection(current);
      });
    };
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    updateActiveSection();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const handleNavigation = (index: number, label: string) => {
    setActiveSection(index);
    document.getElementById(label.toLowerCase())?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="app">
      {!reducedMotion && (
        <div className="app__background" aria-hidden="true">
          <LightRays
            raysOrigin="top-center"
            raysColor="#EAB308"
            raysSpeed={1.1}
            lightSpread={0.7}
            rayLength={3}
            followMouse
            mouseInfluence={0.2}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1.2}
          />
        </div>
      )}

      <aside className="app__sidebar" aria-label="Site navigation">
        <a className="sidebar-brand" href="#about" aria-label="Arnav Deva, back to top">
          AD<span>.</span>
        </a>
        <LineSidebar
          items={sections}
          accentColor="#EAB308"
          textColor="#a7a59d"
          markerColor="#51514a"
          showIndex
          showMarker
          proximityRadius={50}
          maxShift={14}
          falloff="smooth"
          markerLength={38}
          markerGap={2}
          tickScale={0.45}
          scaleTick
          itemGap={25}
          fontSize={0.95}
          smoothing={110}
          activeIndex={activeSection}
          onItemClick={handleNavigation}
        />
        <div className="sidebar-bottom">
          <span>AI / ML · SECURITY</span>
          <a href="https://github.com/Arnav-xD" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </aside>

      <header className="mobile-header">
        <a href="#about" className="mobile-brand" aria-label="Arnav Deva, back to top">AD<span>.</span></a>
        <a href="mailto:ping.deva.here@gmail.com" className="mobile-contact">Let's talk <span aria-hidden="true">↗</span></a>
      </header>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {sections.map((name, index) => (
          <a
            href={`#${name.toLowerCase()}`}
            key={name}
            aria-current={activeSection === index ? 'location' : undefined}
            onClick={() => setActiveSection(index)}
          >{name}</a>
        ))}
      </nav>

      <main className="app__content">
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
