import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css';
const Contact = () => {
    return (
        <div className="container">
            <h2>Contact Us</h2>
     <Form>
    
  <Form.Group className="mb-2" controlId="">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="your name" />
  </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    <a href="/home">Submit</a>
  </Button>
</Form>
        </div>
    );
};

export default Contact;