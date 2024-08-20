import React from 'react';
import { Layout,Typography, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaRunning, FaDumbbell } from "react-icons/fa";
import { MdFitnessCenter } from "react-icons/md";
import {Card, Container, Row, Col, } from "react-bootstrap";
import "../Css/AboutUs.css";
import "../../index.css";
import aboutImg from "../../assets/img3.jpg"

const { Content } = Layout;
const { Title, Text } = Typography;
const Gallerycard = [
  {
    title: <GiWeightLiftingUp size={60} />,
    subtitle: "500+",
    content: "Active Members",
  },
  {
    title: <FaRunning size={60} />,
    subtitle: "200+",
    content: "Cardio Sessions",
  },
  {
    title: <FaDumbbell size={60} />,
    subtitle: "1K+",
    content: "Weights Lifted (kg)",
  },
  {
    title: <MdFitnessCenter size={60} />,
    subtitle: "150+",
    content: "Personal Training Sessions",
  },
];


function AboutUs() {
  return (
    <Content className='philosopher' style={{ backgroundColor: '#f7f7f7', padding: '8% 10%' }}>
      <div style={{ marginBottom: '50px' }}>
        <h2 className='about_title' style={{ fontWeight: 'bold', color: '#333',fontFamily:"'Philosopher',sans-serif"}}>About FitMonk Unisex Gym</h2>
        <Text className='about_text' style={{ fontSize: '16px', color: '#666',fontFamily:"'Philosopher',sans-serif"}}>
          Your journey to fitness and wellness starts here.
        </Text>
      </div>
      <Row gutter={[32, 32]}>
        <Col xs={12} md={6}>
          <img 
            src={aboutImg}
            alt="About Us" 
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)',height:"80vh" }}
          />
        </Col>
        <Col xs={12} md={6}>
          <Title className='fontType' level={3} style={{ color: '#32cd32' }}>Who We Are</Title>
          <Text className='fontType' style={{ color: '#666', fontSize: '16px', lineHeight: '1.8' }}>
            At FitMonk Unisex Gym, we believe in creating a space where everyone feels welcome and motivated to achieve their fitness goals. Our gym offers a wide range of facilities, from state-of-the-art equipment to expert personal trainers who are dedicated to helping you every step of the way.
          </Text>
          <Title className='fontType' level={3} style={{ marginTop: '30px', color: '#ff4500' }}>Our Mission</Title>
          <Text className='fontType' style={{ color: '#666', fontSize: '16px', lineHeight: '1.8' }}>
            Our mission is to empower individuals of all fitness levels to lead healthier, more active lives. We focus on providing personalized fitness plans, dynamic group classes, and a supportive community that encourages everyone to push their limits and reach new heights.
          </Text>
         <div style={{display:"flex", justifyContent:"center"}}>
         <Button  className='fontType'
            type="primary" 
            shape="round" 
            icon={<SmileOutlined />} 
            size="large" 
            style={{  backgroundColor: '#32cd32', borderColor: '#32cd32' }}
          >
            Join Our Community
          </Button>
         </div>
        </Col>
      </Row>
      <div style={{ paddingTop: "5%", paddingBottom: "5%" }}>
              <Container>
                <Row>
                  {Gallerycard.map((card, index) => (
                    <Col md={6} lg={3} key={index} style={{ padding:"2%",}}>
                      <Card className="card_back"
                        style={{
                          width: "15rem",
                         
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        <Card.Body>
                          <Card.Title style={{ paddingBottom: "5%" }}>
                            {card.title}
                          </Card.Title>
                          <Card.Subtitle
                            className="mb-2"
                            style={{ fontSize: "xx-large" }}
                          >
                            {card.subtitle}
                          </Card.Subtitle>
                          <Card.Text>{card.content}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
    </Content>
  );
}

export default AboutUs;
