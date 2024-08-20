import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import '../Css/ContactUs.css';
import {
  MdWifiCalling3,
  MdLocationPin,
  MdOutlineAccessTimeFilled,
} from "react-icons/md";


import { motion} from "framer-motion";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to a server
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="font">


    {/* <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}> */}
      <motion.div initial={{width: 0}} animate={{width:"100%"}} exit={{x: window.innerHeight, transition: {duration: 0.1}}}>
   
      <div>
        <Container>
          <h1 className="contact_text" style={{ paddingTop: "10%" }}>Contact US</h1>
        
        </Container>
      </div>
      <div style={{ textAlign: "center", paddingTop: "5%" }}>
        <Row>
          <Col md={4}>
            <h1 style={{ color: "#4e4e85" }}>
              <MdWifiCalling3 size={50} />
            </h1>
            <h4>Call us</h4>
            <p>
              <b>
              <a href="tel:9786697424" target="blank">
              9786697424</a>
                <br />
                
              </b>
            </p>
          </Col>

          <Col md={4} className="location-column">
            <h1 style={{ color: "#4e4e85" }}>
              <MdLocationPin size={50} />
            </h1>
            <h4>Location</h4>
            <p>
              <b>
              FitMonk Unisex Gym,<br/>Aps complex, Annur road,<br/>Arasur, Thennampalayam, 
              <br/>Coimbatore - 641407
              </b>
            </p>
          </Col>

          <Col md={4} className="e-column">
            <h1 style={{ color: "#4e4e85" }}>
              <MdOutlineAccessTimeFilled size={50} />
            </h1>
            <h4>E-Address</h4>
            <p>
              <b>
                <a href="mailto:premampraveenfz333@gmail.com" target="blank">
              premampraveenfz333@gmail.com</a>
                <br />
               
              </b>
            </p>
          </Col>
        </Row>
      </div>
      <div style={{ paddingTop: "5%" }}>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h5 style={{ color: "#4e4e85" }}>For enquiry</h5>
            <h1>
              <b>Send us a message</b>
            </h1>
          </Col>
        </Row>
        <div className="container d-flex justify-content-center align-items-center vh-50 ">
  <form className="enquiry-form p-4 rounded shadow " onSubmit={handleSubmit}>
    <Row className="justify-content-center w-inherit">
      <Col md={10}>
        <Row className="g-3 ">
          <Col md={4} >
            <div className="form-field mb-2 gx-3">
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </Col>
          <Col md={4}>
            <div className="form-field mb-2">
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </Col>
          <Col md={4}>
            <div className="form-field mb-2">
              <input
                className="form-control"
                type="tel"
                id="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </Col>
        </Row>
        <Row className="g-3 ">
          <Col md={12}>
            <div className="form-field mb-2">
              <textarea
                className="form-control"
                id="message"
                placeholder="Write your message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12} className="text-center">
            <Button type="submit" className="btn btn-primary mt-2">
              Submit
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </form>
</div>

       
       
      </div>
    </motion.div>
    </div>
  );
}

export default Contact;