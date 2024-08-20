import React from 'react';
import { Layout, Row, Col, Typography, Input, Button } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import '../../index.css';

const { Footer } = Layout;
const { Title, Text } = Typography;

const FitMonkFooter = () => {
  return (
    <Footer className='fontType' style={{ backgroundColor: '#333', color: '#fff', padding: '50px 0',fontFamily: 'Philosopher, sans-serif'}}>
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Title className='fontType' level={4} style={{ color: '#fff'}}>FitMonk Gym</Title>
            <Text style={{ color: '#ccc' }} className='fontType'>Your ultimate fitness partner. Join us and reach your fitness goals with the best facilities and trainers.</Text>
          </Col>
          <Col xs={24} md={8}>
            <Title level={4} style={{ color: '#fff' }} className='fontType'>Quick Links</Title>
            <ul  className='fontType' style={{ listStyleType: 'none', padding: 0, color: '#ccc' }}>
              <li><a href="#home" style={{ color: '#ccc' }}>Home</a></li>
              <li><a href="#services" style={{ color: '#ccc' }}>Services</a></li>
              <li><a href="#about" style={{ color: '#ccc' }}>About Us</a></li>
              <li><a href="#contact" style={{ color: '#ccc' }}>Contact</a></li>
            </ul>
          </Col>
          <Col xs={24} md={8}>
            <Title className='fontType' level={4} style={{ color: '#fff' }}>Stay Updated</Title>
            <Text className='fontType' style={{ color: '#ccc' }}>Subscribe to our newsletter to get the latest updates and offers.</Text>
            <Input.Group className='fontType' compact style={{ marginTop: '10px' }}>
              <Input className='fontType' placeholder="Enter your email" style={{ width: '70%' }} />
              <Button type="primary">Subscribe</Button>
            </Input.Group>
            <div style={{ marginTop: '20px' }}>
              <FacebookOutlined style={{ fontSize: '24px', marginRight: '10px', color: '#fff' }} />
              <TwitterOutlined style={{ fontSize: '24px', marginRight: '10px', color: '#fff' }} />
              <InstagramOutlined style={{ fontSize: '24px', marginRight: '10px', color: '#fff' }} />
              <YoutubeOutlined style={{ fontSize: '24px', color: '#fff' }} />
            </div>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: '30px' }}>
          <Col>
            <Text className='fontType' style={{ color: '#ccc' }}>© 2024 FitMonk Gym. All rights reserved.</Text>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default FitMonkFooter;
