import React from 'react'
import TypingAnimation from './TypingAnimation'
function Header() {

// hi
  return (
    <div>
       <header>
    <nav>
      <div  className="container c2">
        <h1 style={{"textAlign":"center","fontWeight":"bold","fontSize":"37px"}}>WELCOME TO MY PORTFOLIO</h1>
        <ul className='myList'>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Academics</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
    </div>
  )
}

export default Header
