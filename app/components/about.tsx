import React from "react";
import Link from "next/link";  // Import Link from next/link

export default function About() {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Me</title>
        <link rel="stylesheet" href="styles.css" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        {/* About Section */}
        <div id="about">
          <section className="about-section">
            <div className="container">
              {/* Image */}
              <div className="image-container">
                <img
                  src="/picture.jpg"
                  alt="About Me"
                  className="profile-image"
                />
              </div>
              {/* Content */}
              <div className="content">
                <h1 className="title">Read About Me</h1>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae nam ipsa, voluptatum cum delectus inventore
                  laboriosam iure quidem error assumenda earum asperiores, quos
                  atque expedita ut, reprehenderit praesentium! Nihil, hic.
                </p>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae nam ipsa, voluptatum cum delectus inventore
                  laboriosam iure quidem error assumenda earum asperiores, quos
                  atque expedita ut, reprehenderit praesentium! Nihil, hic.
                </p>
                {/* CV Button */}
                <Link href="/cv.png">
                  <a className="cv-button">Download CV</a> {/* Use <Link /> and <a> inside */}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
}
