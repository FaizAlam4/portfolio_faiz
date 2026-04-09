import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/faiz-alam-9179b6135/', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/FaizAlam4', icon: '💻' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/FaizNexus/', icon: '🧩' },
    { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/faiza232574', icon: '🚀' }
  ];

  return (
    <>
      <section className="contact-last-section" id="contact">
        <div className="container contact-last-wrap">
          <div className="contact-last-accent" />
          <motion.div
            className="contact-last-intro"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h3>Let's Connect</h3>
            <p>Open to software engineering roles, collaboration, and meaningful tech conversations.</p>
          </motion.div>

          <motion.div
            className="contact-last-grid"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <div className="contact-last-card">
              <h4>Find Me On</h4>
              <ul className="contact-last-social-list">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-last-link"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <span className="contact-last-icon">{link.icon}</span>
                      <span>{link.name}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-last-card">
              <h4>Direct Contact</h4>
              <ul className="contact-last-contact-list">
                <li>
                  <a href="mailto:mfaizalam32@gmail.com" className="contact-last-link">
                    <span className="contact-last-icon">✉️</span>
                    <span>mfaizalam32@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+917987072308" className="contact-last-link">
                    <span className="contact-last-icon">📞</span>
                    <span>+91 79870 72308</span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-minimal-wrap">
          <p className="footer-copy">
            Built with <span className="footer-heart">❤️</span> by Faiz Alam
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
