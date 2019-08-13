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
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-6">
                        <Form>
                            <Select
                                options={this.state.locationChoices}
                                isSearchable
                                placeholder="Choose location"
                                onChange={console.log("location selected")}
                            />
                            <br />
                            From:
                             <Flatpickr
                                options={{ noCalendar: true, enableTime: true, dateFormat: "H:i", time_24hr: true }}
                                value={this.state.fromTime}
                                // onChange={this.handleTimeChange}
                                // name="date"
                            />  

                            <span>      </span>To:
                            <Flatpickr
                                options={{ noCalendar: true, enableTime: true, dateFormat: "H:i", time_24hr: true }}
                                value={this.state.toTime}
                                // onChange={this.handleTimeChange}
                                // name="date"
                            />

                            <br />
                            <br />
                            <Select 
                                options = {[{ label: "Monday", key: 1 }, { label: "Tuesday", key: 2 }, { label: "Wednesday", key: 3 },
                                { label: "Thursday", key: 4 }, { label: "Friday", key: 5 }, { label: "Saturday", key: 6 }, { label: "Sunday", key: 7 } ]}
                                value={this.state.weekday}
                            />
                            <br />
                            <br />

                            <Button 
                                variant="danger"
                                type="submit"
                            >Add Alert</Button> 
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AddItemForm;