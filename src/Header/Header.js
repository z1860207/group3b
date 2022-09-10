import React from "react";
import {defaultLink} from "../constants"
// react-bootstrap
import Container from "react-bootstrap/container"
import Navbar from "react-bootstrap/Navbar";


function Header() {
    console.log(defaultLink);

    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href={defaultLink}>Title</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    );
}

export default Header;
