import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
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
  const message = formData.get('message');
  const phone = formData.get('phone');

  if (!name || !email || !message) {
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

  emailjs
    .send(serviceId, templateId, {
      name,
      email,
      phone,
      message
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
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold text-primary leading-tight sm:leading-[1.1] tracking-tight break-words">
                Let's Work<br />Together
              </h1>
              <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-lg">
                Have a project in mind? Let's build something amazing together. We're ready to turn your vision into a digital masterpiece.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 hover:bg-primary hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Email Us</div>
                  <a href="mailto:stackmindswebsolutions@gmail.com" className="text-xl font-headline font-bold text-on-surface hover:text-primary transition-colors">
                    info@stackminds.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 hover:bg-primary hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Call Us</div>
                  <a href="tel:+919579837110" className="text-xl font-headline font-bold text-on-surface hover:text-primary transition-colors">
                    +91 9579837110
                  </a>
                </div>
              </div>

            </div>

            {/* Decorative Image */}
            <div className="rounded-[2rem] overflow-hidden h-48 opacity-70 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-500 shadow-inner">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC22-goRZWTjh2J-g_-xueTGwjwYH8v4Tl_nuCGXS3MQk3A1e3QaQq1zqAMkDhJMlWGORHxFek4NZst4PYdiAyL-pfCSdgKC5sAuUjoLTtvz3x-cpadGppIcysKkj5V0KEVvaVaXDqvHEJwgELvlHJkRVANuQVAbtYuRn_qsEv9i557ktzInFw_E6KK_zX1ZW20HtvLFNVUhKRSewDT4X2fzNtjo1rZ0sDl5t1yNftIc1VM21P1g7-g7DI0lWJWqQOmAA8c9oYJWQ" alt="Office desk" className="w-full h-full object-cover" />
            </div>

          </div>

          {/* Right Side: Form UI */}
          <div className="relative group">
            <div className="bg-surface-container-lowest p-8 sm:p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_40px_rgba(33,49,86,0.06)] border border-outline-variant/10 relative z-10 transition-transform duration-500">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface block">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-4 focus:ring-0 input-ghost-border transition-all font-body text-surface-tint"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface block">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-4 focus:ring-0 input-ghost-border transition-all font-body text-surface-tint"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface block">Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="1234567890"
                    className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-4 focus:ring-0 input-ghost-border transition-all font-body text-surface-tint"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface block">Your Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project goals..."
                    required
                    className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-4 focus:ring-0 input-ghost-border transition-all font-body text-surface-tint resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dim text-on-primary py-4 rounded-full font-headline font-bold shadow-lg shadow-primary/20 transition-all text-lg hover:scale-[1.02] relative z-30 pointer-events-auto"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-10 text-center space-y-4">
                <p className="text-on-surface-variant font-body text-sm font-medium">Prefer a quick chat?</p>
                <a
                  href="https://wa.me/919579837110"
                  target="_blank"
                  rel="noopener noreferrer"
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