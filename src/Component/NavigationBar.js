import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Component/assets/logo-light.svg"; // ✅ adjust path
import "./NavigationBar.css";

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      variant="light"
      sticky=""
      className=" scalloped shadow"
      expanded={expanded}
    >
      <Container>
        {/* ✅ Brand Logo */}
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>

        {/* ✅ Navbar Toggle (mobile) */}
        <Navbar.Toggle
          className="toggle"
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        {/* ✅ Navbar Links */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center">
            <Nav.Link
              as={Link}
              to="/courses"
              className="home"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/skills"
              className="home"
              onClick={() => setExpanded(false)}
            >
              Features
            </Nav.Link>

            {/* ✅ Dropdown for Pages */}
            <NavDropdown title="Pages" id="pages-dropdown" className="home">
              <NavDropdown.Item
                as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
              >
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services"
                onClick={() => setExpanded(false)}
              >
                Services
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/contact"
                onClick={() => setExpanded(false)}
              >
                Contact
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/faq"
                onClick={() => setExpanded(false)}
              >
                FAQ
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/offers"
              className="home"
              onClick={() => setExpanded(false)}
            >
              Support
            </Nav.Link>
          </Nav>

          {/* ✅ Sign In / Sign Up Buttons */}
          <div className="btn-grid">
            <Link to="/SignIn" className="textlink">
              <button className="signup mx-2" onClick={() => setExpanded(false)}>
                Sign In
              </button>
            </Link>
            <Link to="/SignUp" className="textlink">
              <button
                id="signup2"
                className="mx-2 text-white"
                onClick={() => setExpanded(false)}
              >
                Sing Up
              </button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

