import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import {
    Link
  } from "react-router-dom";

function NavBarC() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" id="navbarHeading"><Link className="categoryLink" id="headingLink"to="/">Up2Date</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features"><Link id="subscribPage" to="/subscription">Subscription</Link></Nav.Link>
                        <Nav.Link href="#pricing">About Us</Nav.Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            <NavDropdown.Item ><Link className="categoryLink" to="/business">Bussiness</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className="categoryLink" to="/entertainment">Entertainment</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className="categoryLink" to="/sports">Sports</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className="categoryLink" to="/scienceandtechnology">Technology and Science</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className="categoryLink" to="/health">Health</Link></NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarC;
