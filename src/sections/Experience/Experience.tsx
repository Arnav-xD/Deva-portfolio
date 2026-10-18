import './Experience.css';

const experiences = [
  {
    date: 'Jun 2026 — Sept 2026',
    organization: 'PESU Venture Labs',
    role: 'Research Intern',
    position: 'Student Innovation Assistant · Security Research Engineer Intern — Web3 & AI',
    paragraphs: [
      'Researched protocol understanding and ecosystem mapping challenges in modern Web3 security systems. Investigated real-world DeFi exploits and audit methodologies to identify gaps in business logic and cross-protocol security analysis.',
      'Evaluated AI-assisted and traditional auditing solutions for protocol reasoning, dependency mapping, and trust modeling, while exploring context-aware approaches to security analysis beyond conventional vulnerability detection.'
    ],
    tags: ['Web3 Security', 'DeFi', 'Smart Contracts', 'Protocol Analysis']
  },
  {
    date: 'Jul 2026 — Sept 2026',
    organization: 'HSP — Tilde 5.0',
    role: 'Mentee',
    position: 'Graphiti · Graph Representation Learning',
    paragraphs: [
      'Worked under mentor supervision on Graphiti, a research project exploring graph representation learning from first principles. The project focuses on understanding the foundations and limitations of Graph Neural Networks through theoretical study and hands-on experimentation.',
      'Implemented and explored the Neural Graph Pattern Machine architecture in PyTorch, investigating non-message-passing approaches to graph learning and graph classification tasks.'
    ],
    tags: ['Neural Graph Pattern Machines', 'Graph Neural Networks', 'PyTorch', 'NetworkX', 'Graph Learning', 'PyTorch Geometric']
  },
  {
    date: '',
    organization: 'Layer8 PESUECC',
    role: 'Webmaster',
    position: 'Web Development & Administration',
    paragraphs: ['Working on website development, maintenance, and web administration for Layer8 PESUECC.'],
    tags: ['Web Development', 'Web Administration']
  }
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__header section-heading">
        <p className="experience__eyebrow">03 / Where I've worked</p>
        <h2 className="experience__title">Experience<span className="heading-period">.</span></h2>
        <p className="section-description">Research, collaboration, and putting ideas into practice.</p>
      </div>
      <div className="experience__list">
        {experiences.map((entry, index) => (
          <article className="experience__item" key={entry.organization}>
            <div className="experience__meta">
              <span className="experience__number">{String(index + 1).padStart(2, '0')}</span>
              {entry.date && <span className="experience__date">{entry.date}</span>}
            </div>
            <div className="experience__content">
              <p className="experience__organization">{entry.organization}</p>
              <h3 className="experience__role">{entry.role}</h3>
              <p className="experience__position">{entry.position}</p>
              {entry.paragraphs.map(paragraph => <p className="experience__description" key={paragraph}>{paragraph}</p>)}
              <div className="experience__tags">{entry.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
