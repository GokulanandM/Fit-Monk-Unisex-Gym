import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { motion } from "framer-motion";
import '../Css/Gallery.css';
import img1 from "../../assets/img10.jpg"
import img2 from "../../assets/img7.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img12.jpg"
import img6 from "../../assets/img6.jpg"
import img7 from "../../assets/img7.jpg"
import img8 from "../../assets/img10.jpg"
import img9 from "../../assets/img5.jpg"

const image = [
  img1,
  img2,
  img3,
  img4,img5,img6,img7,img8,img9
];

const galleryImages = image.map((img) => ({
  original: img,
  thumbnail: img,
}));


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
          <h1 className="contact_text" style={{ paddingTop: "10%" }}>Gallery</h1>
          </Container>
        </div>
        <div style={{ paddingTop: "3%", paddingBottom: "5%" }}>
          <Container>
            <Row>
              <Col md={6}>
                <div className="gallery">
                  {image.map((image, index) => (
                    <div className="gallery-item" key={index}>
                      <img src={image} alt={`img ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </Col>
              <Col md={6} style={{  paddingLeft: "3%", paddingTop:"8%" }}>
          
              <ImageGallery
                  items={galleryImages}
                  additionalClass="custom-image-gallery"
                />
           
              </Col>
            </Row>
     
          </Container>
        </div>
      </motion.div>
    </div>
  );
}

export default Gallery;
