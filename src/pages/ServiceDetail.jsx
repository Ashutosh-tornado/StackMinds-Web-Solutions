import { useParams, Link } from 'react-router-dom';
import { getService, services } from '../data/servicesData';
import { useReveal } from '../hooks/useReveal';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const s = getService(serviceId);
  useReveal([serviceId]);

  if (!s) {
    return (
      <section className="sec">
        <div className="wrap">
          <span className="kick"><span className="idx">404</span> <span className="dash" /> Not found</span>
          <h1 style={{ fontSize: 'clamp(32px,6vw,64px)', margin: '20px 0' }}>Service not found</h1>
          <Link to="/services" className="lnk">← All services</Link>
        </div>
      </section>
    );
  }

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <div className="wrap detail-back">
        <Link to="/services">← All services</Link>
      </div>

      {/* hero */}
      <section className="shero">
        <div className="wrap">
          <span className="kick reveal"><span className="idx">Services / {s.pillar}</span> <span className="dash" /> {s.name}</span>
          <h1 className="reveal">{s.h1.lead}<span className="serif">{s.h1.serif}</span>{s.h1.tail}</h1>
          <p className="sub reveal">{s.sub}</p>
          <div className="sctas">
            <Link to="/contact" className="lnk solid reveal">Start a project ↗</Link>
            <a href="#included" className="lnk reveal">What's included</a>
          </div>
        </div>
      </section>

      {/* why */}
      <section className="sec">
        <div className="wrap two">
          <div className="lbl"><span className="kick reveal"><span className="idx">(01)</span> Why it matters</span><h2 className="reveal">{s.whyHead}</h2></div>
          <div className="body">
            {s.why.map((w, i) => (
              <p className="reveal" key={i}><b>{w.lead}</b> {w.text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* included */}
      <section className="sec" id="included">
        <div className="wrap">
          <div className="two">
            <div className="lbl"><span className="kick reveal"><span className="idx">(02)</span> What's included</span><h2 className="reveal">{s.includedHead}</h2></div>
            <div className="body"><p className="reveal">A few disciplines working together, here's what we cover.</p></div>
          </div>
          <div className="feat">
            {s.included.map((f, i) => (
              <div className="row reveal" key={i}>
                <div className="fno">{String(i + 1).padStart(2, '0')}</div>
                <h3>{f.title}</h3>
                <div className="fd">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="sec">
        <div className="wrap">
          <div className="two" style={{ marginBottom: 40 }}>
            <div className="lbl"><span className="kick reveal"><span className="idx">(03)</span> How we work</span><h2 className="reveal">A clear method</h2></div>
            <div className="body"><p className="reveal">{s.processIntro}</p></div>
          </div>
          <div className="steps reveal">
            {s.process.map((st, i) => (
              <div className="st" key={i}>
                <div className="no">{st.label}</div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* deliverables */}
      <section className="sec">
        <div className="wrap two">
          <div className="lbl"><span className="kick reveal"><span className="idx">(04)</span> What you get</span><h2 className="reveal">Deliverables</h2></div>
          <div className="body">
            <div className="deliv reveal">
              {s.deliverables.map((d, i) => (
                <div className="d" key={i}>
                  <span className="mk">✦</span>
                  <p>{d.title}<span>{d.note}</span></p>
                </div>
              ))}
            </div>
            <p className="honest reveal">{s.honest}</p>
          </div>
        </div>
      </section>

      {/* other services */}
      <section className="sec">
        <div className="wrap">
          <div className="two" style={{ marginBottom: 40 }}>
            <div className="lbl"><span className="kick reveal"><span className="idx">(05)</span> Also available</span><h2 className="reveal">Other services</h2></div>
            <div className="body"><p className="reveal">This works best alongside the rest of the growth system.</p></div>
          </div>
          <div className="others">
            {others.map((o) => (
              <Link to={`/services/${o.slug}`} className="reveal" key={o.slug}>
                <div className="t">{o.pillar}</div>
                <h3>{o.name}</h3>
                <p>{o.short}</p>
                <span className="go">Explore ↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="cta-sec">
        <div className="wrap">
          <div className="deep-panel center reveal">
            <div className="ph2">{s.cta.lead} <span className="serif">{s.cta.serif}</span></div>
            <p className="ptext">{s.cta.text}</p>
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
