import React from 'react';
import './Header.css';
import { Navbar, Nav } from 'reactstrap';
import AuthService from '../AuthService';
import icon from '../../images/icon.png';

//components
import { Login, Logout } from './components';

const Auth = new AuthService();

class Header extends React.Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.toggle = this.toggle.bind(this);
  }

  state = {
    isOpen: false
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout() {
    Auth.logout();
  }

  render() {
    return (
      <div className="headercolor sticky-top shadow" >
        <div className="position-absolute w-100 text-center" style={{ zIndex: '9999', pointerEvents: 'none', marginTop: '10px' }} id="hh-title">
          <h2 className="lettercolor1 mb-0 font-weight-bold" id="title">PickUp</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col px-0">
              <Navbar light expand="md">
                <a href={localStorage.getItem('id_token') ? '/main/home' : '/'} className="navbar-brand font-weight-bold p-0" id="brand">
                  <div className="btn btn-secondary p-1">
                    <img className="logo" style={{ height: '28px' }} src={icon} alt="icon" />
                  </div>
                </a>
                <Nav className="ml-auto" navbar>
                  {localStorage.getItem('id_token') ? <Logout onClick={this.handleLogout.bind(this)} /> : <Login />}
                </Nav>
              </Navbar>
            </div>
          </div>
        </div>
        <div style={{
          height: '1px',
          background: '#FF3B3F'
        }} />
      </div>
    );
  }
}

export default Header



// WEBPACK FOOTER //
// ./src/components/Header/Header.js