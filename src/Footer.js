import React from 'react'

const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ margin: '0', color: 'var(--text-primary)' }}>
          Built with <span style={{ color: '#ec4899' }}>❤️</span> by Faiz Alam | 
          <span style={{ marginLeft: '10px' }}>© {date.getFullYear()} All rights reserved.</span>
        </p>
        <p style={{ margin: '5px 0 0 0', fontSize: '12px' }}>
          <a href="#" style={{ marginRight: '15px' }}>Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
