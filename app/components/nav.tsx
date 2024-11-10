import React from 'react'

export default function Nav() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gulshan Corporation</title>
  <link rel="stylesheet" href="styles.css" />
  <link rel="icon" href="favicon.ico" type="image/x-icon" />
  {/* Navbar Section */}
  <div className="navbar">
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          <span className="logo-text">Gulshan Corporation</span>
        </a>
        <nav className="nav-links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      
      </div>
    </header>
  </div>
</>

    </div>
  )
}
