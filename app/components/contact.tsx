import React from 'react'

export default function Contact() {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact</title>
    <link rel="stylesheet" href="styles.css" />
    {/* Contact Section */}
    <div id="contact">
      <section className="contact-section">
        <div className="container">
          {/* Google Map and Contact Info */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.645233479542!2d67.01376287442906!3d24.841803146005585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33de406349b1b%3A0xf0eb0447826832e9!2sNew%20Haji%20Camp%2C%20Moulvi%20Tamizuddin%20Khan%20Rd%2C%20near%20Nomania%20Masjid%D8%8C%20Sultanabad%20Karachi%2C%20Karachi%20City%2C%20Sindh%2074200%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731184894638!5m2!1sen!2s"
              title="map"
              className="map"
              frameBorder={0}
              style={{ filter: "contrast(1.2) opacity(0.4)" }}
            ></iframe>
            <div className="contact-info">
              <div className="address">
                <h3>ADDRESS</h3>
                <p>New Haji Camp Sultanabad, Karachi, Pakistan</p>
              </div>
              <div className="email-phone">
                <h3>EMAIL</h3>
                <a href="mailto:example@email.com">example@email.com</a>
                <h3>PHONE</h3>
                <p>123-456-7890</p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Contact</h2>
            <p>Feel free to contact me</p>
            <form action="#" method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name"  />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"  />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="submit-button">
                Contact Me
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </>
  
    </div>
  )
}
