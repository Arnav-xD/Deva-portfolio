import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__content">
        <p className="contact__eyebrow">
          06 · Contact
        </p>

        <h2 className="contact__title">
          Let's build
          <br />
          something.
        </h2>

        <p className="contact__description">
          Interested in working together, discussing a project,
          or just talking about tech and research,
          Hit me up! 
        </p>

        <a
          href="mailto:ping.deva.here@gmail.com"
          className="contact__email"
        >
          ping.deva.here@gmail.com
        </a>

        <div className="contact__links">
          <a
            href="https://github.com/Arnav-xD"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/arnav-deva"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <span>↗</span>
          </a>
        </div>
      </div>

      <div className="contact__footer">
        <span>
          Arnav Deva
        </span>

        <span>
          © 2026
        </span>
      </div>
    </section>
  );
}

export default Contact;