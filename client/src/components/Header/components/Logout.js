import React from 'react';
import { NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Logout extends React.Component {
  render() {
    return (
      <NavItem style={{ cursor: 'pointer' }}>
        <Link to="/login" className="nav-link p-0" onClick={this.props.onClick}>
          <div className="btn btn-secondary">
            Logout
          </div>
        </Link>
      </NavItem>
    )
  }
}

export default Logout;


// WEBPACK FOOTER //
// ./src/components/Header/components/Logout.js