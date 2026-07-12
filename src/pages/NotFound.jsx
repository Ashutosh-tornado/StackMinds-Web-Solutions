import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="sec" style={{ minHeight: '68vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap" style={{ textAlign: 'center', width: '100%' }}>
        <span className="kick" style={{ justifyContent: 'center' }}>
          <span className="idx">404</span> <span className="dash" /> Page not found
        </span>
        <h1 style={{ fontSize: 'clamp(64px,16vw,180px)', fontWeight: 800, letterSpacing: '-.04em', margin: '20px 0 12px', lineHeight: 1 }}>
          4<span className="serif" style={{ color: 'var(--acc)' }}>0</span>4
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: '44ch', margin: '0 auto 30px', fontSize: '17px', lineHeight: 1.6 }}>
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="lnk solid">Back to home</Link>
          <Link to="/portfolio" className="lnk">See our work</Link>
        </div>
      </div>
    </section>
  );
}
