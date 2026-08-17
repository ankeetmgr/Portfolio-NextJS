"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { personalInfo } from '@/data/portfolioData';

const contactInfo = [
  {
    icon: <HiOutlineMail size={20} />,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: <HiOutlineLocationMarker size={20} />,
    label: 'Location',
    value: personalInfo.location,
    href: '#',
  },
];

const Contact = () => {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // No email-sending service is configured yet, so this opens the
  // visitor's own email app with a pre-filled message instead. To send
  // mail directly without opening an email client, sign up for a free
  // EmailJS account (emailjs.com), then swap this for an emailjs.send()
  // call using your own service ID, template ID, and public key.
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || 'a visitor'}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">
            Let&apos;s Connect
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
          <p className="text-dark-400 mt-4 max-w-md mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-2">
            <h3 className="text-white font-display font-semibold text-lg mb-8">
              Talk to me
            </h3>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-4 glass rounded-xl p-5 hover:border-primary-500/30 transition-all duration-300 group block"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-dark-950 transition-all duration-300 shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <span className="text-dark-500 text-xs uppercase tracking-wider">
                      {info.label}
                    </span>
                    <p className="text-white text-sm mt-1">{info.value}</p>
                  </div>
                </motion.a>
              ))}

              <div className="pt-4">
                <p className="text-dark-500 text-sm mb-3">Follow me</p>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-dark-800 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-700 hover:border-primary-500/30 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-dark-800 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-700 hover:border-primary-500/30 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-display font-semibold text-lg mb-8">
              Message me
            </h3>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="text-dark-400 text-sm mb-2 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-dark-800/80 border border-dark-700/50 text-white text-sm placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-dark-400 text-sm mb-2 block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-800/80 border border-dark-700/50 text-white text-sm placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-dark-400 text-sm mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/80 border border-dark-700/50 text-white text-sm placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-dark-950 font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  <span>→</span>
                </button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-primary-400 text-sm mt-2"
                  >
                    ✓ Opening your email app with the message pre-filled…
                  </motion.p>
                )}

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    ✕ Oops! Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
