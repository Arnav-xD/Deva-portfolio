import './Education.css';

function Education() {
  return (
    <section id="education" className="education">
      <div className="education__header">
        <p className="education__eyebrow">
          05 · Education
        </p>

        <h2 className="education__title">
          Education
        </h2>
      </div>

      <div className="education__list">

        {/* PES University */}
        <article className="education__item">
          <div className="education__meta">
            <span className="education__number">
              01
            </span>

            <span className="education__date">
              2025 — 2029
            </span>
          </div>

          <div className="education__content">
            <p className="education__institution">
              PES University
            </p>

            <h3 className="education__degree">
              B.Tech
            </h3>

            <p className="education__field">
              Computer Science & Engineering - Artificial
              Intelligence & Machine Learning
            </p>

            <p className="education__status">
              Currently pursuing
            </p>
          </div>
        </article>

        {/* Deeksha Learning */}
        <article className="education__item">
          <div className="education__meta">
            <span className="education__number">
              02
            </span>

            <span className="education__date">
              2023 — 2025
            </span>
          </div>

          <div className="education__content">
            <p className="education__institution">
              Deeksha Learning
            </p>

            <h3 className="education__degree">
              Class XII
            </h3>

            <p className="education__field">
              Indiranagar, Bangalore
            </p>

            <p className="education__achievement">
              92% in 12th Board Examinations
            </p>

            <p className="education__description">
              Successfully cleared engineering entrance
              examinations, pursued admission into
              engineering.
            </p>
          </div>
        </article>

        {/* Air Force School */}
        <article className="education__item">
          <div className="education__meta">
            <span className="education__number">
              03
            </span>

            <span className="education__date">
              2013 — 2023
            </span>
          </div>

          <div className="education__content">
            <p className="education__institution">
              Air Force School, ASTE
            </p>

            <h3 className="education__degree">
              Class X
            </h3>

            <p className="education__achievement">
              90% in 10th Board Examinations
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}

export default Education;