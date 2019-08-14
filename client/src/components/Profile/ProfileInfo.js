import React from 'react';
import PropTypes from 'prop-types';
import './ProfileInfo.css';   
import Ronaldo from "./ronaldo.jpg";
import stars from "./stars.jpg";


const ProfileInfo = (props) => {
  return (
    <div>
        <img src={Ronaldo} alt="cristianoooo" width={300} height={250}/>
        <h3>{props.name}</h3>
        <h5>Email: {props.emailAddress}</h5>
        <h5>Skill Level: Intermediate</h5>
        <img src={stars} alt="stars" width={300} height={75}/>
    </div>
  )
};

ProfileInfo.propTypes = {
  username: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired
};

export default ProfileInfo;