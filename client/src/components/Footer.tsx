import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// interface FooterProps {}
export const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Carlos</Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
