import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import API from "../utils/API";
import ShowEvents from '../components/ShowEvents';
import { get } from "https";

class UpcomingEvents extends Component {
    state = {
        events: [{
            location: "Flemming Park Field #1",
            date: "2019-08-20",
            time: "17:00",
            attendees: ["Michael S", "Jim H", "Pam B", "Dwight S", "Kevin M"],
            fieldType: "turf",
            notes: "Let's have fun!"
        },
    {
        location: "Lennon Park",
            date: "2019-08-25",
            time: "12:00",
            attendees: ["Joey T", "Chandler B", "Rachel Green", "Ross Geller", "Monica Geller", "Phoebe"],
            fieldType: "concrete",
            notes: "The soccer episode"
    },
    {
        location: "Andrus Park",
            date: "2019-08-27",
            time: "20:30",
            attendees: ["Joey T", "Chandler B", "Rachel Green", "Ross Geller", "Monica Geller", "Phoebe"],
            fieldType: "Grass",
            notes: "N/A"
    }, 

    {
        location: "Lennon Park",
            date: "2019-09-08",
            time: "16:30",
            attendees: ["Joey T", "Chandler B", "Rachel Green", "Ross Geller", "Monica Geller", "Phoebe"],
            fieldType: "Grass",
            notes: "N/A"
    },

    {
        location: "Lennon Park",
            date: "2019-09-08",
            time: "20:30",
            attendees: ["Joey T", "Chandler B", "Rachel Green", "Ross Geller", "Monica Geller", "Phoebe"],
            fieldType: "Grass",
            notes: "N/A"
    }
    ]
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