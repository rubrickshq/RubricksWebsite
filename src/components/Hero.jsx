import BrickWall from './BrickWall'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <h1>We design, build, deploy and maintain digital products.</h1>
          <p>
            Rubricks is a product engineering company in Gurgaon, India. One team for client work, our own
            AI-first products, a small lab, and a community of student builders.
          </p>
          <div className="btn-row">
            <a className="btn primary" href="#contact">Start a project</a>
            <a className="btn" href="#community">Join the community</a>
          </div>
        </div>
        <div className="hero-wall" aria-hidden="true">
          <BrickWall />
        </div>
      </div>
    </section>
  )
}
