import React, {PropTypes} from 'react';
import Profile from "../components/Profile/Profile.js";

class ProfilePage extends React.Component {
    render() {
        return (
            <div>
            <Profile 
                name = 'Chris'
                emailAddress = 'hello@gmail.com'
            />
            </div>
        );
    }
}

ProfilePage.propTypes = {
};

export default ProfilePage;