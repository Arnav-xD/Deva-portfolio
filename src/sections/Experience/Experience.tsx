import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__header">
        <p className="experience__eyebrow">
          03 · Experience
        </p>

        <h2 className="experience__title">
          Experience
        </h2>
      </div>

      <div className="experience__list">

        {/* PESU Venture Labs */}
        <article className="experience__item">
          <div className="experience__meta">
            <span className="experience__number">
              01
            </span>

            <span className="experience__date">
              Jun 2026 — Present
            </span>
          </div>

          <div className="experience__content">
            <p className="experience__organization">
              PESU Venture Labs
            </p>

            <h3 className="experience__role">
              Research Intern
            </h3>

            <p className="experience__position">
              Student Innovation Assistant · Security Research
              Engineer Intern — Web3 & AI
            </p>

            <p className="experience__description">
              Researching protocol understanding and ecosystem
              mapping challenges in modern Web3 security systems.
              Investigating real-world DeFi exploits and audit
              methodologies to identify gaps in business logic
              and cross-protocol security analysis.
            </p>

            <p className="experience__description">
              Evaluating AI-assisted and traditional auditing
              solutions for protocol reasoning, dependency
              mapping, and trust modeling, while exploring
              context-aware approaches to security analysis beyond
              conventional vulnerability detection.
            </p>

            <div className="experience__tags">
              <span>Web3 Security</span>
              <span>DeFi</span>
              <span>Smart Contracts</span>
              <span>Protocol Analysis</span>
            </div>
          </div>
        </article>

        {/* Graphiti */}
        <article className="experience__item">
          <div className="experience__meta">
            <span className="experience__number">
              02
            </span>

            <span className="experience__date">
              Jul 2026 — Present
            </span>
          </div>

          <div className="experience__content">
            <p className="experience__organization">
              HSP - Tilde 5.0
            </p>

            <h3 className="experience__role">
              Mentee
            </h3>

            <p className="experience__position">
              Graphiti · Graph Representation Learning
            </p>

            <p className="experience__description">
              Working under mentor supervision on Graphiti, a
              research project exploring graph representation
              learning from first principles. The project focuses
              on understanding the foundations and limitations of
              Graph Neural Networks through theoretical study and
              hands-on experimentation.
            </p>

            <p className="experience__description">
              Currently implementing the Neural Graph Pattern
              Machine architecture from scratch in PyTorch,
              exploring non-message-passing approaches to graph
              learning and evaluating them on graph classification
              tasks.
            </p>

            <div className="experience__tags">
              <span>Neural Graph Pattern Machines</span>
              <span>Grpah Neural Networks</span>
              <span>PyTorch</span>
              <span>NetworkX</span>
              <span>Graph Learning</span>
              <span>PyTorch Geometric</span>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}

export default Experience;