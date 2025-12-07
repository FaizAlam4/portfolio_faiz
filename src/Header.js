import React, { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: '700',
            margin: 0,
            background: 'linear-gradient(135deg, #6366f1, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            FA
          </h1>
          
          {/* Desktop Menu */}
          <ul className='myList' style={{ display: window.innerWidth > 768 ? 'flex' : 'none' }}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Academics</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '22px',
              cursor: 'pointer',
              marginRight: '20px',
              transition: 'transform 0.3s ease'
            }}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            style={{
              display: window.innerWidth <= 768 ? 'block' : 'none',
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#6366f1'
            }}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'rgba(255, 255, 255, 0.98)',
            padding: '20px',
            borderTop: '1px solid rgba(99, 102, 241, 0.1)'
          }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li><a href="#about" onClick={handleLinkClick}>About</a></li>
              <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
              <li><a href="#education" onClick={handleLinkClick}>Academics</a></li>
              <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
              <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
