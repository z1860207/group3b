import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { defaultLink } from "../constants";
// react-bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();

        //do something with email and password
        console.log(email, password);
    };

    const register = (e) => {
        e.preventDefault();

        //do something with email and password
        console.log(email, password);
    };

    function export_JSON() {
        const form = document.getElementById("login__form");
        const input_email = form.elements["formBasicEmail"];
        const input_password = form.elements["formBasicPassword"];

        let xhr = new XMLHttpRequest();
        let url = "https://students.cs.niu.edu/~z1860207/Group3B/submit.php";

        xhr.open("POST", url, true);

        // Set the request header i.e. which type of content you are sending
        xhr.setRequestHeader("Content-Type", "application/json");

        // Create a state change callback
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // TODO:ERROR - Print received data from server
                //result.innerHTML = this.responseText;
            }
        };

        var user_credentials = JSON.stringify({
            email: input_email,
            password: input_password,
        });
        xhr.send(user_credentials);
    }

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