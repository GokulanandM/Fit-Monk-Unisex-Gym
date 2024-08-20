import React from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';
import "../../index.css";
import "../Css/Service.css";
import personal from "../../assets/img9 (1).jpg"
import group from "../../assets/grp2.jpg"

const { Content } = Layout;
const { Title, Text } = Typography;

function Services() {
  return (
    <div>
          <Content className='philosopher'>
      {/* Services Section */}
    
      <div className="container" style={{ paddingTop:"8%", paddingBottom:"3%" }}>
        <h2 className='service_title'>  Our Services</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Card  hoverable style={{ textAlign: 'center',  boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
              <img src={personal} alt="Service 1" style={{ width: '100%', height: '200px'}} />
              <Title className='fontType' level={4} style={{ marginTop: '20px' }}>Personal Training</Title>
              <Text className='fontType'>Get personalized training programs tailored to your fitness goals.</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card hoverable style={{ textAlign: 'center', boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
              <img src={group} alt="Service 2" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <Title className='fontType' level={4} style={{ marginTop: '20px' }}>Group Classes</Title>
              <Text className='fontType'>Join our dynamic group classes to stay motivated and have fun.</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card hoverable style={{ textAlign: 'center' , boxShadow: "0 4px 8px rgba(0,0,0,0.1)"}}>
              <img src="https://img.freepik.com/free-photo/healthy-menu-recipe-food-diet_53876-122837.jpg?ga=GA1.1.1214865680.1706524652&semt=ais_hybrid" alt="Service 3" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <Title className='fontType' level={4} style={{ marginTop: '20px' }}>Nutrition Plans</Title>
              <Text className='fontType'>Work with our nutrition experts to develop a healthy eating plan.</Text>
            </Card>
          </Col>
        </Row>
      </div>
      </Content>
    </div>
  )
}

export default Services
