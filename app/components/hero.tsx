import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hero Section</title>
      <link rel="stylesheet" href="styles.css" />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          {/* Text Content */}
          <div className="text-content">
            <h1 className="title">I am Front End Developer</h1>
            <div className="line" />
            <p className="description">
              Passionate about crafting beautiful and functional digital
              experiences. I specialize in front-end development, UI/UX
              design, and bringing ideas to life with creative solutions.
            </p>
            <div className="button-container">
              {/* Corrected usage of Link */}
              <Link href="#contact" passHref>
                <button className="contact-button">Contact</button>
              </Link>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="image-container">
            <img
              src="/picture.jpg"
              alt="Profile Picture"
              className="profile-image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
