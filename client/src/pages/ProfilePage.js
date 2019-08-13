import React, {PropTypes} from 'react';
import Profile from "../components/Profile/ProfileMain.js";
import ProfileInfo from "../components/Profile/ProfileInfo";


class ProfilePage extends React.Component {
    render() {
        return (
            <div>
            <ProfileInfo
                name = 'Chris'
                emailAddress = 'hello@gmail.com'
            />
            <Profile />
            </div>
        );
    }
}

ProfilePage.propTypes = {
};

export default ProfilePage;