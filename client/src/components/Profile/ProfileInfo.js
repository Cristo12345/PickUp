import React from 'react';
import PropTypes from 'prop-types';
import './ProfileInfo.css';   
import Ronaldo from "./ronaldo.jpg";
import stars from "./stars.jpg";
import { Container, Row, Col } from 'reactstrap';


const ProfileInfo = (props) => {
  return (
    <Container>
    <Row>
    <Col xs="6"><img id="profile" src={Ronaldo} alt="cristianoooo" width={300} height={300}/></Col>
      <Col xs="6">
        <h3><strong>{props.name}</strong></h3>
        <h5>Email: {props.emailAddress}</h5>
        <h5>Skill Level: Intermediate</h5>
        <img id="level" src={stars} alt="stars" width={300} height={75}/>
        </Col>   
        
    </Row>
    </Container>
  )
};

ProfileInfo.propTypes = {
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired
};

export default ProfileInfo;