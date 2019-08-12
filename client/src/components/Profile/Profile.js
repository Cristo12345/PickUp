import React from 'react';
import PropTypes from 'prop-types';


const Profile = (props) => {
  return (
    <div>
      <h1>Profile for {props.name}</h1>

      <ul>
        <li>Email address: {props.emailAddress}</li>
      </ul>
    </div>
  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired
};

export default Profile;