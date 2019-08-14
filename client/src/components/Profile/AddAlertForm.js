import 'flatpickr/dist/themes/material_green.css';

import React, { Component } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import Select from "react-select";
import Flatpickr from 'react-flatpickr';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddItemForm extends Component {
    state = {
        locationChoices: [{ label: "Flemming Park Field #1", key: 1 }, { label: "Andrus Park", key: 2 }, { label: "Lennon Park", key: 3 }],
        fromTime: "",
        toTime: "",
        weekday: "",
        location: "",

        
    };

    newAlert = () => {
        return (
            <h1>{this.state.location} : {this.state.fromTime}  -  {this.state.toTime} : {this.state.weekday}</h1>)
    }


    handleLocationChange = (selectedLocation) => {
        this.setState ({location: selectedLocation});
    }

    handleFromChange = (selectedTime) => {
        this.setState({fromTime: selectedTime});
    }

    handleToChange = (selectedTime) => {
        this.setState({toTime: selectedTime});
    }

    handleDayChange = (selectedDay) => {
        this.setState({weekday: selectedDay});
    }

    handleSubmit = event => {
        event.preventDefault();
        }

    render() {

        const newAlert = "";
        return (
            <Container>
                <Row>
                    <Col size="md-6">
                        <Form>
                            <Select
                                options={this.state.locationChoices}
                                isSearchable
                                placeholder="Choose location"
                                onChange={(values) => this.handleLocationChange(values)}
                            />
                            <br />
                            From:
                             <Flatpickr
                                options={{ noCalendar: true, enableTime: true, dateFormat: "H:i", time_24hr: true }}
                                value={this.state.fromTime}
                                onChange={this.handleFromChange}
                                // name="date"
                            />  

                            <span>      </span>To:
                            <Flatpickr
                                options={{ noCalendar: true, enableTime: true, dateFormat: "H:i", time_24hr: true }}
                                value={this.state.toTime}
                                onChange={this.handleToChange}
                                // name="date"
                            />

                            <br />
                            <br />
                            <Select 
                                options = {[{ label: "Monday", key: 1 }, { label: "Tuesday", key: 2 }, { label: "Wednesday", key: 3 },
                                { label: "Thursday", key: 4 }, { label: "Friday", key: 5 }, { label: "Saturday", key: 6 }, { label: "Sunday", key: 7 } ]}
                                value={this.state.weekday}
                                onChange={(values) => this.handleDayChange(values)}
                            />
                            <br />
                            <br />

                            <Button 
                                variant="danger"
                                type="submit"
                                onClick={this.handleSubmit}
                            >Add Alert</Button> 
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AddItemForm;