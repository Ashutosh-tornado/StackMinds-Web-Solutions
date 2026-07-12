import { useParams, Link } from 'react-router-dom';
import { getProject } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const p = getProject(projectId);
  useReveal([projectId]);

  if (!p) {
    return (
      <section className="sec">
        <div className="wrap">
          <span className="kick"><span className="idx">404</span> <span className="dash" /> Not found</span>
          <h1 style={{ fontSize: 'clamp(32px,6vw,64px)', margin: '20px 0' }}>Project not found</h1>
          <Link to="/portfolio" className="lnk">All work</Link>
        </div>
      </section>
    );
  }

  const nextP = getProject(p.next);
  const shots = p.screenshots || [];

  const onImgError = (e) => {
    e.currentTarget.style.display = 'none';
    const ph = e.currentTarget.nextElementSibling;
    if (ph) ph.style.display = 'flex';
  };

  return (
    <>
      <div className="wrap detail-back">
        <Link to="/portfolio">All work</Link>
      </div>

      {/* hero */}
      <section className="chero">
        <div className="wrap">
          <span className="kick reveal"><span className="idx">Work / {p.index}</span> <span className="dash" /> {p.category}</span>
          <h1 className="reveal">{p.title1}<span className="serif">{p.titleSerif}</span></h1>
          <p className="sum reveal">{p.summary}</p>
          <div className="meta-grid reveal">
            <div className="mg"><div className="k">Role</div><div className="v">{p.meta.role}</div></div>
            <div className="mg"><div className="k">Type</div><div className="v">{p.meta.type}</div></div>
            <div className="mg"><div className="k">Year</div><div className="v">{p.meta.year}</div></div>
            <div className="mg"><div className="k">Stack</div><div className="v">{p.meta.stack}</div></div>
            <div className="mg"><div className="k">Status</div><div className="v acc">{p.meta.status}</div></div>
          </div>
        </div>
      </section>

      {/* screenshots gallery */}
      <div className="plate-wrap">
        <div className="wrap">
          {shots.length ? (
            <div className="shots">
              {shots.map((src, i) => (
                <figure className="plate reveal" key={src}>
                  <div className="bar">
                    <span className="dots"><i /><i /><i /></span>
                    <span className="url">{p.urlLabel}</span>
                    <span className="sys"><span className="d" />Live</span>
                  </div>
                  <img className="shot" src={src} alt={`${p.name} screenshot ${i + 1}`} loading="lazy" onError={onImgError} />
                  <div className="ph" style={{ display: 'none' }}>
                    <div className="nm">Screenshot {i + 1}</div>
                    <div className="hint">Save file at: public{src}</div>
                  </div>
                </figure>
              ))}
            </div>
          ) : (
            <div className="plate reveal">
              <div className="bar">
                <span className="dots"><i /><i /><i /></span>
                <span className="url">{p.urlLabel}</span>
                <span className="sys"><span className="d" />Live</span>
              </div>
              <div className="ph" style={{ display: 'flex' }}>
                <div className="nm">{p.name}</div>
                <div className="hint">▢ Real screenshot goes here</div>
              </div>
            </div>
          )}
          <div className="plate-cap">↑ Screenshots load from the <code>public/work/</code> folder.</div>
        </div>
      </div>

      {/* overview */}
      <section className="sec">
        <div className="wrap two">
          <div className="lbl"><span className="kick reveal"><span className="idx">(01)</span> Overview</span><h2 className="reveal">The brief</h2></div>
          <div className="body">
            {p.overview.map((t, i) => <p className="reveal" key={i}>{t}</p>)}
          </div>
        </div>
      </section>

      {/* challenge */}
      <section className="sec">
        <div className="wrap two">
          <div className="lbl"><span className="kick reveal"><span className="idx">(02)</span> Challenge</span><h2 className="reveal">What was hard</h2></div>
          <div className="body">
            {p.challenge.map((c, i) => (
              <p className="reveal" key={i}><b>{c.lead}</b> {c.text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* approach */}
      <section className="sec">
        <div className="wrap">
          <div className="two">
            <div className="lbl"><span className="kick reveal"><span className="idx">(03)</span> Approach</span><h2 className="reveal">What we built</h2></div>
            <div className="body"><p className="reveal">{p.approachIntro}</p></div>
          </div>
          <div className="feat">
            {p.approach.map((a, i) => (
              <div className="row reveal" key={i}>
                <div className="fno">{String(i + 1).padStart(2, '0')}</div>
                <h3>{a.title}</h3>
                <div className="fd">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* details */}
      <section className="sec">
        <div className="wrap two">
          <div className="lbl"><span className="kick reveal"><span className="idx">(04)</span> Details</span><h2 className="reveal">Under the hood</h2></div>
          <div className="body">
            <p className="reveal" style={{ marginBottom: 26 }}>{p.detailsIntro}</p>
            <div className="stack reveal">
              {p.stack.map((s) => <span key={s}>{s}</span>)}
            </div>
            <div className="status-grid reveal">
              {p.statusGrid.map((s, i) => (
                <div className="s" key={i}>
                  <div className={`v ${s.acc ? 'acc' : ''}`}>{s.v}</div>
                  <div className="k">{s.k}</div>
                </div>
              ))}
            </div>
            <p className="honest reveal">{p.honest}</p>
            <div style={{ marginTop: 30 }} className="reveal">
              <a className="lnk solid" href={p.liveUrl} target="_blank" rel="noreferrer">Visit the live site ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* next project */}
      {nextP && (
        <section className="nextp">
          <div className="wrap">
            <div className="k">Next project</div>
            <Link className="big2" to={`/portfolio/${nextP.slug}`}>
              <h2>{nextP.name}</h2>
              <span className="arw">↗</span>
            </Link>
          </div>
        </section>
      )}

      {/* cta */}
      <section className="cta-sec">
        <div className="wrap">
          <div className="deep-panel center reveal">
            <div className="ph2">Have something to <span className="serif">build?</span></div>
            <p className="ptext">Whether it's a product of your own or a site for your business, let's make something that actually performs.</p>
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
