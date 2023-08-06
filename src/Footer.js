import React from 'react'

const Footer = () => {
  const date=new Date();

  return (
    <div>
       <footer>
    <div  className="container">
      <p>&copy; {date.getFullYear()} Faiz Alam. All rights reserved.</p>
    </div>
  </footer>
    </div>
  )
}

export default Footer
