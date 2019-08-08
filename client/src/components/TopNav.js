import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const TopNav = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/home">
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

            <Navbar.Collapse className="justify-content-end">
                <Nav className="align-right">
                    <Nav.Link href="/home" className="text-center">
                        
                        <br />
                        Home
                    </Nav.Link>
                    <Nav.Link href="/additem" className="text-center">
                        
                        <br />
                        Add Event
                    </Nav.Link>
                    <Nav.Link href="/UpcomingEvents" className="text-center">
                        
                        <br />
                        Upcoming Events
                    </Nav.Link>
                    <Nav.Link href="/rsvp" className="text-center">
                        
                        <br />
                        RSVP
                    </Nav.Link>
                   
                    <Nav.Link href="/" className="text-center">
                        
                        <br />
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;