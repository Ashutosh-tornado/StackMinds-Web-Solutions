import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="sm-footer">
      <div className="wrap">
        <div className="top">
          <div className="brand">
            <div className="sm-logo">Stack<b>Minds</b></div>
            <p>A founder-led digital growth studio. We build websites and the marketing that grows them, for small and growing businesses.</p>
          </div>
          <div className="col">
            <h4>Studio</h4>
            <Link to="/portfolio">Work</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="col">
            <h4>Get in touch</h4>
            <a href="mailto:info@stackminds.in">info@stackminds.in</a>
            <a href="https://wa.me/919579837110" target="_blank" rel="noreferrer">WhatsApp +91 95798 37110</a>
            <span>India, working worldwide</span>
          </div>
        </div>
        <div className="bot">
          <span>© {new Date().getFullYear()} StackMinds Web Solutions</span>
          <span>Build · Market · Grow</span>
          <span>Designed &amp; built in-house</span>
        </div>
      </div>
    </footer>
  );
}
