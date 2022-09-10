import React from "react";
import { Link } from "react-router-dom";
import { defaultLink } from "../constants";
// react-bootstrap
import Container from "react-bootstrap/container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
    console.log(defaultLink);

    return (
        <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
            <Container>
                {/* Logo or Title Here */}
                <Link to={defaultLink} style={{ textDecoration: "none" }}>
                    <Navbar.Brand>Logo</Navbar.Brand>
                </Link>
                {/* adds hamburger menu for mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Navbar Links */}
                        <Link
                            to={defaultLink}
                            style={{ textDecoration: "none" }}
                        >
                            <Nav.Link>Home</Nav.Link>
                        </Link>
                        <Link
                            to={defaultLink + "/"}
                            style={{ textDecoration: "none" }}
                        >
                            <Nav.Link>Link1</Nav.Link>
                        </Link>
                        <Link
                            to={defaultLink + "/"}
                            style={{ textDecoration: "none" }}
                        >
                            <Nav.Link>Link2</Nav.Link>
                        </Link>
                        <Link
                            to={defaultLink + "/"}
                            style={{ textDecoration: "none" }}
                        >
                            <Nav.Link>Link3</Nav.Link>
                        </Link>
                        {/* Dropdown Links */}
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <Link
                                to={defaultLink + "/"}
                                style={{ textDecoration: "none" }}
                            >
                                <NavDropdown.Item>Drop1</NavDropdown.Item>
                            </Link>
                            <Link
                                to={defaultLink + "/"}
                                style={{ textDecoration: "none" }}
                            >
                                <NavDropdown.Item>Drop2</NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />
                            <Link
                                to={defaultLink + "/"}
                                style={{ textDecoration: "none" }}
                            >
                                <NavDropdown.Item>Drop3</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Button style={{ marginLeft: "8px"}} variant="outline-primary">Sign In</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
