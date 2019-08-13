import React from 'react';
import PropTypes from 'prop-types';
import AddAlertForm from './AddAlertForm.js'
import './ProfileMain.css';



const Profile = (props) => {
  return (
    <div>

      <h3>My Alerts</h3>
      <h6>Andrus Park : 18:00 - 22:00 : Wednesday</h6>
      <h6>Lennon Park : 0:00 - 23:55 : Saturday </h6>
      <h6>Lennon Park : 0:00 - 23:55 : Sunday </h6>
 

      <AddAlertForm />

    </div>
  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired
};

export default Profile;