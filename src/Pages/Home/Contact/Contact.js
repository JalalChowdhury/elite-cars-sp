import React, { useRef } from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";

const Contact = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const descriptionRef = useRef();

  const handleContactForm = e => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const description = descriptionRef.current.value;

    const contactUser = { name, email, subject, description,messageDate: new Date().toDateString('dd/mm/yyyy') };

    // send to the server
    fetch('https://enigmatic-citadel-92082.herokuapp.com/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(contactUser)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {

          alert("Your message send Successfully.As soon as,we will contact with you");
          e.target.reset();

        }
      });

    e.preventDefault();
  }


  return (
    <div className="contact">
      <section id="contact-section">
        <Fade bottom duration={2500}>
          <div className="form-container">
            <h2>Contact Us</h2>
            <p>FEEL FREE TO SEND US A MESSAGE
              OR ASK FOR A FREE QUOTE</p>
            <div className="contactForm">
              <div>
                <i className="fa fa-map-marker"></i>
                <span className="form-info"> 29 Amborkana ,Sylhet BD</span>
                <br />
                <i className="fa fa-phone"> </i>
                <span className="form-info"> +880 1320-456789</span>
                <br />
                <i className="fa fa-envelope"></i>
                <span className="form-info"> CarGalleria7@gmail.com</span>
              </div>
              <div className="form-fields">
                <form onSubmit={handleContactForm}>


                  <input
                    type="text" placeholder="Your Name" required
                    ref={nameRef}
                  />
                  <input
                    type="text" placeholder="Phone Number"

                  />
                  <br />
                  <input
                    type="Email" placeholder="Email" required
                    ref={emailRef}
                  />
                  <br />
                  <input
                    type="text" placeholder="Subject of this message"
                    ref={subjectRef}
                  />
                  <br />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    required
                    ref={descriptionRef}
                  ></textarea>
                  <br />
                  <button className="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Contact;