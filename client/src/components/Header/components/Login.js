import React from 'react';
import { NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <NavItem style={{ cursor: 'pointer' }}>
        <Link to="/login" className="nav-link p-0">
          <div className="btn btn-secondary">
            Login
          </div>
        </Link>
      </NavItem >
    )
  }
}

export default Login;


// WEBPACK FOOTER //
// ./src/components/Header/components/Login.js