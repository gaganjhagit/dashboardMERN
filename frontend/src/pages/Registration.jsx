import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

const Registration=() => {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);

      axios.post('http://localhost:8080/users/registration', {
        name,
        email,
        password,
        mobile
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    };

    return (
        <div>
            <Form noValidate validated={validated} className="bg-dark text-light" style={{ maxWidth: '400px', margin: '0 auto',padding: '20px', borderRadius: '5px' ,marginTop: '20px',marginBottom: '20px'}}>
                <h2 className="text-center mb-4">Registration</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className="text-center">Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)} required />
                    <Form.Control.Feedback type="invalid">
                        Please enter your name.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-center">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMobile">
                    <Form.Label className="text-center">Mobile</Form.Label>
                    <Form.Control type="tel" placeholder="Enter mobile" value={mobile} onChange={(event) => setMobile(event.target.value)} required />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid mobile number.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="button" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}   

export default Registration