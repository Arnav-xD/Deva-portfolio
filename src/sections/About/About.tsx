import SplitText from '../../components/SplitText/SplitText';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div className="about__topline">
          <p className="about__eyebrow">B.Tech CSE · AI &amp; ML · PES University</p>
        </div>
        <p className="about__title">Hi, I'm</p>
        <SplitText
          text="Arnav Deva."
          tag="h1"
          className="about__name"
          delay={40}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
        <div className="about__lower">
          <div className="about__intro">
            <p className="about__description">
              I'm a 2nd Year B.Tech CSE (AI &amp; ML) student interested in building and
              researching systems at the intersection of machine learning, graph learning,
              and Web3 security.
            </p>
            <p className="about__current">
              Exploring graph representation learning through Graphiti, with research
              experience in Web3 security and smart-contract analysis at PESU Venture Labs.
            </p>
            <div className="about__actions">
              <a className="button-primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
              <a className="button-text" href="https://github.com/Arnav-xD" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="about__note" aria-label="Research interests">
            <span className="micro-label">CURRENT FOCUS</span>
            <strong>Graphs. Intelligence.<br />Security.</strong>
            <span className="about__note-line" />
            <span>RESEARCH / BUILD / REPEAT</span>
          </div>
        </div>
        <a className="about__scroll" href="#projects"><span className="scroll-line" /> SCROLL TO EXPLORE <span>01 — 06</span></a>
      </div>
    </section>
  );
}

export default About;
