import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import HeroCanvas from '../components/HeroCanvas';

const MARQUEE = 'Web Design ✦ Frontend Engineering ✦ Full-Stack Development ✦ UI / UX ✦ WordPress ✦ Ecommerce ✦ SEO ✦ Google & Meta Ads ✦ Social & Content ✦ ';

export default function Home() {
  useReveal();

  return (
    <>
      {/* HERO */}
      <section id="hero">
        <HeroCanvas />
        <div className="wrap in">
          <span className="kick reveal"><span className="idx">✦</span> Web design · Development · Digital growth <span className="dash" /> Est. StackMinds</span>
          <h1>
            <span className="row reveal">We build websites</span>
            <span className="row reveal">that <em className="a">work</em>, and the</span>
            <span className="row reveal"><span className="serif">marketing</span> that grows them.</span>
          </h1>
          <div className="hero-foot">
            <p className="lede reveal"><b>StackMinds is a founder-led digital studio.</b> We design and engineer fast, distinctive websites, then drive them with SEO, ads, and social, so your site becomes a real source of leads, not just a business card.</p>
            <div className="hero-cta reveal">
              <Link to="/portfolio" className="lnk">Selected work <span className="arw">→</span></Link>
              <Link to="/contact" className="lnk solid">Start a project <span className="arw">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marq">
        <div className="track">
          <span>{MARQUEE}</span>
          <span>{MARQUEE}</span>
        </div>
      </div>

      {/* MANIFESTO */}
      <section id="manifesto" className="sec">
        <div className="wrap">
          <span className="kick reveal"><span className="idx">(00)</span> <span className="dash" /> The studio</span>
          <p className="big" style={{ marginTop: 34 }}>
            <span className="reveal">Most agencies</span>{' '}
            <span className="reveal dim">hand you a pretty template and disappear.</span>{' '}
            <span className="reveal">We <span className="serif">design</span>, <span className="serif">build</span> and <span className="serif">grow</span></span>{' '}
            <span className="reveal">digital products with the care of people who actually ship them.</span>
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="sec">
        <div className="wrap">
          <div className="sec-top">
            <h2 className="reveal">Build. Market. <span className="serif">Grow.</span></h2>
            <div className="meta reveal">(01) · What we do<br />Three stages · one team</div>
          </div>
          <div className="svc">
            <div className="item reveal">
              <div className="no">01</div>
              <div>
                <h3>Build</h3>
                <div className="body">
                  <p>Fast, distinctive, conversion-ready websites, designed and engineered from scratch. The foundation everything else stands on.</p>
                  <div className="tags"><span>Web Design</span><span>Frontend Dev</span><span>Full-Stack</span><span>WordPress</span><span>Ecommerce</span><span>UI / UX</span></div>
                </div>
              </div>
            </div>
            <div className="item reveal">
              <div className="no">02</div>
              <div>
                <h3>Market</h3>
                <div className="body">
                  <p>We make sure the right people actually find your site, through search, paid media, and a presence that stays consistent.</p>
                  <div className="tags"><span>SEO</span><span>Google Ads</span><span>Meta Ads</span><span>Social Media</span><span>Content</span></div>
                </div>
              </div>
            </div>
            <div className="item reveal">
              <div className="no">03</div>
              <div>
                <h3>Grow</h3>
                <div className="body">
                  <p>We measure what happens, sharpen what converts, and keep lifting the numbers that matter, leads and sales.</p>
                  <div className="tags"><span>CRO</span><span>Analytics</span><span>Funnels</span><span>Email</span><span>Support</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="sec">
        <div className="wrap">
          <div className="sec-top">
            <h2 className="reveal">Selected <span className="serif">work</span></h2>
            <div className="meta reveal">(02) · Index<br />Live builds</div>
          </div>
          <div className="work-list">
            <Link className="work-row reveal" to="/portfolio/thenationbrief">
              <span className="wno">01</span>
              <span className="wname">TheNationBrief <span className="badge live">Live</span></span>
              <span className="wcat">Media Platform / Custom Build</span>
              <span className="warr">↗</span>
            </Link>
            <Link className="work-row reveal" to="/portfolio/rudr-textile">
              <span className="wno">02</span>
              <span className="wname">Rudr Textile Solutions <span className="badge live">Client</span></span>
              <span className="wcat">B2B Website / WordPress</span>
              <span className="warr">↗</span>
            </Link>
            <Link className="work-row reveal" to="/portfolio/stackminds-research">
              <span className="wno">03</span>
              <span className="wname">StackMinds Research <span className="badge live">Live</span></span>
              <span className="wcat">Service Business / Lead Gen</span>
              <span className="warr">↗</span>
            </Link>
          </div>
          <div className="reveal" style={{ marginTop: 40 }}>
            <Link to="/portfolio" className="lnk">View all work <span className="arw">↗</span></Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="sec">
        <div className="wrap">
          <div className="sec-top">
            <h2 className="reveal">The <span className="serif">studio</span></h2>
            <div className="meta reveal">(03) · Who<br />Founder-led</div>
          </div>
          <div className="cols">
            <div>
              <p className="lead reveal">A small studio that treats every build like its own product, <span className="serif">obsessively.</span></p>
              <p className="abody reveal">StackMinds is founder-led by Ashutosh, which means you work directly with the person designing and building your site. No account managers, no hand-offs, no bloated agency layers, just senior-level craft and a direct line to the maker.</p>
              <p className="abody reveal">We care about the details most shops skip: performance, type, motion, accessibility, and the small interactions that make a site feel expensive. And because we build real products of our own, a live news platform, a research studio, an ecommerce brand, we know what it takes to ship and run something, not just design a mockup.</p>
            </div>
            <div className="facts reveal">
              <div className="f"><span className="k">Founder</span><span className="v">Ashutosh</span></div>
              <div className="f"><span className="k">Discipline</span><span className="v">Design &amp; Full-Stack</span></div>
              <div className="f"><span className="k">Stack</span><span className="v">React · Node · WP</span></div>
              <div className="f"><span className="k">Live builds</span><span className="v acc">3 live sites</span></div>
              <div className="f"><span className="k">Based</span><span className="v">India, worldwide</span></div>
              <div className="f"><span className="k">Status</span><span className="v acc">Taking clients</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="sec">
        <div className="wrap">
          <div className="sec-top">
            <h2 className="reveal">How we <span className="serif">work</span></h2>
            <div className="meta reveal">(04) · Process<br />Simple · transparent</div>
          </div>
          <div className="steps reveal">
            <div className="st"><div className="no">01 / Discover</div><h3>Understand</h3><p>Your business, your customers, and what a win actually looks like, before a single pixel.</p></div>
            <div className="st"><div className="no">02 / Design &amp; Build</div><h3>Craft</h3><p>Design and development in the open, with regular check-ins. No surprises, no black box.</p></div>
            <div className="st"><div className="no">03 / Launch</div><h3>Ship</h3><p>We launch fast, wire up analytics, and make sure everything is measured from day one.</p></div>
            <div className="st"><div className="no">04 / Grow</div><h3>Improve</h3><p>Traffic, testing, and steady refinement of what turns visitors into customers.</p></div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact-cta">
        <div className="wrap">
          <div className="deep-panel">
            <span className="kick reveal"><span className="idx">(05)</span> <span className="dash" /> Let's talk</span>
            <div className="big" style={{ marginTop: 26 }}>
              <div className="reveal">Have a project</div>
              <div className="reveal">in <span className="serif">mind?</span> <Link to="/contact">Say hello ↗</Link></div>
            </div>
            <div className="crow">
              <div className="m reveal">Email<br /><b><a href="mailto:info@stackminds.in">info@stackminds.in</a></b></div>
              <div className="m reveal">WhatsApp<br /><b><a href="https://wa.me/919579837110" target="_blank" rel="noreferrer">+91 95798 37110</a></b></div>
              <div className="m reveal">Based<br /><b>India, worldwide</b></div>
              <div className="m reveal">Response<br /><b>Within a day</b></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
