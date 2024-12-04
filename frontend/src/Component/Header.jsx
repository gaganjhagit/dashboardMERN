import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import message from 'antd/lib/message';
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const nav = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (event) => { 
        event.preventDefault();
        axios.post('http://localhost:8080/users/userCheck', {
            email,
            password
        })

        .then(res => {
            // if(res.data.data.msg)
            // console.log()
            message.success(res.data.msg)
            window.localStorage.setItem("username",res.data.Data.name)
            window.localStorage.setItem("email",res.data.Data.email)
            nav("/dashboard")


            handleClose();
        })
        .catch(error => {
            message.error(error.response.data.msg);
        });
    };

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="button" onClick={handleSubmit}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Header