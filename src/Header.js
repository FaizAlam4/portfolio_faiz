import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from './ThemeContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    // Close menu first
    setIsMenuOpen(false);
    
    // Scroll to section after a small delay to allow menu to close
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <>
      {/* Backdrop Overlay */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            className="menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleMenu}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 98,
              backdropFilter: 'blur(2px)',
              pointerEvents: 'auto'
            }}
          />
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
      <nav>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <motion.h1
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('hero');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            style={{
              fontSize: '24px',
              fontWeight: '700',
              margin: 0,
              background: 'linear-gradient(135deg, #6366f1, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Me
          </motion.h1>
          
          {/* Desktop Menu */}
          <ul className='myList desktop-menu'>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Academics</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Desktop Theme Toggle */}
          <motion.button 
            onClick={toggleTheme}
            className="theme-toggle desktop-theme-toggle"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '22px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
            whileHover={{ rotate: 180 }}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </motion.button>

          {/* Mobile Controls (Theme Toggle + Hamburger) */}
          <div className="mobile-controls" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <motion.button 
              onClick={toggleTheme}
              className="theme-toggle mobile-theme-toggle"
              style={{
                background: 'none',
                border: 'none',
                fontSize: '22px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              whileHover={{ rotate: 180 }}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </motion.button>

            <motion.div 
              className="hamburger-menu" 
              onClick={toggleMenu} 
              style={{ 
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                padding: '5px'
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div 
                style={{
                  width: '25px',
                  height: '3px',
                  background: 'var(--text-primary)',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease'
                }}
                animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              />
              <motion.div 
                style={{
                  width: '25px',
                  height: '3px',
                  background: 'var(--text-primary)',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease'
                }}
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.div 
                style={{
                  width: '25px',
                  height: '3px',
                  background: 'var(--text-primary)',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease'
                }}
                animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              />
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              zIndex: 99,
              overflow: 'hidden'
            }}
          >
            <ul>
              <li><a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')}>Experience</a></li>
              <li><a href="#education" onClick={(e) => handleLinkClick(e, 'education')}>Academics</a></li>
              <li><a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  );
}

export default Header;
