import { useEffect, useState } from 'react';

import LightRays from './components/LightRays/LightRays';
import LineSidebar from './components/LineSidebar/LineSidebar';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Experience from './sections/Experience/Experience';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';

import './App.css';
import Education from './sections/Education/Education';

const sections = [
  'About',
  'Projects',
  'Experience',
  'Skills',
  'Education',
  'Contact'
];

function App() {
  const [activeSection, setActiveSection] = useState(0);

  const handleNavigation = (index: number, label: string) => {
    const section = document.getElementById(label.toLowerCase());

    if (!section) return;

    // Immediately update the active sidebar item
    setActiveSection(index);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
  const sectionElements = sections
    .map(label => document.getElementById(label.toLowerCase()))
    .filter((section): section is HTMLElement => section !== null);

  const observer = new IntersectionObserver(
    entries => {
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .sort(
          (a, b) =>
            a.boundingClientRect.top - b.boundingClientRect.top
        );

      if (visibleSections.length === 0) return;

      const activeSectionElement = visibleSections[0].target;

      const index = sections.findIndex(
        label =>
          label.toLowerCase() === activeSectionElement.id
      );

      if (index !== -1) {
        setActiveSection(index);
      }
    },
    {
      threshold: 0,
      rootMargin: '-30% 0px -60% 0px'
    }
  );

  sectionElements.forEach(section => {
    observer.observe(section);
  });

  return () => {
    observer.disconnect();
  };
}, []);

  return (
      <div className="app">

        {/* Light Rays */}
        <div className="app__background">
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

        {/* Sidebar */}
        <aside className="app__sidebar">
          <LineSidebar
            items={sections}
            accentColor="#EAB308"
            textColor="#e7e7de"
            markerColor="#aeaeaf"
            showIndex
            showMarker
            proximityRadius={50}
            maxShift={30}
            falloff="linear"
            markerLength={60}
            markerGap={0}
            tickScale={0.5}
            scaleTick
            itemGap={28}
            fontSize={1.15}
            smoothing={100}
            activeIndex={activeSection}
            onItemClick={handleNavigation}
          />
        </aside>

        {/* Main content */}
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



//removed CLickSpark as of now