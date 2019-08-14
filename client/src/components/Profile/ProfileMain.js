import React from 'react';
import PropTypes from 'prop-types';
import AddAlertForm from './AddAlertForm.js'
import './ProfileMain.css';
import { Container, Row, Col } from 'reactstrap';



const Profile = (props) => {
  return (
    <Container>
      <Row>
      <Col className="alert" sm={{ size: 'auto', offset: 6 }}>
      <h3>My Alerts:</h3>
      <h6>Andrus Park : 18:00 - 22:00 : Wednesday</h6>
      <h6>Lennon Park : 0:00 - 23:55 : Saturday </h6>
      <h6>Lennon Park : 0:00 - 23:55 : Sunday </h6>
      </Col>
      

      <AddAlertForm />
</Row>
    </Container>
  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired
};

export default Profile;