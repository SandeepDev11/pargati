import { Col, Container, Row } from "react-bootstrap";
import brand from "../../assets/Img/brand.png";
import { Link } from "react-router";
function Footer() {
  return (
    <>
      <Footer>
        <Container className="">
          <Row>
            <Col>
              <div className="brandLogo">
                <img src={brand} alt="brandLogo" />
              </div>
            </Col>
            <Col>
              <div className="footerMenu-list">
                <h4>Business Solutions</h4>
                <ul>
                  <li>
                    <Link to="/">
                      <span>Payment Gateway</span>
                      <span>Payment Gateway</span>
                      <span>Payment Gateway</span>
                      <span>Payment Gateway</span>
                      <span>Payment Gateway</span>
                      <span>Payment Gateway</span>
                      <span>Payment Gateway</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Footer>
    </>
  );
}

export default Footer;
