import React from 'react';
import { Card } from "react-bootstrap";

const Item = props => {

    return (
        <Card className="item">
            <Card.Img src="./icon.png" alt="Card image" style={{width:"200px"}} />
            
            <Card.ImgOverlay>
                {/* <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> */}

                <Card.Title>{props.name}</Card.Title>
                <hr />
                {/* <Card.Text>Category: {props.category}</Card.Text> */}
                <Card.Text>Space : {props.quantity}</Card.Text>
                <Card.Text>Date: {props.date}</Card.Text>
                <Card.Text>Time: {props.time}</Card.Text>
                <Card.Text>Notes: {props.notes}</Card.Text>
                
            </Card.ImgOverlay>
        </Card>
    );
};

export default Item;