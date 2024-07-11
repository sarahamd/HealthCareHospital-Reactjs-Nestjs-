import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d4i40mz", "template_yw6b4rq", e.target, {
        publicKey: "3cPMWwX3cgymnMXq_",
      })
      .then((result) => {
        console.log(result.text);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.log(error.text);
      });

    setEmail("");
    setSubject("");
    setMessage("");
    setName("");
  };

  return (
    <section>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-9 ">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">User Name :</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address :</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject :</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                  value={subject}
                  onChange={handleSubjectChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message :</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  value={message}
                  onChange={handleMessageChange}
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "#4200FF",
                  border: "1px solid white",
                  height: "2.6rem",
                  width: "6rem",
                  color: "white",
                }}
                className=" btn-block my-3 mb-5 rounded-pill  "
              >
                submit
              </button>
            </form>
          </div>
          <div className="col-lg-3  ">
            <h2 style={{ color: "#4200ff", fontWeight: "bold" }}>Contact us</h2>
            <hr></hr>

            <ul className="fa-ul fs-5 ">
              <li className="mt-4 ">
                <span className="fa-li" style={{ color: "#4200FF" }}>
                  <FontAwesomeIcon icon={faHouse} />
                </span>
                <span className="mt-4">Warsaw, 00-967, Poland</span>
              </li>
              <li className="mt-4">
                <span className="fa-li" style={{ color: "#4200FF" }}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="mt-4">HealthCare@example.com</span>
              </li>
              <li className="mt-4">
                <span className="fa-li" style={{ color: "#4200FF" }}>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span className="mt-4">+ 48 234 567 88</span>
              </li>
            </ul>
          </div>
          <div className="col-md mt-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1222073449103!2d106.77590781537452!3d-6.2476228629146675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11b12c11ab7%3A0xcd48f5c775249316!2sHumanity%20First%20Indonesia!5e0!3m2!1sid!2sid!4v1605684563677!5m2!1sid!2sid"
              width={"100%"}
              height={"300px"}
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Humanity First Indonesia"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contactus;
