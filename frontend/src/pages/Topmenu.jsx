import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

const Topmenu = () => {
    return (
       <>
           <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link  as={Link} to="/registration">Registration</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

       
       </>
       
    );
}

export default Topmenu;