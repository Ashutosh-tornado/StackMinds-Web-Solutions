import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MessageSquare, CheckCircle2, AlertCircle, Calendar, GraduationCap, Award, BookOpen } from 'lucide-react';

const WHATSAPP_NUMBER = '918637738449';
const WHATSAPP_MSG = encodeURIComponent(
  "Hi StackMinds Research Division! I'm interested in your Research & Academic Assistance services. Can you help me?"
);
const RESEARCH_EMAIL = 'expertsresearch9@gmail.com';

const DOMAINS = [
  'Computer Science',
  'Management',
  'Healthcare',
  'Agriculture',
  'Commerce',
  'Engineering',
  'Social Sciences',
  'Other'
];

const SERVICES = [
  'Thesis & Dissertation',
  'Research Proposal',
  'Literature Review',
  'Data Analysis',
  'Paper Formatting',
  'Citation & Referencing',
  'Editing & Proofreading',
  'Survey & Questionnaire',
  'Other'
];

export default function ResearchContact() {
  const formRef = useRef(null);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ ...toast, show: false }), 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const domain = formData.get('domain');
    const service = formData.get('service');
    const deadline = formData.get('deadline');
    const institution = formData.get('institution');
    const userMessage = formData.get('message');

    if (!name || !email || !userMessage || !domain || !service) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      showToast("Configuration error. Please try again later.", "error");
      return;
    }

    // Format message to include research fields so they display properly in the template
    const formattedMessage = `
[Research Assistance Inquiry]
University/Institution: ${institution || 'N/A'}
Research Domain: ${domain}
Service Type: ${service}
Deadline: ${deadline || 'N/A'}

Message:
${userMessage}
    `;

    emailjs
      .send(serviceId, templateId, {
        name,
        email,
        phone,
        message: formattedMessage
      }, publicKey)
      .then(() => {
        showToast('Message sent successfully!', 'success');
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        showToast('Something went wrong. Please try again.', 'error');
      });
  };

  return (
    <>
      <div className="bg-surface-container-low/30 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24">
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side: Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container text-on-primary-container text-xs font-bold tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Research Division
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold text-primary leading-tight sm:leading-[1.1] tracking-tight break-words">
                  Research<br />Consultation
                </h1>
                <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-lg">
                  Handled by StackMinds Research Assistance Division. Get in touch with our experts to discuss your academic requirements, research papers, data analysis or dissertation styling needs.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 hover:bg-primary hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Email Us</div>
                    <a href={`mailto:${RESEARCH_EMAIL}`} className="text-xl font-headline font-bold text-on-surface hover:text-primary transition-colors">
                      {RESEARCH_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 hover:bg-primary hover:text-white transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Call Us</div>
                    <a href="tel:+918637738449" className="text-xl font-headline font-bold text-on-surface hover:text-primary transition-colors">
                      +91 8637738449
                    </a>
                  </div>
                </div>

              </div>

              {/* Research trust indicators */}
              <div className="grid grid-cols-2 gap-4 bg-white/5 border border-outline-variant/10 rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#1dfba5]" />
                  <div>
                    <div className="text-sm font-bold text-on-surface">100% Plagiarism Free</div>
                    <div className="text-xs text-on-surface-variant">Quality Guaranteed</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-[#1dfba5]" />
                  <div>
                    <div className="text-sm font-bold text-on-surface">Peer-Reviewed Quality</div>
                    <div className="text-xs text-on-surface-variant">Expert Guidance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form UI */}
            <div className="relative group">
              <div className="bg-surface-container-lowest p-8 sm:p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_40px_rgba(33,49,86,0.06)] border border-outline-variant/10 relative z-10">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-on-surface block">Full Name *</label>
                      <input
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3.5 focus:ring-0 input-ghost-border transition-all font-body text-surface-tint"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-on-surface block">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3.5 focus:ring-0 input-ghost-border transition-all font-body text-surface-tint"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-on-surface block">Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="1234567890"
                        className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3.5 focus:ring-0 input-ghost-border transition-all font-body text-surface-tint"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-on-surface block">University/Institution</label>
                      <input
                        name="institution"
                        type="text"
                        placeholder="Harvard University"
                        className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3.5 focus:ring-0 input-ghost-border transition-all font-body text-surface-tint"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-on-surface block">Research Domain *</label>
                      <select
                        name="domain"
                        required
                        defaultValue=""
                        className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3.5 focus:ring-0 input-ghost-border transition-all font-body text-surface-tint"
                      >
                        <option value="" disabled>Select Domain</option>
                        {DOMAINS.map((domain) => (
                          <option key={domain} value={domain}>{domain}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-on-surface block">Service Type *</label>
                      <select
                        name="service"
                        required
                        defaultValue=""
                        className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3.5 focus:ring-0 input-ghost-border transition-all font-body text-surface-tint"
                      >
                        <option value="" disabled>Select Service</option>
                        {SERVICES.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-on-surface block">Deadline</label>
                    <div className="relative">
                      <input
                        name="deadline"
                        type="text"
                        placeholder="e.g. 15th June 2026 or 2 weeks"
                        className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3.5 focus:ring-0 input-ghost-border transition-all font-body text-surface-tint"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-on-surface block">Inquiry Details *</label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Tell us details about your research scope..."
                      required
                      className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3.5 focus:ring-0 input-ghost-border transition-all font-body text-surface-tint resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dim text-on-primary py-4 rounded-full font-headline font-bold shadow-lg shadow-primary/20 transition-all text-lg hover:scale-[1.02] relative z-30 pointer-events-auto"
                  >
                    Request Consultation
                  </button>
                </form>

                <div className="mt-8 text-center space-y-3">
                  <p className="text-on-surface-variant font-body text-xs font-medium">Prefer direct messaging?</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof window.gtag === "function") {
                        window.gtag('event', 'conversion', {
                          'send_to': 'AW-18109892306/FSCECKj6kKAcENKNvLtD'
                        });
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-[#00E676] hover:bg-[#00C853] text-white py-3 px-8 rounded-full font-headline font-bold text-sm shadow-lg shadow-[#00E676]/20 transition-all hover:scale-105"
                  >
                    <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
              {/* Soft decorative shadow behind card */}
              <div className="absolute top-10 -right-10 w-full h-full bg-primary/5 rounded-[2.5rem] -z-10 blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
          >
            <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl ${
              toast.type === 'success' 
                ? 'bg-green-500/90 border-green-400 text-white' 
                : 'bg-red-500/90 border-red-400 text-white'
            }`}>
              {toast.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              <span className="font-headline font-bold text-sm tracking-wide">{toast.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
