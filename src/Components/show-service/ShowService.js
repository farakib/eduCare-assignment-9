import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './ShowService.css';

const ShowService = (props) => {
    const {title, img, description} = props.service;


    return (
        <div className="card-body">
        <Col className="card-service">
            <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
             <h4>{title}</h4>
             <p>{description}</p>
          </Card.Body>
         </Card>
     </Col>
        </div>
    );
};

export default ShowService;