import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <p className="skills__eyebrow">
          04 · Skills
        </p>

        <h2 className="skills__title">
          Skills
        </h2>

        <p className="skills__intro">
          Tools and technologies I use across Research,
          Machine Learning, and a tiny bit of Software Development.
        </p>
      </div>

      <div className="skills__grid">

        {/* Programming */}
        <div className="skills__group">
          <div className="skills__group-header">
            <span className="skills__number">
              01
            </span>

            <h3 className="skills__group-title">
              Programming
            </h3>
          </div>

          <div className="skills__items">
            <span>Python</span>
            <span>C</span>
            <span>C++</span>
            <span>TypeScript</span>
            <span>Solidity</span>
          </div>
        </div>

        {/* Development */}
        <div className="skills__group">
          <div className="skills__group-header">
            <span className="skills__number">
              02
            </span>

            <h3 className="skills__group-title">
              Development
            </h3>
          </div>

          <div className="skills__items">
            <span>React</span>
            <span>Vite</span>
            <span>Streamlit</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>

        {/* AI / ML & Research */}
        <div className="skills__group">
          <div className="skills__group-header">
            <span className="skills__number">
              03
            </span>

            <h3 className="skills__group-title">
              AI / ML & Research
            </h3>
          </div>

          <div className="skills__items">
            <span>PyTorch</span>
            <span>PyTorch Geometric</span>
            <span>Graph Neural Networks</span>
            <span>Neural Networks</span>
            <span>Graph Learning</span>
            <span>Solidity</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;