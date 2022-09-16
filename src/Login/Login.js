import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Login.css";
// react-bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { defaultLink } from "../constants";

function Login() {     

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
    })}
    var email;
    var password;

    function export_JSON () {
        //window.event.preventDefault()
        var input_email = form.formBasicEmail
        var input_password = form.formBasicPassword
        
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
    
        var user_credentials = JSON.stringify({"email": input_email, "password": input_password});
        xhr.send(user_credentials);       
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        export_JSON()
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
                        <Form.Control type="email" placeholder="Enter email" />
                        onChange = {(e) => setField('formBasicEmail', e.target.value)}
                    </Form.Group>
                    {/* Password input */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                        onChange = {(e) => setField('formBasicPassword', e.target.value)}
                    </Form.Group>
                    {/* Save Login Details Checkbox */}
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <div className="login__signInButtons">
                        <div className="login__button">
                            <Button variant="primary" type="submit">
                                Sign In
                            </Button>
                        </div>
                        <div className="login__button">
                            <Button variant="primary" onClick={handleSubmit} type="submit">
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