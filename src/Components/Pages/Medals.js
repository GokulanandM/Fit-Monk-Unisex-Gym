import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import '../Css/Gallery.css';
import img1 from "../../assets/grp4.jpg"
import img2 from "../../assets/grp5.jpg"
import img3 from "../../assets/grp2.jpg"
import img4 from "../../assets/a1.jpg"
import img5 from "../../assets/a2.jpg"
import img6 from "../../assets/a3.jpg"
import img7 from "../../assets/grp2.jpg"
import img8 from "../../assets/grp3.jpg"
import img9 from "../../assets/img3.jpg"

const image = [
  img1,
  img2,
  img3,
  img4,img5,img6,img7,img8,img9
];



function Gallery() {
  return (
    <div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <div>
          <Container>
          <h1 className="contact_text" style={{ paddingTop: "10%" }}>Medals & <br/> National Level Championship Trophies</h1>
          </Container>
        </div>
        <div style={{ paddingTop: "3%", paddingBottom: "5%" }}>
          <Container>
            <Row>
              <Col>
                <div className="gallery">
                  {image.map((image, index) => (
                    <div className="gallery-item" key={index}>
                      <img className="medal" style={{height:'40vh'}} src={image} alt={`img ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </Col>
         
            </Row>
     
          </Container>
        </div>
      </motion.div>
    </div>
  );
}

export default Gallery;
