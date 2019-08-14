import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const TopNav = () => {
    return (
        <Navbar style={{backgroundColor:'#38761c', padding: "10", fontSize:"25px", margin: "15"}}>
            <Navbar.Brand href="/profile">
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

            <Navbar.Collapse className="justify-content-end">
                <Nav className="align-right">
                    <Nav.Link href="/profile" className="text-center" style={{color:'white'}}>
                        
                        <br />
                        Profile
                    </Nav.Link>
                    <Nav.Link href="/additem" className="text-center" style={{color:'white'}}>
                        
                        <br />
                        Add Event
                    </Nav.Link>
                    <Nav.Link href="/UpcomingEvents" className="text-center" style={{color:'white'}}>
                        
                        <br />
                        Upcoming Events
                    </Nav.Link>
                   
                    <Nav.Link href="/" className="text-center" style={{color:'white'}}>
                        
                        <br />
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;