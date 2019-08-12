import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import API from "../utils/API";
import ShowEvents from '../components/ShowEvents';

class UpcomingEvents extends Component {
    state = {
        events: [{
            location: "Prospect Park",
            date: "2019-08-20",
            time: "17.00",
            notes: "xxxxx"
        },
    {
        location: "central Park",
            date: "2019-08-19",
            time: "12.00",
            notes: "xxxxx"
    }]
    };

    render () {
        return (
            <Container>
                {this.state.events.map((value, index) => {
                    return <ShowEvents event = {value}/>

                    
      })}
            </Container>
        )
    }
}

export default UpcomingEvents;