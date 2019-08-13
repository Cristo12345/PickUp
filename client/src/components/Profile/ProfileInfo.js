import React from 'react';
import PropTypes from 'prop-types';
import './ProfileInfo.css';
import Ronaldo from "./ronaldo.jpg";


const ProfileInfo = (props) => {
  return (
    <div>
        <img src={Ronaldo} alt="cristianoooo" width={300} height={250}/>
        <h3>{props.name}</h3>
        <h3>Email: {props.emailAddress}</h3>
        <h3>Level: Intermediate</h3>
    </div>
  )
};

ProfileInfo.propTypes = {
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired
};

export default ProfileInfo;