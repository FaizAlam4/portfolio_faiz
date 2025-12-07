import React from 'react'

const EduCert = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 style={{
          fontSize: '36px',
          fontWeight: '700',
          marginBottom: '50px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #6366f1, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>Education & Certifications</h2>
        
        <div className="education-timeline">
          {/* Education Items */}
          <div className="education-item">
            <h3>🎓 Bachelor of Technology</h3>
            <p><strong>Computer Science Engineering</strong></p>
            <p><strong>Institution:</strong> Lovely Professional University</p>
            <p><strong>Duration:</strong> 2020 - 2024</p>
            <p><strong style={{ color: '#6366f1', fontSize: '16px' }}>CGPA: 9.05/10</strong></p>
          </div>

          <div className="education-item">
            <h3>📚 Higher Secondary (12th)</h3>
            <p><strong>Central Board of Secondary Education (CBSE)</strong></p>
            <p><strong>Institution:</strong> Kendriya Vidyalaya No. 1</p>
            <p><strong style={{ color: '#6366f1', fontSize: '16px' }}>Percentage: 91.6%</strong></p>
          </div>

          {/* Certifications Section */}
          <div style={{
            marginTop: '40px',
            padding: '30px',
            background: 'var(--card-bg)',
            borderRadius: '15px',
            boxShadow: 'var(--card-shadow)',
            border: '1px solid rgba(99, 102, 241, 0.1)',
            animation: 'fadeInUp 0.8s ease-out',
            transition: 'background 0.3s ease, box-shadow 0.3s ease'
          }}>
            <h3 style={{ 
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '20px',
              color: 'var(--text-primary)'
            }}>
              🏆 Professional Certifications
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '15px'
            }}>
              <div style={{
                padding: '15px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                borderRadius: '10px',
                borderLeft: '4px solid #6366f1',
                transition: 'all 0.3s ease'
              }}>
                <p style={{ margin: '0', fontWeight: '600', color: 'var(--text-primary)' }}>Node JS</p>
                <p style={{ margin: '5px 0 0 0', fontSize: '13px', color: 'var(--text-secondary)' }}>CipherSchool</p>
              </div>

              <div style={{
                padding: '15px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                borderRadius: '10px',
                borderLeft: '4px solid #ec4899',
                transition: 'all 0.3s ease'
              }}>
                <p style={{ margin: '0', fontWeight: '600', color: 'var(--text-primary)' }}>Database Management</p>
                <p style={{ margin: '5px 0 0 0', fontSize: '13px', color: 'var(--text-secondary)' }}>Coursera</p>
              </div>

              <div style={{
                padding: '15px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                borderRadius: '10px',
                borderLeft: '4px solid #8b5cf6',
                transition: 'all 0.3s ease'
              }}>
                <p style={{ margin: '0', fontWeight: '600', color: 'var(--text-primary)' }}>DevOps Certification</p>
                <p style={{ margin: '5px 0 0 0', fontSize: '13px', color: 'var(--text-secondary)' }}>CipherSchool</p>
              </div>

              <div style={{
                padding: '15px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                borderRadius: '10px',
                borderLeft: '4px solid #6366f1',
                transition: 'all 0.3s ease'
              }}>
                <p style={{ margin: '0', fontWeight: '600', color: 'var(--text-primary)' }}>DSA Self-paced</p>
                <p style={{ margin: '5px 0 0 0', fontSize: '13px', color: 'var(--text-secondary)' }}>GeeksforGeeks</p>
              </div>

              <div style={{
                padding: '15px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                borderRadius: '10px',
                borderLeft: '4px solid #ec4899',
                transition: 'all 0.3s ease'
              }}>
                <p style={{ margin: '0', fontWeight: '600', color: 'var(--text-primary)' }}>GitHub Master Course</p>
                <p style={{ margin: '5px 0 0 0', fontSize: '13px', color: 'var(--text-secondary)' }}>Udemy</p>
              </div>
            </div>

            <a 
              href="https://drive.google.com/drive/folders/1lepuDQLsZsN3qQQ6tm1knUtB7fWtzdCc?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="cert-link"
              style={{ marginTop: '20px', display: 'inline-block' }}
            >
              📂 View Certificate Folder
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EduCert
