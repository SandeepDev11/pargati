import HeroBanner from "./HeroBanner";
import { Col, Container, Row } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Wealth from "./Wealth";
import Secure from "./Secure";
import adImg from "../../assets/Img/karteJaImg.png"
import brand from "../../assets/Img/brand.png"

function Home() {
  const data = [
    {
      heroBg: "silderbg silderbg1",
      heroTitle: "Accept payments for your online business at zero cost",
      herodesc: "Sign up for PhonePe Payment Gateway",
      buttonText: "Get Started",
      urlButton: "/",
    },
    {
      heroBg: "silderbg silderbg2",
      heroTitle: "View statements & manage financial data consents",
      herodesc: "Register on PhonePe Account Aggregator now!",
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
    },
    {
      secureTitle: "Pay whenever you like, wherever you like.",
      securePara:
        "Choose from options like UPI, the PhonePe wallet or your Debit and Credit Card.",
    },
    {
      secureTitle: "Find all your favourite apps on PhonePe Switch.",
      securePara:
        "Book flights, order food or buy groceries. Use all your favourite apps without downloading them.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
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

      {/* Wealth section */}
      <Container className="waealthSection">
        <Row>
          {wealth.map((items, index) => (
            <>
              <Col lg={4} md={6} sm={12}>
                <Wealth wealth={items} key={index} />
              </Col>
            </>
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

      {/* advartments */}
      <Container className="advantagesSection text-center">
          <div className="adImg">
              <img src={adImg} alt="adImg" width="600px" />
          </div>
          <div className="brandImg py-4">
            <img src={brand} alt="" />
          </div>
          <div className="adver"></div>
      </Container>

    </>
  );
}

export default Home;
