import React from 'react';
import { Layout, Row, Col, Button, Typography, Card } from 'antd';
import { Link } from 'react-router-dom';
import '../Css/HomePage.css';
import expertTrainer from "../../assets/img10.jpg"
import blog1 from "../../assets/grp1.jpg"
import blog2 from "../../assets/grp2.jpg"
import blog3 from "../../assets/grp3.jpg"

const { Content } = Layout;
const { Title, Text } = Typography;

const HomePageContent = () => {
  return (
    <Content className='philosopher'>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <Title level={1} className="hero-title">Welcome to FitMonk Gym</Title>
          <Text className="hero-subtitle">Transform Your Body and Mind with Us</Text>
          <div className="hero-buttons">
            <Link to="/aboutUs">
              <Button type="primary" size="large" className="hero-button">Learn More About Us</Button>
            </Link>
            <Link to="/services">
              <Button type="default" size="large" className="hero-button">Explore Our Services</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <Title level={2} className="features-title">Why Choose FitMonk Gym?</Title>
        <div style={{display:'flex', justifyContent:"center"}}>
        <Row gutter={[16, 16]} className="features-row">
          <Col xs={24} md={8}>
            <div className="feature-card">
              <img src="https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114183.jpg?ga=GA1.1.1214865680.1706524652&semt=ais_hybrid" alt="Feature 1" className="feature-image" />
              <Title level={4} className="feature-title">Top-notch Equipment</Title>
              <Text className="feature-description">Our gym is equipped with the latest and most advanced fitness machines.</Text>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="feature-card">
              <img src={expertTrainer} alt="Feature 2" className="feature-image" />
              <Title level={4} className="feature-title">Expert Trainers</Title>
              <Text className="feature-description">Train with certified professionals who are dedicated to your success.</Text>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="feature-card">
              <img src="https://img.freepik.com/free-photo/woman-maintaining-asana-while-chakra-points-are-aligned_23-2149244017.jpg?ga=GA1.1.1214865680.1706524652&semt=ais_hybrid" alt="Feature 3" className="feature-image" />
              <Title level={4} className="feature-title">Holistic Approach</Title>
              <Text className="feature-description">We focus on both physical and mental well-being for a balanced lifestyle.</Text>
            </div>
          </Col>
        </Row>
        </div>
      </div>

      {/* New Section: Testimonials */}
      <div className="testimonials-section">
        <Title level={2} className="testimonials-title">What Our Members Say</Title>
        <div style={{display:"flex", justifyContent:'center'}}>
        <Row gutter={[16, 16]} className="testimonials-row" >
          <Col xs={24} md={8}>
            <Card className="testimonial-card">
              <Text className="testimonial-text">“FitMonk Gym has transformed my fitness journey. The trainers are amazing, and the equipment is top-notch!”</Text>
              <Text className="testimonial-author">- Sarah K.</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="testimonial-card">
              <Text className="testimonial-text">“The facilities at FitMonk Gym are state-of-the-art. I’ve never felt better!”</Text>
              <Text className="testimonial-author">- Emily R.</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="testimonial-card">
              <Text className="testimonial-text">“I love the holistic approach FitMonk Gym offers. It’s not just about physical fitness but mental well-being too!”</Text>
              <Text className="testimonial-author">- John D.</Text>
            </Card>
          </Col>
        </Row>
        </div>
      </div>

      {/* New Section: Blog Highlights */}
      <div className="blog-highlights-section">
        <Title level={2} className="blog-highlights-title">Latest Blog Posts</Title>
        <div style={{display:"flex", justifyContent:"center"}}>
        <Row gutter={[16, 16]} className="blog-highlights-row">
          <Col xs={24} md={8}>
            <Card className="blog-card">
              <img src={blog1} alt="Blog 1" className="blog-image" />
              <Title level={4} className="blog-title">5 Tips for Effective Workouts</Title>
              <Text className="blog-excerpt">Discover the best tips to get the most out of your workouts & achieve your fitness goals faster.</Text>
              <Link to="/blog/5-tips-for-effective-workouts">
                {/* <Button type="link">Read More</Button> */}
              </Link>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="blog-card">
              <img src={blog2} alt="Blog 2" className="blog-image" />
              <Title level={4} className="blog-title">Healthy Eating for Fitness</Title>
              <Text className="blog-excerpt">Learn how to complement your workouts with the right nutrition to maximize your results.</Text>
              <Link to="/blog/healthy-eating-for-fitness">
                {/* <Button type="link">Read More</Button> */}
              </Link>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="blog-card">
              <img src={blog3} alt="Blog 3" className="blog-image" />
              <Title level={4} className="blog-title">Stress Management Techniques</Title>
              <Text className="blog-excerpt">Explore effective strategies to manage stress and maintain a balanced lifestyle.</Text>
              <Link to="/blog/stress-management-techniques">
                {/* <Button type="link">Read More</Button> */}
              </Link>
            </Card>
          </Col>
        </Row>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <Title level={2} className="cta-title" style={{color:"white"}}>Start Your Fitness Journey Today!</Title>
        <Text className="cta-subtitle" style={{color:"white"}}>Join FitMonk Gym and take the first step towards a healthier, happier you.</Text>
        <div className="cta-buttons">
          <Link to="/services">
            <Button type="primary" size="large" className="cta-button">Explore Our Services</Button>
          </Link>
          <Link to="/contact">
            <Button type="default" size="large" className="cta-button">Get in Touch</Button>
          </Link>
        </div>
      </div>
    </Content>
  );
};

export default HomePageContent;
