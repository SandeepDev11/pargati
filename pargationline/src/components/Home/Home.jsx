import HeroBanner from "./HeroBanner";
import { Link } from "react-router";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Wealth from "./Wealth";
import Secure from "./Secure";
import adImg from "../../assets/Img/karteJaImg.png";
import brand from "../../assets/Img/brand.png";
import thumb1 from "../../assets/Img/thumb1.png";
import thumb2 from "../../assets/Img/thumb2.png";
import thumb3 from "../../assets/Img/thumb3.png";
import thumb4 from "../../assets/Img/thumb4.png";
import thumb5 from "../../assets/Img/thumb5.png";
import secureImg from "../../assets/Img/secureImg.png";
import secure1 from "../../assets/Img/secure1.png";
import secure2 from "../../assets/Img/secure2.png";
import partnerImg from "../../assets/Img/partnerImg.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Business from "./Business";
import AppStats from "./AppStats";
import MobileRecharge from "./MobileRecharge";
import recharge1 from "../../assets/Img/MobilePostpaid.png";
import recharge2 from "../../assets/Img/MobilePostpaid2.png";
import recharge3 from "../../assets/Img/MobilePostpaid3.png";
import recharge4 from "../../assets/Img/MobilePostpaid4.png";

function Home() {
  const data = [
    {
      heroBg: "silderbg silderbg1",
      heroTitle: "Accept payments for your online business at zero cost",
      herodesc: "Sign up for Pargati Payment Gateway",
      buttonText: "Get Started",
      urlButton: "/",
    },
    {
      heroBg: "silderbg silderbg2",
      heroTitle: "View statements & manage financial data consents",
      herodesc: "Register on Pargati Account Aggregator now!",
      buttonText: "Get Started",
      urlButton: "/",
    },
  ];

  const wealth = [
    {
      wealthUrl: "/",
      wealthTitle: "Insurance",
      wealthClass: "phonepe-wealth-hp__content__item",
    },
    {
      wealthUrl: "/",
      wealthTitle: "Investments",
      wealthClass:
        "phonepe-wealth-hp__content__item phonepe-wealth-hp__content__item2",
    },
    {
      wealthUrl: "/",
      wealthTitle: "Lending",
      wealthClass:
        "phonepe-wealth-hp__content__item phonepe-wealth-hp__content__item3",
    },
  ];

  const secure = [
    {
      secureTitle: "One app for all things money",
      securePara:
        "Pay bills, recharge, send money, buy gold, invest and shop at your favourite stores.",
      sercureTitleColor: "sercureTitleColor",
    },
    {
      secureTitle: "Pay whenever you like, wherever you like.",
      securePara:
        "Choose from options like UPI, the Pargati wallet or your Debit and Credit Card.",
      sercureTitleColor: "sercureTitleColor",
    },
    {
      secureTitle: "Find all your favourite apps on Pargati Switch.",
      securePara:
        "Book flights, order food or buy groceries. Use all your favourite apps without downloading them.",
      sercureTitleColor: "sercureTitleColor",
    },
  ];

  const business = [
    {
      businessTitle: "Be on Pargati Switch",
      businessPara: "Get new users for your app",
      businessUrl: "/",
    },
    {
      businessTitle: "Accept payments at stores",
      businessPara: "Help your business go cashless",
      businessUrl: "/",
    },
    {
      businessTitle: "Integrate Pargati Payment Gateway",
      businessPara: "Process online payments seamlessly",
      businessUrl: "/",
    },
    {
      businessTitle: "Advertise on Pargati",
      businessPara: "Advertise & let customers know about you",
      businessUrl: "/",
    },
  ];

  const appStats = [
    {
      statsTitle: "Trusted by over",
      StatsNum: "58.5+ Crore",
      statsSubTitle: "Registered Users",
    },
    { statsTitle: "Accepted all over", StatsNum: "India", statsSubTitle: "" },
    {
      statsTitle: "Accepted at",
      StatsNum: "4+ Crore",
      statsSubTitle: "Stores",
    },
  ];

  const postpaid = [
    {
      srcImg: recharge1,
      imgAlt: "MobilePostpaid",
      title: "Mobile Postpaid",
    },
    {
      srcImg: recharge2,
      imgAlt: "MobilePrepaid",
      title: "Mobile Prepaid",
    },
    {
      srcImg: recharge3,
      imgAlt: "HomeUtilities",
      title: "Home Utilities",
    },
    {
      srcImg: recharge4,
      imgAlt: "DTH",
      title: "DTH",
    },
  ];

  return (
    <>
      <main>
        {/* Hero */}
        <div className="container-fluid px-0">
          <div className="heroSection">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={1}
              // navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {data.map((items, index) => (
                <SwiperSlide key={index}>
                  <HeroBanner data={items} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Wealth */}
        <Container className="waealthSection">
          <Row>
            {wealth.map((items, index) => (
              <Col lg={4} md={4} sm={12} key={index}>
                <Wealth wealth={items} />
              </Col>
            ))}
          </Row>
        </Container>

        {/* Secure */}
        <Container className="secureSection">
          <Row className="align-items-center">
            <Col lg={5} md={6} sm={12}>
              <div className="app-overview-widget-container__collapsible-container">
                <h1 className="app-overview-widget-heading">
                  Simple, Fast &amp; Secure
                </h1>
                {secure.map((items, index) => (
                  <Secure secure={items} key={index} />
                ))}
              </div>
            </Col>
            <Col lg={7} md={6} sm={12} className="text-end">
              <video
                src="https://www.phonepe.com/webstatic/8559/videos/page/home-fast-secure-v3.mp4"
                muted
                loop
                autoPlay
                className="w-100 h-100"
              ></video>
            </Col>
          </Row>
        </Container>

        {/* Mobile Recharge */}
        <Container className="mobile-recharge-wrapper mb-5 pb-5">
          <Row>
            {postpaid.map((items, index) => (
              <Col lg={3} md={6} sm={12} key={index}>
                <MobileRecharge postpaid={items} />
              </Col>
            ))}
          </Row>
        </Container>

        {/* Form - Recharge Now */}
        <Container className="formArea">
          <Form className="formMargin">
            <h4 className="fw-bold" style={{color: "var(--site3-color)"}}>Recharge Now</h4>
            <Row className="formRow align-items-end py-4">
              <Col lg md={6} sm={12} className="mb-3 mb-md-3 mb-lg-0">
                <Form.Group controlId="formGridState">
                  <Form.Label>Select Operator</Form.Label>
                  <Form.Select defaultValue="Choose..."
                  style={{padding:"0.8rem"}}>
                    <option> NTC Prepaid</option>
                    <option> NCell Prepaid</option>
                    <option> Smart Cell Prepaid</option>
                    <option> Dish Home</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col lg md={6} sm={12} className="mb-3 mb-md-3 mb-lg-0">
                <Form.Group controlId="formNumberInput">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter a number"
                    style={{padding:"0.8rem"}}
                  />
                </Form.Group>
              </Col>
              <Col lg md={6} sm={12} className="mb-3 mb-md-3 mb-lg-0">
              <Form.Group controlId="formNumberInput">
                  <Form.Label>NPR Recharge Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="0"
                    style={{padding:"0.8rem"}}
                  />
                </Form.Group>
              </Col>
              <Col lg md={6} sm={12} className="mb-3 mb-md-3 mb-lg-0">
              <Form.Group controlId="formNumberInput">
                  <Form.Label>INR Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="0"
                    style={{padding:"0.8rem"}}
                  />
                </Form.Group>
              </Col>
              <Col lg md={12} sm={12} className="mb-3 mb-md-3 mb-lg-0 text-center">
                <button className="go-button" >RECHARGE</button>
              </Col>
            </Row>
            <p className="text-danger text-center">NOTE: 8% Processing Fee will be charged extra.</p>
          </Form>
        </Container>

        {/* advartments */}
        <Container className="advantagesSection text-center">
          <div className="adImg">
            <img src={adImg} alt="adImg" width="600px" />
          </div>
          <div className="brandImg py-4">
            <img src={brand} alt="" />
          </div>
          <div className="advartmentsVideo overflow-hidden pt-5">
            <div className="adverThumb-section position-relative h-100">
              <div
                className="advarImg-wrapper advarImg-wrapper1"
                style={{ left: "0", top: "0" }}
              >
                <img src={thumb5} alt="" />
              </div>
              <div
                className="advarImg-wrapper advarImg-wrapper2"
                style={{ left: "15%", top: "0" }}
              >
                <img src={thumb4} alt="" />
              </div>
              <div
                className="advarImg-wrapper advarImg-wrapper3"
                style={{
                  left: "50%",
                  top: "0",
                  transform: "translate(-50%,0)",
                }}
              >
                <img src={thumb1} alt="" />
              </div>
              <div
                className="advarImg-wrapper advarImg-wrapper4"
                style={{ top: "0", right: "15%" }}
              >
                <img src={thumb2} alt="" />
              </div>
              <div
                className="advarImg-wrapper advarImg-wrapper5"
                style={{ top: "0", right: "0" }}
              >
                <img src={thumb3} alt="" />
              </div>
            </div>
          </div>
          <div className="nt-insurance-footer-content">
            <button className="btn-container__btn">
              <Link to="/">Watch all Videos</Link>
            </button>
            <p>
              Payments on Pargati are safe, reliable and fast. One in three
              Indians are now using the Pargati app to send money, recharge, pay
              bills and do so much more, in just a few simple clicks. Pargati
              has also introduced several Insurance products and Investment
              options that offer every Indian an equal opportunity to unlock the
              flow of money, and get access to financial services.
            </p>
          </div>
          <div className="taglineText">
            <p>#KarteJaBadhteJa</p>
          </div>
        </Container>

        {/* trustbanner */}
        <Container className="trustbanner-wrapper">
          <div className="trust-widget">
            <div className="trust-widget__secureimg-container">
              <img src={secureImg} alt="" />
            </div>
            <div className="trust-widget__container">
              <h2>Your money stays safe.</h2>
              <p>
                Pargati protects your money with the best-in-class security
                systems that help minimize frauds.
              </p>
              <div className="trust-widget__logos">
                <img src={secure1} alt="" />
                <img src={secure2} alt="" />
              </div>
            </div>
          </div>
        </Container>

        {/* Partner showcase */}
        <Container
          fluid
          className="full-width-container partner-showcase-container"
        >
          <Container>
            <h2 className="partner-showcase-container__title">
              At 4+ Crore <br /> stores, apps, websites &amp; more
            </h2>
            <div className="partner-showcase-container__btn">
              <Link to="/" className="btn-container">
                <span className="btn-container__btn">
                  <span>Partner with us</span>
                  <span className="arrow">
                    <FaLongArrowAltRight />
                  </span>
                </span>
              </Link>
            </div>
            <div className="partner-showcase-container__partner-banner add-animation gatsby-image-wrapper">
              <img
                src={partnerImg}
                alt="partnerImg"
                className="img-fluid pt-5"
              />
            </div>
          </Container>
        </Container>

        {/* For Business */}
        <Container className="secureSection">
          <Row className="align-items-center">
            <Col lg={7} md={6} sm={12} className="text-end">
              <video
                src="https://www.phonepe.com/webstatic/8559/videos/page/home-fast-secure-v3.mp4"
                muted
                loop
                autoPlay
                className="w-100 h-100"
              ></video>
            </Col>
            <Col lg={5} md={6} sm={12}>
              <div className="app-overview-widget-container__collapsible-container">
                <h1 className="app-overview-widget-heading">For Business</h1>
                <p className="mb-5">
                  Find the digital payment solution that fits your business
                  needs
                </p>
                <p className="businessPoints">I want to:</p>
                {business.map((items, index) => (
                  <Business business={items} key={index} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>

        {/* app-stats */}
        <Container fluid className="app-stats">
          <Container className="app-stats-banner">
            <Row>
              {appStats.map((stats, index) => (
                <Col lg={4} md={4} sm={12} key={index}>
                  <AppStats stats={stats} />
                </Col>
              ))}
            </Row>
            <div className="app-stats-banner__footerContent">
              <p className="mb-0">
                Get the latest data trends and insights on PhonePe Pulse!
              </p>
              <Link className="btn-container appStatsBtn" to="/">
                <span className="btn-container__btn pulse-statbtn text-center">
                  <span>Explore Now</span>
                </span>
              </Link>
            </div>
          </Container>
        </Container>
      </main>
    </>
  );
}

export default Home;
