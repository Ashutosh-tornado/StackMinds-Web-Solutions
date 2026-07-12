import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="topbar">
        <div className="wrap in">
          <span>StackMinds, Digital Studio</span>
          <span className="stat hideM"><span className="d" />Available for new projects · 2026</span>
          <span className="hideM">Based in India · Working worldwide</span>
        </div>
      </div>
      <header className="sm-header">
        <div className="wrap in">
          <Link to="/" className="sm-logo">Stack<b>Minds</b></Link>
          <nav className="sm-nav">
            <NavLink to="/services"><span className="n">01</span>Services</NavLink>
            <NavLink to="/portfolio"><span className="n">02</span>Work</NavLink>
            <NavLink to="/contact"><span className="n">03</span>Contact</NavLink>
          </nav>
          <Link to="/contact" className="sm-navcta">Start a project ↗</Link>
        </div>
      </header>
    </>
  );
}
