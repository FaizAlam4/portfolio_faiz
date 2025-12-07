import React from 'react';

import './App.css';
import Footer from './Footer';
import Header from './Header';
import PortBody from './PortBody';
import { ThemeProvider } from './ThemeContext';



function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        {/* Header with navigation links for smooth scroll */}
        <Header />

        {/* Main Content Sections */}
        <main>
          <PortBody />
        </main>

        {/* Footer with social links */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
