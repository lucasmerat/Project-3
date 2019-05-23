import React from "react";
import { InstagramLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { Col, Row, Container } from "../../../BootstrapComponents/Grid";
import { Redirect } from "react-router-dom";

function Login(props) {
  let instaLink;
  let googleLink;
  if (process.env.NODE_ENV === "production") {
    instaLink = "/api/login";
    googleLink = "/api/auth/google";
  } else {
    instaLink = "http://localhost:5000/api/login";
    googleLink = "http://localhost:5000/api/auth/google";
  }
  return props.readCookie() ? (
    <Redirect to="/profile/browse" />
  ) : (
    <Container fluid>
      <Row>
        <Col size="md-4" />
        <Col size="md-4">
          <a href={instaLink}>
            <InstagramLoginButton />
          </a>
          <a href={googleLink}><GoogleLoginButton/></a>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
