import React from 'react';
import { Card, Accordion, Button } from "react-bootstrap";

const ItemList = props => {

    return (
        <Accordion>
            <Card className="upcoming-card">
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>Space Remaining: {props.space}</Card.Text>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text>Category: {props.category}</Card.Text>
                        
                        <Card.Text>Notes: {props.notes}</Card.Text>
                        <Card.Link href="#">Join</Card.Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

export default ItemList;