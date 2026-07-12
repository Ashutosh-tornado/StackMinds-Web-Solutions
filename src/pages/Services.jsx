import { Link } from 'react-router-dom';
import { services, pillars, pillarInfo } from '../data/servicesData';
import { useReveal } from '../hooks/useReveal';

export default function Services() {
  useReveal();

  return (
    <>
      <section className="shero2">
        <div className="wrap">
          <span className="kick reveal"><span className="idx">✦</span> Services <span className="dash" /> Build · Market · Grow</span>
          <h1 className="reveal">Everything you need to <span className="serif">grow</span> online.</h1>
          <p className="sub reveal"><b>One team, three stages.</b> We build the website, drive the traffic, and turn that traffic into real leads and sales, so you're not stitching together five freelancers who never talk.</p>
        </div>
      </section>

      <div className="wrap">
        {pillars.map((pillar) => {
          const info = pillarInfo[pillar];
          const items = services.filter((s) => s.pillar === pillar);
          return (
            <section className="pgroup" key={pillar}>
              <div className="ph reveal">
                <span className="pn">{info.no}</span>
                <h2>{pillar}</h2>
                <span className="pt">{info.tag}</span>
              </div>
              <div>
                {items.map((s) => (
                  <Link className="srow reveal" to={`/services/${s.slug}`} key={s.slug}>
                    <div className="sinfo">
                      <h3>{s.name}</h3>
                      <p>{s.short}</p>
                    </div>
                    <span className="sarw">↗</span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="cta-sec">
        <div className="wrap">
          <div className="deep-panel center reveal">
            <div className="ph2">Not sure where to <span className="serif">start?</span></div>
            <p className="ptext">Tell us your goal and we'll recommend the right mix, no pressure, no jargon.</p>
            <div className="btns">
              <Link className="lnk" to="/contact">Book a free call ↗</Link>
              <Link className="lnk ghost" to="/portfolio">See our work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
