import React, {PropTypes} from 'react';
import Profile from "../components/Profile/ProfileMain.js";
import ProfileInfo from "../components/Profile/ProfileInfo";
import ProfileMain from "../components/Profile/ProfileMain";


class ProfilePage extends React.Component {
    render() {
        return (
            <div>
            <ProfileInfo
                name = 'Chris'
                emailAddress = 'hello@gmail.com'
            />
            <br/>
            <ProfileMain />
            </div>
        );
    }
}

ProfilePage.propTypes = {
};

export default ProfilePage;