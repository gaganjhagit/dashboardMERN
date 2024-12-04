import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-center text-white p-3" style={{ position: 'fixed', bottom: -50, width: '100%' }}>
      <Row className="mt-3">
        <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
          <h6 className="text-uppercase fw-bold">Contact</h6>
          <hr className="mb-4 mt-0 d-inline-block mx-auto" />
          <p>
            <a href="https://www.linkedin.com/in/your-linkedin-profile/" className="text-white">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/your-github-profile" className="text-white">
              <i className="fa-brands fa-github"></i>
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
