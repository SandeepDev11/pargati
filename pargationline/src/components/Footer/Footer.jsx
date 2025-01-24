import { Col, Container, Row } from "react-bootstrap";
import brand from "../../assets/Img/brand.png";
import { Link } from "react-router-dom";
import download from "../../assets/Img/download.svg";
import linkedIn from "../../assets/Img/linkedIn.svg";
import youtube from "../../assets/Img/youtube.svg";
import facebook from "../../assets/Img/facebook.svg";
import x from "../../assets/Img/x.svg";

function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row className="align-items-start flex-wrap">
            <Col lg md={4} xs={6} className="footerlogoArea">
              <div className="brandLogo pt-3">
                <Link to="/">
                  <img src={brand} alt="brandLogo" width="160px" />
                </Link>
              </div>
            </Col>
            <Col lg md={4} xs={6}>
              <div className="footerMenu-list">
                <h5 className="fw-bold">Business Solutions</h5>
                <ul className="list-unstyled">
                  {[
                    "Payment Gateway",
                    "E-commerce PG",
                    "Guardian by PhonePe",
                    "Express Checkout",
                    "PhonePe Switch",
                    "Offline Merchant",
                    "Advertise on PhonePe",
                    "SmartSpeaker",
                    "PhonePe Lending",
                    "POS Machine",
                    "Payment Links",
                  ].map((menu, index) => (
                    <li key={index} className="footerMenu-list">
                      <Link to={`/${menu.replace(/\s+/g, "-").toLowerCase()}`}>
                        {menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg md={4} xs={6}>
              <div className="footerMenu-list">
                <h5 className="fw-bold">Insurance</h5>
                <ul className="list-unstyled">
                  {[
                    "Motor Insurance",
                    "Bike Insurance",
                    "Car Insurance",
                    "Health Insurance",
                    "Arogya Sanjeevani Policy",
                    "Life Insurance",
                    "Term Life Insurance",
                    "Personal Accident Insurance",
                    "Travel Insurance",
                    "International Travel Insurance",
                  ].map((menu, index) => (
                    <li key={index} className="footerMenu-list">
                      <Link to={`/${menu.replace(/\s+/g, "-").toLowerCase()}`}>
                        {menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg md={4} xs={6}>
              <div className="footerMenu-list">
                <h5 className="fw-bold">Investments</h5>
                <ul className="list-unstyled">
                  {[
                    "24K Gold",
                    "Liquid Funds",
                    "Tax Saving Funds",
                    "Equity Funds",
                    "Debt Funds",
                    "Hybrid Funds",
                  ].map((menu, index) => (
                    <li key={index} className="footerMenu-list">
                      <Link to={`/${menu.replace(/\s+/g, "-").toLowerCase()}`}>
                        {menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg md={4} xs={6}>
              <div className="footerMenu-list">
                <h5 className="fw-bold">Investments</h5>
                <ul className="list-unstyled">
                  {[
                    "About Us",
                    "Careers",
                    "Contact Us",
                    "Press",
                    "Ethics",
                    "Report Vulnerability",
                    "Merchant Partners",
                    "Blog",
                    "Tech Blog",
                    "PhonePe Pulse",
                  ].map((menu, index) => (
                    <li key={index} className="footerMenu-list">
                      <Link to={`/${menu.replace(/\s+/g, "-").toLowerCase()}`}>
                        {menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg md={3}>
              <div className="footerMenu-list">
                <h5 className="fw-bold">Investments</h5>
                <ul className="list-unstyled">
                  {[
                    "Terms & Conditions",
                    "Privacy Policy",
                    "Grievance Policy",
                    "How to Pay",
                    "E-Waste Policy",
                    "Trust & Safety",
                    "Global Anti-Corruption Policy",
                  ].map((menu, index) => (
                    <li key={index} className="footerMenu-list">
                      <Link to={`/${menu.replace(/\s+/g, "-").toLowerCase()}`}>
                        {menu}
                      </Link>
                    </li>
                  ))}
                </ul>
                <h6 className="fw-bold mb-3">See All Apps</h6>
                <Link to="/">
                  <div className="downloadBtn">
                    <img src={download} alt="" width="160px" />
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
          <div className="social-icons">
            <ul className="d-flex justify-content-end gap-3 list-unstyled pb-3">
              <li>
                <Link to="/">
                  <img src={linkedIn} alt="linkedIn" width="30px" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={facebook} alt="facebook" width="30px" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={x} alt="x" width="30px" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={youtube} alt="youtube" width="30px" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="copyright-section">
            <p className="mb-0">© 2024, All rights reserved</p>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
