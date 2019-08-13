import React from 'react';
import PropTypes from 'prop-types';
import AddAlertForm from './AddAlertForm.js'
import './ProfileMain.css';



const Profile = (props) => {
  return (
    <div>
      <div>
      <h3>My Alerts</h3>
      <h6>Andrus Park : 18:00 - 22:00 : Wednesday</h6>
      <h6>Lennon Park : : </h6>
    </div>

    <div>
      <AddAlertForm />
    </div>
    </div>
  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired
};

export default Profile;