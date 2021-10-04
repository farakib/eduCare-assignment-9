import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Service from '../Services/Service';

import './Home.css';
const Home = () => {
    
    return (
        <div className="container">
           <section className="card-section">
             {<div>
              <img src="https://tse3.mm.bing.net/th?id=OIP.o_JEsrQBOC4OkMUUHKcJLgHaDH&pid=Api&P=0&w=365&h=154" alt="" />
             </div>}
            <div>
           <Row xs={2} md={2} className="g-1">
    <Col>
      <Card>
        <Card.Body>
         <h5>ScholorShip News</h5>
         <p>Our scholarship algorithm matches you to scholarships, grants and internships you qualify for. Instantly get a scholarship list based on your strengths, interests, student activities and skills.</p>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
         <h5>Our Notice Board</h5>
         <p></p>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Our Achievements</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Admission Now</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
</div>
</section>



    <section className="service-section">
      <Service></Service>
    </section>

    
        </div>
    );
};

export default Home;