import { Col, Container, Row } from "react-bootstrap";
import brand from "../../assets/Img/brand.png";
import { Link } from "react-router";
import loginBg from "../../assets/Img/loginBg.png";
import { FaArrowLeft } from "react-icons/fa";

function Signup() {
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
            <Col lg={4} md={12} sm={12} className="login-left-wrapper">
              <div className="login-left text-center">
                <img src={loginBg} alt="loginBg" className="img-fluid" />
              </div>
            </Col>
            <Col lg={8} md={12} sm={12}>
              <div className="login-right">
                <div className="login-card signup-card">
                  <div className="brand">
                    <div className="brand-logo">
                      <img src={brand} alt="brand" />
                    </div>
                    <h1>Register Account</h1>
                    <p>Enter your credentials to access your account</p>
                  </div>

                  <form id="loginForm" className="signup-form">
                    <Row>
                      {/* Name */}
                      <Col lg={4} md={6} sm={12}>
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            autoComplete="name"
                          />
                          <div className="error" id="nameError"></div>
                        </div>
                      </Col>

                      {/* Gender */}
                      <Col lg={4} md={6} sm={12}>
                        <div className="form-group">
                          <label>Gender</label>
                          <select id="gender">
                            <option value="">Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                          <div className="error" id="genderError"></div>
                        </div>
                      </Col>

                      {/* Date of Birth */}
                      <Col lg={4} md={6} sm={12}>
                        <div className="form-group">
                          <label>Date of Birth</label>
                          <input
                            type="date"
                            id="dob"
                            placeholder="Enter your date of birth"
                          />
                          <div className="error" id="dobError"></div>
                        </div>
                      </Col>

                      {/* Email */}
                      <Col lg={4} md={6} sm={12}>
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
                      </Col>

                      {/* Phone Number */}
                      <Col lg={4} md={6} sm={12}>
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            placeholder="Enter your phone number"
                            autoComplete="tel"
                          />
                          <div className="error" id="phoneError"></div>
                        </div>
                      </Col>

                      {/* Password */}
                      <Col lg={4} md={6} sm={12}>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            autoComplete="new-password"
                          />
                          <div className="error" id="passwordError"></div>
                        </div>
                      </Col>

                      {/* Aadhaar Card Number */}
                      <Col lg={4} md={6} sm={12}>
                        <div className="form-group">
                          <label>Aadhaar Card Number</label>
                          <input
                            type="text"
                            id="aadhaarNumber"
                            placeholder="Enter your Aadhaar card number"
                          />
                          <div className="error" id="aadhaarError"></div>
                        </div>
                      </Col>

                      {/* Upload Aadhaar Card (Front) */}
                      <Col lg={4} md={6} sm={12}>
                        <div className="form-group">
                          <label>Upload Aadhaar Card (Front)</label>
                          <input type="file" id="aadhaarFront" />
                          <div className="error" id="aadhaarFrontError"></div>
                        </div>
                      </Col>

                      {/* Upload Aadhaar Card (Back) */}
                      <Col lg={4} md={6} sm={12}>
                        <div className="form-group">
                          <label>Upload Aadhaar Card (Back)</label>
                          <input type="file" id="aadhaarBack" />
                          <div className="error" id="aadhaarBackError"></div>
                        </div>
                      </Col>

                      {/* PAN Card */}
                      <Col lg={4} md={6} sm={12}>
                        <div className="form-group">
                          <label>PAN Card</label>
                          <input
                            type="text"
                            id="panCard"
                            placeholder="Enter your PAN card number"
                          />
                          <div className="error" id="panError"></div>
                        </div>
                      </Col>

                      {/* Upload Original PAN Card */}
                      <Col lg={4} md={6} sm={12}>
                        <div className="form-group">
                          <label>Upload Original PAN Card</label>
                          <input type="file" id="panCardUpload" />
                          <div className="error" id="panCardUploadError"></div>
                        </div>
                      </Col>

                      {/* Profile Picture */}
                      <Col lg={4} md={6} sm={12}>
                        <div className="form-group">
                          <label>Profile Picture</label>
                          <input type="file" id="profilePicture" />
                          <div className="error" id="profilePictureError"></div>
                        </div>
                      </Col>

                      {/* Submit Button */}
                      <Col lg={12} md={12} sm={12}>
                        <button
                          type="submit"
                          className="login-btn"
                          id="loginButton"
                        >
                          Sign Up Now
                        </button>
                      </Col>
                    </Row>
                  </form>

                  <div className="signup-link">
                    <p>
                      Already signed up? <Link to="/login">Login</Link>
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

export default Signup;
