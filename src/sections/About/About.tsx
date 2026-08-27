import SplitText from '../../components/SplitText/SplitText';

import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <p className="about__eyebrow">
          B.Tech CSE · AI & ML · PES University
        </p>

        <h1 className="about__title">
          Hi, I'm
        </h1>

        <SplitText
          text="Arnav Deva!"
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

        <p className="about__description">
          I'm a 2nd Year B.Tech CSE (AI & ML) student interested in building and
          researching systems at the intersection of machine learning, graph learning,
          and Web3 security.
        </p>

        <p className="about__current">
          Currently researching graph representation learning through
          Graphiti and working on Web3 security and smart-contract research
          at PESU Venture Labs.
        </p>
      </div>
    </section>
  );
}

export default About;