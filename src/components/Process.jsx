const STEPS = [
  {
    title: 'You bring the project',
    body: 'A call, a referral or an email. We start with what you want to build and why.',
  },
  {
    title: 'Scope, proposal, design',
    body: 'A written scope and quote, then UX, UI and graphics you sign off before code starts.',
  },
  {
    title: 'Build',
    body: 'Web, mobile, backend and AI. You see progress as it happens, not at the end.',
  },
  {
    title: 'Deploy and deliver',
    body: 'Cloud setup, handover and documentation. It runs on infrastructure you own.',
  },
  {
    title: 'Maintain',
    body: 'A fixed monthly fee for support and updates. Cloud costs pass through at cost.',
  },
]

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="section-head">
          <h2 id="process-heading">How a project runs</h2>
          <p className="muted">
            The same five steps whether it is a two-week design job or a two-year platform.
          </p>
        </div>
        <ol className="steps" aria-labelledby="process-heading">
          {STEPS.map(({ title, body }) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
        <div className="process-note">
          <a className="btn primary" href="#contact">Start a project</a>
        </div>
      </div>
    </section>
  )
}
