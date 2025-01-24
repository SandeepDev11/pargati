import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroBanner({ data }) {
  const { heroBg, heroTitle, herodesc, buttonText, urlButton } = data;
  return (
    <>
      <div className={heroBg}>
        <Container className="my-auto h-100">
          <Row className="row my-auto h-100">
            <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
              <div className="heroContentWrapper">
                <h1 className="heroTitle">{heroTitle}</h1>
                <p className="herodesc">{herodesc}</p>
                <Link to={urlButton} className="herobutton">{buttonText}</Link>
              </div>
            </Col>
            <Col lg={6} className="bannerSecondCol"></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HeroBanner;
