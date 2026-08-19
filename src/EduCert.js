import React from 'react';
import { motion } from 'framer-motion';

const EduCert = () => {
  const certifications = [
    { name: 'Database Management Essentials', provider: 'Univ. of Colorado / Coursera', color: '#ec4899' },
    { name: 'DBMS', provider: 'Infosys', color: '#8b5cf6' },
    { name: 'Node.js & Backend', provider: 'CipherSchools', color: '#6366f1' },
    { name: 'Self-Paced DSA', provider: 'GeeksforGeeks', color: '#6366f1' }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '60px',
            background: 'linear-gradient(135deg, #6366f1, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Education & Certifications
        </motion.h2>
        
        {/* Education Cards Grid */}
        <div className="education-grid">
          <motion.div 
            className="education-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(99, 102, 241, 0.25)' }}
          >
            <div className="education-icon">🎓</div>
            <h3 className="education-degree">Bachelor of Technology</h3>
            <p className="education-major">Computer Science Engineering</p>
            <div className="education-details">
              <p className="education-institution">Lovely Professional University</p>
              <p className="education-duration">2020 - 2024</p>
              <div className="education-grade">
                <span className="grade-label">CGPA:</span>
                <span className="grade-value">9.05/10</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="education-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(236, 72, 153, 0.25)' }}
          >
            <div className="education-icon">📚</div>
            <h3 className="education-degree">Higher Secondary (12th)</h3>
            <p className="education-major">Central Board of Secondary Education</p>
            <div className="education-details">
              <p className="education-institution">Kendriya Vidyalaya No. 1</p>
              <p className="education-duration">CBSE Board</p>
              <div className="education-grade">
                <span className="grade-label">Percentage:</span>
                <span className="grade-value">91.6%</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div 
          className="certifications-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="certifications-header">
            <h3 className="certifications-title">
              <span className="cert-icon">🏆</span>
              Professional Certifications
            </h3>
            <p className="certifications-subtitle">Industry-recognized credentials that enhance my technical expertise</p>
          </div>
          
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div 
                key={cert.name}
                className="cert-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{ '--cert-color': cert.color }}
              >
                <div className="cert-content">
                  <p className="cert-name">{cert.name}</p>
                  <p className="cert-provider">{cert.provider}</p>
                </div>
                <div className="cert-badge">✓</div>
              </motion.div>
            ))}
          </div>

          <motion.a 
            href="https://drive.google.com/drive/folders/1lepuDQLsZsN3qQQ6tm1knUtB7fWtzdCc?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="view-certificates-btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn-icon">📂</span>
            <span>View All Certificates</span>
            <span className="btn-arrow">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default EduCert;
