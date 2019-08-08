import React, { Component } from 'react';
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import API from "../utils/API"
import { Input, TextArea } from "../components/Form";




class Search extends Component {
    state = {
        items: [],
        // id: "",
        // category: "",
        // name: "",
        // quantity: "",
        location:"",
        notes: "",
        date: "",
        time: "",
        query: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    displayItem = event => {
        event.preventDefault();
    };
    
    

    handleFormSubmit = event => {
        event.preventDefault();
        // console.log("Category " + this.state.category + "Name " + this.state.name + "quant " + this.state.quantity + "notes " + this.state.notes + "date " + this.state.date + " location " + this.state.location);
        console.log("form submitted");
        API.saveEvent({
            location: this.state.location,
            date: this.state.date,
            time: this.state.time,
            notes: this.state.notes,
        })
            .then(res => alert("Event saved", res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-4">
                        <h3>Add Event</h3>
                        <Form>
                            {/* <Input
                            value={this.state.category}
                            onChange={this.handleInputChange}
                            name="category"
                            placeholder="Category (required)"
                            /> */}
                            {/* <Input
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name"
                            placeholder="Name (required)"
                            /> */}
                            {/* <Input
                            value={this.state.quantity}
                            onChange={this.handleInputChange}
                            name="quantity"
                            placeholder="Space (required)"
                            /> */}

                            <Input
                            value={this.state.location}
                            onChange={this.handleInputChange}
                            name="location"
                            placeholder="Location (required)"
                            />
                        
                            <Input
                            value={this.state.date}
                            onChange={this.handleInputChange}
                            name="date"
                            placeholder="Date (required)"
                            />
                            <Input
                            value={this.state.time}
                            onChange={this.handleInputChange}
                            name="time"
                            placeholder="Time (required)"
                            />
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
                        </Form>
                    </Col>
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