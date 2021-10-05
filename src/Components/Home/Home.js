import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Service from '../Services/Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBook, faChalkboard, faCalendarWeek, faUserEdit} from '@fortawesome/free-solid-svg-icons';
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
        <FontAwesomeIcon icon={faBook} />
         <h5>ScholorShip News</h5>
         <p>Our scholarship algorithm matches you to scholarships, grants and internships you qualify for. Instantly get a scholarship list based on your strengths, interests, student activities and skills.</p>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
        <FontAwesomeIcon icon={faChalkboard} />
         <h5>Our Notice Board</h5>
         <p>Noticeboard is a subscription-based news management system that offers editors as well as end-users an intuitive experience writing, commenting, and reading news. A central feature of the Noticeboard modules.</p>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
        <FontAwesomeIcon icon={faCalendarWeek} />
          <Card.Title>Our Achievements</Card.Title>
          <Card.Text>
          Our Working Definition of Student Achievement and School Quality May 2016 Education Evolving’s
           ultimate goal is to increase the achievement of all young people. 
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
        <FontAwesomeIcon icon={faUserEdit} />
          <Card.Title>Admission Now</Card.Title>
          <Card.Text>
          The Deficit Reduction Act of 2005 mandated that providers report POA indicators for all diagnoses submitted on Medicare inpatient 
          acute care claims for discharges beginning October 1
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