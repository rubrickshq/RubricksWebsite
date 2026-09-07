const HIDDEN_GO = { visibility: 'hidden' }

export default function Divisions() {
  return (
    <section id="what">
      <div className="wrap">
        <div className="section-head">
          <h2>Four parts of one company</h2>
          <p className="muted">
            Each one feeds the others. The agency pays for the products, the lab tests what the products
            need, and the community is where the team comes from.
          </p>
        </div>

        <div className="division-wall">
          <a className="brick agency" id="agency" href="#process">
            <h3>Agency</h3>
            <p>
              Client projects, end to end. Design, development, cloud and maintenance, from the first call
              to the third year of running it.
            </p>
            <span className="go">How a project runs</span>
          </a>
          <div className="brick products" id="products">
            <h3>Products</h3>
            <p>Our own software, built in-house and AI-first. The first products are in development.</p>
            <span className="go" style={HIDDEN_GO}>–</span>
          </div>

          <div className="brick labs" id="labs">
            <h3>Labs</h3>
            <p>
              Technical consulting, research notes and small tools. Where ideas get tested before they
              become products.
            </p>
            <span className="go" style={HIDDEN_GO}>–</span>
          </div>
          <a className="brick community" href="#community">
            <h3>Community</h3>
            <p>Students who learn by shipping real things. Companies hire from here. Not a course, not coaching.</p>
            <span className="go">About the community</span>
          </a>
        </div>
      </div>
    </section>
  )
}
