import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
// react-bootstreap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { defaultLink } from "../constants";

function Login() {
    return (
        <div className="login">
            <Link to={defaultLink} style={{ textDecoration: "none" }}>
                <h1 className="login__logo">Logo</h1>
            </Link>
            <div className="login__border">
                <Form className="login__form">
                    {/* Email input */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    {/* Password input */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    {/* Save Login Details Checkbox */}
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Save Credentials" />
                    </Form.Group>
                    <div className="login__signInButtons">
                        <div className="login__button">
                            <Button variant="primary" type="submit">
                                Sign In
                            </Button>
                        </div>
                        <div className="login__button">
                            <Button variant="primary" type="submit">
                                Create Account
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Login;
