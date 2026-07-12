import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const NEEDS = ['Website', 'SEO', 'Ads', 'Social', 'Not sure yet'];

export default function Contact() {
  useReveal();
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' });
  const [needs, setNeeds] = useState([]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggle = (n) => setNeeds((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]));

  const submit = (e) => {
    e.preventDefault();
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Need: ${needs.join(', ') || 'Not specified'}`,
      `Budget: ${form.budget || 'Not specified'}`,
      '',
      form.message,
    ].join('\n');
    const subject = `New project enquiry, ${form.name || 'StackMinds'}`;
    window.location.href = `mailto:info@stackminds.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
  };

  return (
    <main className="cmain">
      <div className="wrap">
        <div className="chead">
          <span className="kick reveal"><span className="idx">✦</span> Contact <span className="dash" /> Response within a day</span>
          <h1 className="reveal">Let's build <span className="serif">something.</span></h1>
          <p className="reveal">Tell us a little about your business and what you're after. Whether it's a new site, more traffic, or the whole growth engine, we'll get back to you within a day.</p>
        </div>

        <div className="cgrid">
          {/* form */}
          <form className="formwrap reveal" onSubmit={submit}>
            <div className="field">
              <label className="flabel">Your name</label>
              <input type="text" placeholder="Jane Doe" value={form.name} onChange={set('name')} />
            </div>
            <div className="field">
              <label className="flabel">Email</label>
              <input type="email" placeholder="jane@company.com" value={form.email} onChange={set('email')} />
            </div>
            <div className="field">
              <label className="flabel">What do you need?</label>
              <div className="chiprow">
                {NEEDS.map((n) => (
                  <button
                    type="button"
                    key={n}
                    className={`chip ${needs.includes(n) ? 'on' : ''}`}
                    onClick={() => toggle(n)}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
            <div className="field">
              <label className="flabel">Budget range (optional)</label>
              <select value={form.budget} onChange={set('budget')}>
                <option value="">Select a range</option>
                <option>Under ₹25k</option>
                <option>₹25k – ₹75k</option>
                <option>₹75k – ₹2L</option>
                <option>₹2L+</option>
              </select>
            </div>
            <div className="field">
              <label className="flabel">Tell us about your project</label>
              <textarea placeholder="A few lines about your business, your goals, and your timeline…" value={form.message} onChange={set('message')} />
            </div>
            <button className="submit" type="submit">Send message →</button>
            <div className="privacy">🔒 Your details stay private. We never share your information.</div>
          </form>

          {/* info */}
          <aside className="info reveal">
            <span className="istatus"><span className="d" />Available for new projects</span>
            <h3>Prefer to talk directly?</h3>
            <p className="isub">The fastest way to reach us is WhatsApp or email, you'll get a real reply from the person who'd build your project.</p>
            <div className="chan"><div className="k">Email</div><a className="v" href="mailto:info@stackminds.in">info@stackminds.in</a></div>
            <div className="chan"><div className="k">WhatsApp</div><a className="v" href="https://wa.me/919579837110" target="_blank" rel="noreferrer">+91 95798 37110</a></div>
            <div className="chan"><div className="k">Call</div><a className="v" href="tel:+919579837110">+91 95798 37110</a></div>
            <div className="chan"><div className="k">Based</div><div className="v">India, working worldwide</div></div>
            <div className="ifoot">// Founding-client spots open, early projects get a special rate.</div>
          </aside>
        </div>
      </div>
    </main>
  );
}
