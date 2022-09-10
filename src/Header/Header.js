import React from "react";
import { Link } from "react-router-dom";
import { defaultLink } from "../constants";
// react-bootstrap
import Container from "react-bootstrap/container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"

function Header() {
    console.log(defaultLink);

    return (
        // 
        <Navbar bg="secondary" expand="lg">
            <Container>
                {/* The Website Title or Logo will go here */}
                <Link to={defaultLink}>
                    <Navbar.Brand style={{ color: "white"}}>Title</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Nav bar links to other parts of website go here */}
                        <Link to={defaultLink}>
                            <Nav.Link>Home</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
