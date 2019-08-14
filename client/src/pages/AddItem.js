import 'flatpickr/dist/themes/material_green.css';

import React, { Component } from 'react';
import { Col, Row, Container, Button, Form, Jumbotron} from "react-bootstrap";
import API from "../utils/API"
import {TextArea } from "../components/Form";
import Flatpickr from 'react-flatpickr';
import Select from "react-select";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AddItem.css";
import axios from 'axios';
import ForecastWeather from '../components/ForecastWeather';

// import { INTEGER } from 'sequelize/types';


class Search extends Component {
    state = {
        locationChoices: [{label:"Flemming Park Field #1", key: 1}, {label: "Andrus Park", key: 2}, {label: "Lennon Park", key: 3}],


        location: "",
        notes: "",
        date: new Date(),
        time: "",
        query: "",

        forecastWeather: ""
    };


    componentDidMount() {
        axios.get('http://api.apixu.com/v1/forecast.json?key=2b36b0a0913a46ad863161615191208&q=New+York')
        .then(response => {
            const weatherInfo = response.data;
            this.setState({forecastWeather: weatherInfo});
            // this.setState({locationChoices});
        })
        .catch(error => {
            console.log(error);
        })
        .finally(thing => {
            console.log("this.state------,", this.state);
        })
    }



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // change handler for date selector
    handleDateChange = (selectedDates, dateStr) => {
        this.setState({ date: dateStr })
    }

    handleTimeChange = (selectedTime, dateStr) => {
        this.setState({ time: dateStr })
    }

    handleLocationChange = (selectedLocation) => {
        this.setState({location: selectedLocation});
    }


    displayItem = event => {
        event.preventDefault();
    };



    handleFormSubmit = event => {
        event.preventDefault();

        alert("form submitted");
        API.saveEvent({
            LocationId: this.state.location.key,
            date: this.state.date,
            time: this.state.time,
            notes: this.state.notes,
            // attendees: [],
        })
            .then(res => alert("Event saved", res))
            .catch(err => console.log(err));
        console.log(this.state);
        console.log(this.state.location.key);
        //to test data type of date input
        // console.log("Date input type: " + typeof(this.state.date));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-4">
                        <h3>Add Event</h3>
                        <Form>

                            <Select
                            options={this.state.locationChoices}
                            isSearchable placeholder="Select location"
                            onChange={(values) => this.handleLocationChange(values)}
                            />

                            <br />

                            <Flatpickr
                                options={{ minDate: "today" }}
                                value={this.state.date}
                                onChange={this.handleDateChange}
                                name="date"
                            />

                            <br />
                            <br />

                            {/* Time Picker */}
                            <Flatpickr
                                options={{ noCalendar: true, enableTime: true, dateFormat: "H:i", time_24hr: true }}
                                value={this.state.time}
                                onChange={this.handleTimeChange}
                                name="date"
                            />
                            <br />
                            <br />

                            <TextArea
                                value={this.state.notes}
                                onChange={this.handleInputChange}
                                name="notes"
                                placeholder="Notes (Optional)"
                                rows="3"
                            />
                            <br />
                            <Button
                                variant="danger"
                                type="submit"
                                // disabled={!(this.state.query)}
                                // used to call saveBtn on line 39 with API returned info MMB
                                onClick={this.handleFormSubmit}
                            >
                                Save
                            </Button>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            {/* <div className="container">
   <img className="img" alt="PickUp" src={pickuplogo}/>
 </div> */}
                        </Form>
                    </Col>
                </Row>

                <Row>
                        <Jumbotron>
                        
                        <Row><Col>Weather:</Col></Row>
                        <Row><Col className="temp"><ForecastWeather/></Col></Row>
                        We hope you enjoy your event !
                        </Jumbotron>
​
                </Row>
                {/* <Row className="mt-3">
                    <Col size="md-12">
                        {this.state.items.length ? (
                            <div>
                                <h5>Items Tracked</h5>
                                {this.state.items.map(item => (
                                    <Item
                                        label="Saved"
                                        category={item.category}
                                        name={item.name}
                                        quantity={item.quantity}
                                        notes={item.notes}
                                        date={item.date}
                                        btnFunc={this.handleFormSubmit}
                                    />
                                ))}
                            </div>
                        ) : (
                                <h5>No Items to Display</h5>
                            )}
                    </Col>
                </Row> */}
            </Container>
        );
    }
}

export default Search;