import React, { useState } from 'react';
import { Card, Form, Button, Tabs, Tab } from 'react-bootstrap';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);

    const handleTabChange = (key) => {
        setIsLogin(key === 'login');
    };

    return (
        <Card style={{ width: '400px', margin: '20px auto' }}>
            <Card.Body>
                <Tabs
                    activeKey={isLogin ? 'login' : 'register'}
                    onSelect={handleTabChange}
                    className="mb-3"
                >
                    <Tab eventKey="login" title="Login">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicLogin">
                                <Form.Label>Login</Form.Label>
                                <Form.Control type="text" placeholder="Enter login" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="register" title="Register">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicRegisterLogin">
                                <Form.Label>Login</Form.Label>
                                <Form.Control type="text" placeholder="Enter login" />
                            </Form.Group>
                             <Form.Group className="mb-3" controlId="formBasicRegisterEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicRegisterPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
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