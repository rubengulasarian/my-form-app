import React, { useState } from 'react';
import { Card, Form, Button, Tabs, Tab } from 'react-bootstrap';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [login, setLogin] = useState("");
    const [registerLogin, setRegisterLogin] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [password, setPassword] = useState("");


    const handleTabChange = (key) => {
        setIsLogin(key === 'login');
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Login:', login, password);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log('Register:', registerLogin, registerEmail, registerPassword);
    };

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleRegisterLoginChange = (e) => {
        setRegisterLogin(e.target.value);
    }

    const handleRegisterEmailChange = (e) => {
        setRegisterEmail(e.target.value);
    }

    const handleRegisterPasswordChange = (e) => {
        setRegisterPassword(e.target.value);
    }


    return (
        <Card style={{ width: '400px', margin: '20px auto' }}>
            <Card.Body>
                <Tabs
                    activeKey={isLogin ? 'login' : 'register'}
                    onSelect={handleTabChange}
                    className="mb-3"
                >
                    <Tab eventKey="login" title="Login">
                        <Form onSubmit={handleLoginSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicLogin">
                                <Form.Label>Login</Form.Label>
                                <Form.Control type="text" placeholder="Enter login" onChange={handleLoginChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="register" title="Register">
                        <Form onSubmit={handleRegisterSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicRegisterLogin">
                                <Form.Label>Login</Form.Label>
                                <Form.Control type="text" placeholder="Enter login" onChange={handleRegisterLoginChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicRegisterEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={handleRegisterEmailChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicRegisterPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={handleRegisterPasswordChange} />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Register
                            </Button>
                        </Form>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    );
}

export default AuthForm;