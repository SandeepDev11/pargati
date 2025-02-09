import { Container, Nav, Navbar } from "react-bootstrap";
import brand from "../../assets/Img/brand.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    header working
    <p>hello para</p>
      <header>
        <Navbar expand="lg" className="headerNav">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img src={brand} alt="brandLogo" className="brandLogo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="navbarMenuList me-auto my-2 my-lg-0"
                style={{ maxHeight: "250px" }}
                navbarScroll
              >
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/press">Press</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/trust-safety">Trust & Safety</Link>
              </Nav>
              <div className="userAuth d-flex align-items-center">
                <Link className="btn-16" to="/login">
                  Login
                </Link>
                <Link className="btn-16" to="/register">
                  Signup
                </Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
