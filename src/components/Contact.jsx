import React from "react";
import "../CSS/Contact.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Contact({id,className}) {
  return (
    <div id={id}  className={className}>
      <section className="contact-body">
        <h5 style={{ textAlign: "center" }}>CONNECT TO-ME</h5>
        <p
          className="p1"
          style={{
            textAlign: "center",
            marginTop: "5px",
            letterSpacing: "0.6px",
          }}
        >
          If you want to connect to me
        </p>

        <div className="contact-inside">
          <div className="contact-inside-first">
            <div className="contact-icons">
              <i class="bi bi-share"></i>
              <h2>Social Profiles</h2>
              <div className="icons-body">
                <div className="icons-img">
                  <i class="bi bi-twitter"></i>
                </div>
                <div className="icons-img">
                  <i class="bi bi-facebook"></i>
                </div>
                <div className="icons-img">
                  <i class="bi bi-instagram"></i>
                </div>
                <div className="icons-img">
                  <i class="bi bi-linkedin"></i>
                </div>
                <div className="icons-img">
                  <i class="bi bi-github"></i>
                </div>
              </div>
            </div>

            <div className="contact-box">
              <div className="contact-box-first">
                <div className="contact-box-first-icon">
                  <i class="bi bi-envelope"></i>
                </div>
                <h2>EMAIL-ME</h2>
                <p>vishallodha1998@gmail.com</p>
              </div>
              <div className="contact-box-second">
                <div className="contact-box-first-icon">
                  <i class="bi bi-telephone"></i>
                </div>
                <h2>CONTACT-ME</h2>
                <p>91-7728974374</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-inside-2">
          <div className="name">
            <input
              className="name-first"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="name-first"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="subject">
            <input type="text" placeholder="Subject" />
          </div>

          <div>
            <textarea
              name=""
              id=""
              cols="85"
              rows="10"
              placeholder="Message"
              style={{ textAlign: "center" }}
            ></textarea>
          </div>

          <button>SEND MESSAGE</button>
        </div>
      </section>
    </div>
  );
}

export default Contact;
