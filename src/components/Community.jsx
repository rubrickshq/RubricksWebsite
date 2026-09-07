export default function Community() {
  return (
    <section id="community">
      <div className="wrap two-col">
        <div>
          <h2>Rubricks Community</h2>
        </div>
        <div>
          <p>
            A group of college students who build real software together. No syllabus, no certificates.
            Members work on actual projects, and companies that need engineers hire from here.
          </p>
          <ul className="plain-list">
            <li>
              <strong>If you are a student:</strong> you learn by shipping, alongside people doing the same.
            </li>
            <li>
              <strong>If you are hiring:</strong> you meet engineers whose work you can already see.
            </li>
            <li>
              <strong>If you want a course:</strong> this is not one.
            </li>
          </ul>
          <div className="btn-row">
            <a className="btn primary" href="mailto:hello@rubricks.in?subject=Joining%20Rubricks%20Community">
              Join the community
            </a>
            <a className="btn" href="mailto:hello@rubricks.in?subject=Hiring%20from%20Rubricks%20Community">
              Hire from the community
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
