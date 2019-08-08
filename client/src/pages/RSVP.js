import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


// date of event
// attending: yes or no
// how many people will you bring
// name 
// email or phone number 

const RSVP = (props)=> {
return (
<div className='container'>
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Enter first and last name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Name of event</Form.Label>
    <Form.Control placeholder="Jam-A-Pa-Looza" />
  </Form.Group>



  <Form.Row>
   

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Attending</Form.Label>
      <Form.Control as="select">
       <option>Select One</option>
        <option>Yes</option>
        <option>No</option>
        <option>Maybe</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Any Additional Guests</Form.Label>
      <Form.Control as="select">
       <option>Select One</option>
        <option>No</option>
        <option>1-2</option>
        <option>3-4</option>
        <option>5+</option>
      </Form.Control>
    </Form.Group>

  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> </div>
);
}

export default RSVP; 