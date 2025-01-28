import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import andriodicon from "../../assets/Img/andriod-icon.png";
import apkicon from "../../assets/Img/apk-icon.png";
import aboutBannerImg from "../../assets/Img/aboutBannerImg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Team from "./Team";

function About() {
  const teamDetails = [
    {
      imgUrl:
        "https://bp-wp-website-prod.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/Shashvat-Nakrani.jpg",
      imgAlt: "Chief Executive Officer",
      teamName: "Shashvat Nakrani",
      teamPosition: "Founder & Chief Operating Officer",
      linkedinUrl: "/",
    },
    {
      imgUrl:
        "https://bp-wp-website-prod.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/Shashvat-Nakrani.jpg",
      imgAlt: "Chief Executive Officer",
      teamName: "Shashvat Nakrani",
      teamPosition: "Founder & Chief Operating Officer",
      linkedinUrl: "/",
    },
    {
      imgUrl:
        "https://bp-wp-website-prod.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/Shashvat-Nakrani.jpg",
      imgAlt: "Chief Executive Officer",
      teamName: "Shashvat Nakrani",
      teamPosition: "Founder & Chief Operating Officer",
      linkedinUrl: "/",
    },
  ];
  return (
    <>
      <main className="about-page">
        <Container fluid className="py-5">
          <Container className="text-center header-section position-relative px-0">
            <div className="aboutBanner">
              <h1>Unlock a world of seamless payments</h1>
              <p>
                Go cashless and experience the future of payments. Simple
                transactions, smart insights, and exclusive perks await you.
              </p>
              <div className="getApp d-flex gap-3 align-items-center justify-content-center">
                <Link to="/">
                  <img
                    src={andriodicon}
                    alt=""
                    className="getAppImg aboutPageImg"
                  />
                </Link>
                <Link to="/">
                  <img
                    src={apkicon}
                    alt=""
                    className="getAppImg getAppImg2 aboutPageImg"
                  />
                </Link>
              </div>
            </div>
            <div className="aboutBannerImg py-5">
              <img src={aboutBannerImg} alt="" />
            </div>

            {/* Statistics Section */}
            <Container className="text-center Statistics-section">
              <Row>
                <Col lg={3} md={6} sm={6} className="col-6">
                  <h3>150K</h3>
                  <p>Active Users</p>
                </Col>
                <Col lg={3} md={6} sm={6} className="col-6">
                  <h3>80K</h3>
                  <p>Transactions Daily</p>
                </Col>
                <Col lg={3} md={6} sm={6} className="col-6">
                  <h3>280K</h3>
                  <p>Downloads</p>
                </Col>
                <Col lg={3} md={6} sm={6} className="col-6">
                  <h3>1500+</h3>
                  <p>Merchants</p>
                </Col>
              </Row>
            </Container>
          </Container>

          {/* Features Section */}
          <Container className="px-0 py-5 pt-0 pt-lg-5 pt-md-5">
            <div className="features-section">
              <Row className="align-items-center features-section-row">
                <Col lg={6} md={12} sm={12}>
                  <h3 className="transactionstitle mb-4">
                    Embrace the speed and ease of cashless transactions
                  </h3>
                  <ul type="circle" className="mb-4">
                    <li>
                      <p>
                        Go cashless and experience the future of payments.
                        Simple transactions, smart insights, and exclusive perks
                        await you.
                      </p>
                    </li>
                    <li>
                      <p>
                        Go cashless and experience the future of payments.
                        Simple transactions, smart insights, and exclusive perks
                        await you.
                      </p>
                    </li>
                    <li>
                      <p>
                        Go cashless and experience the future of payments.
                        Simple transactions, smart insights, and exclusive perks
                        await you.
                      </p>
                    </li>
                    <li>
                      <p>
                        Go cashless and experience the future of payments.
                        Simple transactions, smart insights, and exclusive perks
                        await you.
                      </p>
                    </li>
                  </ul>
                  <Link
                    to="/"
                    className="d-flex align-items-center gap-3 transactionsLink"
                  >
                    <span>Get Started</span> <FaArrowRightLong />
                  </Link>
                </Col>
                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  className="text-center aboutBannerImg"
                >
                  <img src={aboutBannerImg} alt="transactions" />
                </Col>
              </Row>
            </div>
          </Container>

          {/* Features Section */}
          <Container className="px-0 pb-5">
            <div className="features-section">
              <Row className="align-items-center">
                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  className="text-center aboutBannerImg"
                >
                  <img src={aboutBannerImg} alt="transactions" />
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <h3 className="transactionstitle mb-4">
                    Embrace the speed and ease of cashless transactions
                  </h3>
                  <ul type="circle" className="mb-4">
                    <li>
                      <p>
                        Go cashless and experience the future of payments.
                        Simple transactions, smart insights, and exclusive perks
                        await you.
                      </p>
                    </li>
                    <li>
                      <p>
                        Go cashless and experience the future of payments.
                        Simple transactions, smart insights, and exclusive perks
                        await you.
                      </p>
                    </li>
                    <li>
                      <p>
                        Go cashless and experience the future of payments.
                        Simple transactions, smart insights, and exclusive perks
                        await you.
                      </p>
                    </li>
                    <li>
                      <p>
                        Go cashless and experience the future of payments.
                        Simple transactions, smart insights, and exclusive perks
                        await you.
                      </p>
                    </li>
                  </ul>
                  <Link
                    to="/"
                    className="d-flex align-items-center gap-3 transactionsLink"
                  >
                    <span>Get Started</span> <FaArrowRightLong />
                  </Link>
                </Col>
              </Row>
            </div>
          </Container>

          <Container>
            <div className="OurTeam-container-wrapper pb-0 pb-lg-5 pb-md-0">
              <h2 className="text-center fw-bold mb-5">Our Team</h2>
              <Row>
                {teamDetails.map((items, index) => (
                  <Col lg={4} md={4} sm={12} key={index} className="mb-3">
                    <Team teamDetails={items} />
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </Container>
      </main>
    </>
  );
}

export default About;
