import React from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar
        style={{ backgroundColor: "#58849B" }}
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/">
            <Image src="/images/Homepage/logo.svg" height={100} width={100} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#footer">Links</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
