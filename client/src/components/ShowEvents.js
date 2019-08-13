import React from 'react';
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";

const ShowEvents = props => {

    return (
        <Accordion>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      {props.event.location}
      <p className= "details">Show more</p>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body> 
      <p>Location: {props.event.location} </p>
      <p>Date: {props.event.date}</p>
      <p>Time: {props.event.time}</p>
      <p>Attendees: {props.event.attendees.map((attendee, index) => (
        <span key = {index}>{attendee} &nbsp;</span>
      )) } </p>
      <p>Addional notes: {props.event.notes}</p>
      <form action=""><input type="submit" value="RSVP" onClick={props.handleRSVP} /></form>
      
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