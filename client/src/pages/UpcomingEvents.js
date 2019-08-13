import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import API from "../utils/API";
import ShowEvents from '../components/ShowEvents';
import { get } from "https";

class UpcomingEvents extends Component {
    state = {
        events: [{
            location: "Prospect Park",
            date: "2019-08-20",
            time: "17.00",
            attendees: ["Michael S", "Jim H", "Pam B", "Dwight S", "Kevin M"],
            notes: "xxxxx"
        },
    {
        location: "central Park",
            date: "2019-08-19",
            time: "12.00",
            attendees: ["Joey T", "Chandler B", "Rachel Green", "Ross Geller", "Monica Geller", "Phoebe"],
            notes: "xxxxx"
    }]
    };
    componentDidMount = () =>{
      API.getEvents () 
      .then ((res)=>{
        //   this.setState({
        //     events: res.data
        //   });
      console.log(res.data)
      })
    }

    handleFormRSVP = index => event => {
        event.preventDefault();
        console.log(this.state.events[index].attendees);
        // const sportingEventAttendees =  this.state.events[index].attendees;
        // sportingEventAttendees.push("Chris");
        var newStateAttendee = this.state.events[index].attendees;
        newStateAttendee.push("Chris");
        this.setState({attendees: newStateAttendee});

        // API.getRSVPs()
        // .then((res)=>{
        //     console.log(res.data)
        // })
}
    render () {
        return (
            <Container>
                {this.state.events.map((value, index) => {
                    return <ShowEvents key = {index} event = {value} handleRSVP={this.handleFormRSVP(index)}/>
      })}
            </Container>
        )
    // };
};

};

export default UpcomingEvents;