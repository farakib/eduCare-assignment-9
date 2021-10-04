import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowService from '../show-service/ShowService';
import './service.css';
const Service = () => {
    const [services, setServices] = useState([]);

    
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/farakib/service-json-file/main/services.json')
        .then(res => res.json())
        .then(data=> setServices(data));
    },[]);
    return (
        <div>
            <div className="title">
            <h2>Our Services</h2>
            </div>
            <Row xs={1} md={3} className="g-2 ">
                {
                  services.map(service => <ShowService 
                  key={service.id}
                  service={service}
                  ></ShowService>)
                }
            </Row>
       
        </div>
    );
};

export default Service;