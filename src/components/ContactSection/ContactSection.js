import React, { useState } from "react";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";

const FACEBOOK_LINK = "https://www.linkedin.com/in/trupti-parsai/";
const LINKEDIN_LINK = "https://www.linkedin.com/in/trupti-parsai/";
const GITHUB_LINK = "https://www.linkedin.com/in/trupti-parsai/";
const BITBUCKET_LINK = "https://www.linkedin.com/in/trupti-parsai/";

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    document.querySelector("#submit-btn").disabled = true;
    document.querySelector("#submit-btn").innerHTML = "sending";
    window
      .sendMsg(name, email, message)
      .then((response) => {
        console.log(
          "SUCCESS. status=%d, text=%s",
          response.status,
          response.text
        );
        setName("");
        setEmail("");
        setMessage("");
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
        document.querySelector("#submit-btn").disabled = false;
        document.querySelector("#submit-btn").innerHTML = "Send";
      })
      .catch((err) => {
        console.log("FAILED. error=", err);
        document.querySelector("#submit-btn").disabled = false;
        document.querySelector("#submit-btn").innerHTML = "Send";
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 3000);
      });
  }

  return (
    <div
      className="background"
      style={{ backgroundImage: "url('/img/img_bg_main.jpg')" }}
    >
      <div id="contact" className="container section">
        <div className="row">
          <div className="col-md-12">
            <p id="contacts_header" className="section__title">
              Get in touch_
            </p>
          </div>
        </div>
        <div className="row contacts">
          <div className="col-md-6 col-lg-5">
            <div className="contacts__list">
              <dl className="contact-list">
                <dt>Skype:</dt>
                <dd>
                  <a href="skype:skypeid">trupti012</a>
                </dd>
                <dt>Email:</dt>
                <dd>
                  <a href="mailto:truptiparsai211095@gmail.com">
                    truptiparsai211095@gmail.com
                  </a>
                </dd>
              </dl>
            </div>
            <div className="contacts__social">
              <ul>
                <li>
                  <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href={GITHUB_LINK} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={BITBUCKET_LINK} target="_blank" rel="noreferrer">
                    Bitbucket
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="contacts__form">
              <p className="contacts__form-title" id="writeletter_header">
                Or just write me a letter here_
              </p>
              <form className="js-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    className="form-field js-field-name"
                    id="nameInput"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    required
                  />
                  <span className="form-validation"></span>
                  <span className="form-invalid-icon">
                    <i className="mdi mdi-close" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="form-group">
                  <input
                    className="form-field js-field-email"
                    id="emailInput"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Your e-mail"
                    required
                  />
                  <span className="form-validation"></span>
                  <span className="form-invalid-icon">
                    <i className="mdi mdi-close" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-field js-field-message"
                    id="messageInput"
                    placeholder="Type the message here"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                  ></textarea>
                  <span className="form-validation"></span>
                  <span className="form-invalid-icon">
                    <i className="mdi mdi-close" aria-hidden="true"></i>
                  </span>
                </div>
                <button
                  id="submit-btn"
                  className="site-btn site-btn--form"
                  type="submit"
                  value="Send"
                  style={{ cursor: "pointer" }}
                >
                  Send
                </button>
              </form>
            </div>
            <div className="footer"></div>
          </div>
        </div>
      </div>
      <SweetAlert
        show={showSuccess}
        type="success"
        title="Thanks for contacting me! I will reach out to you soon"
        onConfirm={() => setShowSuccess(false)}
      />
      <SweetAlert
        show={showError}
        type="error"
        title="Couldn't send message this time. Please email me directly"
        onConfirm={() => setShowError(false)}
      />
    </div>
  );
}

export default ContactSection;
