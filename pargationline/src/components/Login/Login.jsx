import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import brand from "../../assets/Img/brand.png";
import { Link } from "react-router";
import loginBg from "../../assets/Img/loginBg.png";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <main className="login-main">
        <Container fluid className="login-container">
          <Link to="/">
            <div className="back-btn">
              <FaArrowLeft />
            </div>
          </Link>
          <Row className="align-items-center">
            <Col lg={6} md={12} sm={12} className="login-left-wrapper">
              <div className="login-left text-center">
                <img
                  src={loginBg}
                  alt="loginBg"
                  className="img-fluid loginBg"
                />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="login-right">
                <div className="login-card">
                  <div className="brand">
                    <div className="brand-logo">
                      <img src={brand} alt="brand" />
                    </div>
                    <h1>Welcome back</h1>
                    <p>Enter your credentials to access your account</p>
                  </div>

                  <form id="loginForm">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="name@company.com"
                        autoComplete="email"
                      />
                      <div className="error" id="emailError"></div>
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <div className="password-wrapper">
                        <input
                          type={passwordVisible ? "text" : "password"}
                          id="password"
                          placeholder="Enter your password"
                          autoComplete="current-password"
                        />
                        <button
                          type="button"
                          className="border-0 bg-transparent password-toggle-btn"
                          onClick={togglePasswordVisibility}
                        >
                          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      <div className="error" id="passwordError"></div>
                    </div>

                    <div className="remember-forgot">
                      <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label>Remember me</label>
                      </div>
                      <Link to="/" className="forgot-password">
                        Forgot password?
                      </Link>
                    </div>

                    <button
                      type="submit"
                      className="login-btn"
                      id="loginButton"
                    >
                      Sign in
                    </button>
                  </form>

                  <div className="signup-link">
                    <p>
                      Don't have an account? <Link to="/register">Sign up</Link>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Login;
