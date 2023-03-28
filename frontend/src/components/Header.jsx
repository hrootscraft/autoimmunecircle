import React from "react";
import { Container, Navbar, Nav, Image, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar
        style={{ backgroundColor: "#58849B", fontSize: "1.10rem" }}
        variant="dark"
        expand="lg"
        collapseOnSelect
        className="fixed-top"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image
                loading="lazy"
                width={200}
                alt="AIC"
                src="/images/homepage/logo-website.png"
              />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/community">
                <Nav.Link>Community</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ai-stories/page/1">
                <Nav.Link>AI Stories</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about-ai">
                <Nav.Link>About AI</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about-us">
                <Nav.Link>About us</Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to={`/users/${userInfo._id}`}>
                    <NavDropdown.Item>Post Story</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                  {userInfo.isAdmin && (
                    <LinkContainer to="/admin/page/1">
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                  )}
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
