import React from 'react';
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";

const ShowEvents = props => {

    return (
        <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      {props.event.location}
      <p className= "details">Show more</p>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <h6>Location: {props.event.location} </h6>
      <h6>Date: {props.event.date}</h6>
      <h6>Time: {props.event.time}</h6>
      <h6>Addional notes: {props.event.notes}</h6>
      <form action=""><input type="submit" value="RSVP" /></form>
      
      </Card.Body>
      {/* <Card.Body>{props.event.date}</Card.Body>
      <Card.Body>{props.event.time}</Card.Body>
      <Card.Body>{props.event.notes}</Card.Body> */}
    </Accordion.Collapse>
  </Card>
   <br/>
  
</Accordion>
    )

};


export default ShowEvents;