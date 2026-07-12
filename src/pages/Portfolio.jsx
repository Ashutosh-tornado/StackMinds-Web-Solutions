import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

export default function Portfolio() {
  useReveal();

  return (
    <>
      <section className="whero">
        <div className="wrap">
          <span className="kick reveal"><span className="idx">✦</span> Selected work <span className="dash" /> 2026</span>
          <h1 className="reveal">Real sites,<br />really <span className="serif">shipped.</span></h1>
          <p className="sub reveal"><b>Three live builds you can visit right now.</b> A media platform, a B2B client site, and a service business, spanning custom front-end, WordPress, and lead-generation design.</p>
        </div>
      </section>

      <section className="projects">
        <div className="wrap">
          {projects.map((p) => (
            <Link className="proj reveal" to={`/portfolio/${p.slug}`} key={p.slug}>
              <div className="left">
                <div className="pno">{p.index}</div>
                <span className={`badge ${p.statusType}`}>● {p.status}</span>
              </div>
              <div className="right">
                <div className="name">{p.name} <span className="arw">↗</span></div>
                <p className="desc">{p.listDesc}</p>
                <div className="pmeta">
                  <div className="mm">Type<b>{p.listMeta.type}</b></div>
                  <div className="mm">Build<b>{p.listMeta.build}</b></div>
                  <div className="mm">Year<b>{p.listMeta.year}</b></div>
                  <div className="mm">Role<b>Design + Build</b></div>
                </div>
                <div className="ptags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="cnote">
        <div className="wrap in2">
          <span className="mono">// <b>Note:</b> These are real, live sites you can open and inspect. More case studies are added as new client work ships, we'd rather show three real builds than a wall of stock mockups.</span>
        </div>
      </div>

      <section className="cta-sec">
        <div className="wrap">
          <div className="deep-panel center reveal">
            <div className="ph2">Want to be <span className="serif">next?</span></div>
            <p className="ptext">We're taking on a limited number of founding projects at a special rate. Let's build something real together.</p>
            <div className="btns">
              <Link className="lnk" to="/contact">Start a project ↗</Link>
              <Link className="lnk ghost" to="/">Back to home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
