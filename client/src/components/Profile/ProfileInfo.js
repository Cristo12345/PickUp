import React from 'react';
import PropTypes from 'prop-types';
import './ProfileInfo.css';


const ProfileInfo = (props) => {
  return (
    <div>
        <h3>{props.name}</h3>
        <h3>Email: {props.emailAddress}</h3>
    </div>
  )
};

ProfileInfo.propTypes = {
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired
};

export default ProfileInfo;