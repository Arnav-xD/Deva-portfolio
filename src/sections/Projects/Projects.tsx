import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__header">
        <p className="projects__eyebrow">
          02 · Selected Work
        </p>

        <h2 className="projects__title">
          Projects
        </h2>

        <p className="projects__intro">
          A collection of projects exploring machine learning,
          graph representation learning, and practical software
          development.
        </p>
      </div>

      <div className="projects__list">

        {/* Graphiti */}
        <article className="project">
          <div className="project__number">
            01
          </div>

          <div className="project__content">
            <p className="project__status">
              Ongoing · Research
            </p>

            <h3 className="project__title">
              Graphiti - Tilde 5.0
            </h3>

            <p className="project__subtitle">
              Neural Graph Pattern Machine
            </p>

            <p className="project__description">
              A research project exploring whether explicitly
              learning structural patterns from random walks can
              produce useful graph representations beyond
              conventional GNN neighborhood aggregation.
            </p>

            <div className="project__tags">
              <span>PyG</span>
              <span>PyTorch</span>
              <span>NGPMs</span>
              <span>Research</span>
            </div>
          </div>
        </article>

        {/* Retinal Disease Detection */}
        <article className="project">
          <div className="project__number">
            02
          </div>

          <div className="project__content">
            <p className="project__status">
              Completed
            </p>

            <h3 className="project__title">
              Retinal Disease Detection
            </h3>

            <p className="project__description">
              A CNN-based system for classifying retinal images
              into five diabetic retinopathy severity stages using
              the APTOS 2019 dataset. The project uses SMOTE to
              address class imbalance alongside a custom CNN
              architecture.
            </p>

            <div className="project__tags">
              <span>Python</span>
              <span>Convolution Neural Network</span>
              <span>SMOTE</span>
            </div>

            <a
              className="project__link"
              href="https://github.com/Arnav-xD/Retinal-Disease-Detection/tree/main"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
              <span>↗</span>
            </a>
          </div>
        </article>

        {/* PDF Toolkit */}
        <article className="project">
          <div className="project__number">
            03
          </div>

          <div className="project__content">
            <p className="project__status">
              Completed
            </p>

            <h3 className="project__title">
              PDF-Toolkit
            </h3>

            <p className="project__description">
              A Streamlit-based web application that brings
              common PDF operations into one unified interface.
              Users can extract tables, extract images, split
              and merge PDFs, encrypt documents, and decrypt
              protected files.
            </p>

            <div className="project__tags">
              <span>Python</span>
              <span>Streamlit</span>
              <span>Web App</span>
            </div>

            <a
              className="project__link"
              href="https://github.com/Arnav-xD/PDF-Toolkit"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
              <span>↗</span>
            </a>
          </div>
        </article>

      </div>
    </section>
  );
}

export default Projects;