import Link from 'next/link'
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
        <Link href="#" className="logo">
          <span className="logo-text">Gulshan Corporation</span>
        </Link>
        <nav className="nav-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="#about" className="nav-link">
            About
          </Link>
          <Link href="#contact" className="nav-link">
            Contact
          </Link>
        </nav>
      
      </div>
    </header>
  </div>
</>

    </div>
  )
}
