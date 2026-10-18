import './Projects.css';
import GraphPatternDiagram from '../../components/GraphPatternDiagram/GraphPatternDiagram';

const projects = [
  {
    number: '01',
    status: 'Ongoing · Research',
    title: 'Graphiti — Tilde 5.0',
    subtitle: 'Neural Graph Pattern Machine',
    description: 'A research project exploring whether explicitly learning structural patterns from random walks can produce useful graph representations beyond conventional GNN neighborhood aggregation.',
    tags: ['PyG', 'PyTorch', 'NGPMs', 'Research'],
    featured: true
  },
  {
    number: '02',
    status: 'Completed',
    title: 'Retinal Disease Detection',
    description: 'A CNN-based system for classifying retinal images into five diabetic retinopathy severity stages using the APTOS 2019 dataset. The project uses SMOTE to address class imbalance alongside a custom CNN architecture.',
    tags: ['Python', 'Convolutional Neural Network', 'SMOTE'],
    link: 'https://github.com/Arnav-xD/Retinal-Disease-Detection/tree/main'
  },
  {
    number: '03',
    status: 'Completed',
    title: 'PDF-Toolkit',
    description: 'A Streamlit-based web application that brings common PDF operations into one unified interface. Users can extract tables, extract images, split and merge PDFs, encrypt documents, and decrypt protected files.',
    tags: ['Python', 'Streamlit', 'Web App'],
    link: 'https://github.com/Arnav-xD/PDF-Toolkit'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__header section-heading">
        <p className="projects__eyebrow">02 / Selected Work</p>
        <h2 className="projects__title">Things I've <em>built.</em></h2>
        <p className="projects__intro">A collection of projects exploring machine learning, graph representation learning, and practical software development.</p>
      </div>
      <div className="projects__list">
        {projects.map(project => (
          <article className={`project${project.featured ? ' project--featured' : ''}`} key={project.number}>
            <div className="project__top">
              <span className="project__number">{project.number} / 03</span>
              <span className="project__status"><span className="status-dot" />{project.status}</span>
            </div>
            {project.featured && <GraphPatternDiagram />}
            <div className="project__content">
              <div>
                <h3 className="project__title">{project.title}</h3>
                {project.subtitle && <p className="project__subtitle">{project.subtitle}</p>}
                <p className="project__description">{project.description}</p>
              </div>
              <div>
                <div className="project__tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                {project.link ? (
                  <a className="project__link" href={project.link} target="_blank" rel="noopener noreferrer">
                    View repository <span aria-hidden="true">↗</span>
                  </a>
                ) : <span className="project__ongoing">IN PROGRESS / RESEARCH</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
