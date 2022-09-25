import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { defaultLink } from "../constants";
// react-bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();

        //do something with email and password
        console.log(email, password);
        if (email.length === 0 || password.length === 0){
            alert("Invalid email or password!")
        }
        else {
            const url = "https://students.cs.niu.edu/~z1860207/login.php";
            let fData = new FormData();
            fData.append("email", email);
            fData.append("password", password);

            axios.post(url, fData, 
                {
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                    }
                  })
            .then(response=>alert(response.data))
            .catch(error=>alert(error));
        }
    };

    const register = (e) => {
        e.preventDefault();

        //do something with email and password
        console.log(email, password);
        if (email.length === 0 || password.length === 0){
            alert("Invalid email or password!")
        }
        else {
            const url = "https://students.cs.niu.edu/~z1860207/create.php";
            let fData = new FormData();
            fData.append("email", email);
            fData.append("password", password);

            axios.post(url, fData, 
                {
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                    }
                  })
            .then(response=>alert(response.data))
            .catch(error=>alert(error));
        }
    };

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
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    {/* Password input */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    {/* Save Login Details Checkbox */}
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Save Credentials" />
                    </Form.Group>
                    <div className="login__signInButtons">
                        <div className="login__button">
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={signIn}
                            >
                                Sign In
                            </Button>
                        </div>
                        <div className="login__button">
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={register}
                            >
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