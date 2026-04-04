import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const date = new Date();

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/faiz-alam-9179b6135/', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/FaizAlam4', icon: '💻' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/FaizNexus/', icon: '🧩' },
    { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/faiza232574', icon: '🚀' }
  ];

  return (
    <footer id="contact" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '40px 0 20px 0',
      marginTop: '60px'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Social Links */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px', 
          flexWrap: 'wrap',
          marginBottom: '25px' 
        }}>
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: 'var(--card-bg)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontWeight: '600',
                fontSize: '14px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ 
          margin: '0', 
          color: 'var(--text-primary)',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          Built with <span style={{ color: '#ec4899' }}>❤️</span> by Faiz Alam | 
          <span style={{ marginLeft: '10px' }}>© {date.getFullYear()} All rights reserved.</span>
        </p>
        
        {/* Email */}
        <p style={{ 
          margin: '10px 0 0 0', 
          fontSize: '13px',
          color: 'var(--text-secondary)'
        }}>
          <a 
            href="mailto:mfaizalam32@gmail.com"
            style={{ 
              color: 'var(--primary-color)',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            mfaizalam32@gmail.com
          </a>
          {' | '}
          <a 
            href="tel:+917987072308"
            style={{ 
              color: 'var(--primary-color)',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            +91 7987072308
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
