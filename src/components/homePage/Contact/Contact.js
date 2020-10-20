import React from "react"
import "./Contact.scss"

class Contact extends React.Component {
  render() {
    return (
      <section id="Contact" className="contact fadeIn">
        <div className="contact__box">
          <h2>Contact us</h2>

          <form
            name="contact-da"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <label htmlFor="name"></label>
            <input
              placeholder="First name"
              className="contact__firstname"
              type="text"
              name="name"
              id="name"
            />

            <label htmlFor="email"></label>
            <input
              placeholder="Email"
              className="contact__email"
              type="text"
              name="email"
              id="email"
            />

            <label htmlFor="message"></label>
            <textarea
              className="contact__textarea"
              name="message"
              id="message"
              rows="6"
              required
            />

            <button className="contact__btn g-btn" type="submit" value="Send">
              <p>Send</p>
            </button>
          </form>
        </div>
      </section>
    )
  }
}

export default Contact
