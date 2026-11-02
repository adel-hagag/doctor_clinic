import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./Nav.css";
import logo from "../../assets/download.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="my-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>

            <NavDropdown title="Pages" id="pages-dropdown">
              <NavDropdown.Item as={NavLink} to="/about">
                About Us
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/team">
                Our Team
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/faq">
                FAQ's
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/booking">
                Booking
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/notfound">
                Error 404
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/login">
                Login/Register
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item as={NavLink} to="/services">
                Services
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/serviceDetails">
                Service Detail
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="blog-dropdown">
              <NavDropdown.Item as={NavLink} to="/blog">
                Blogs
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/blogDetails">
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>

            <Nav.Link as="span" className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>

            <Nav.Link as="a" href="tel:+01999888777" className="phone-link">
              <FontAwesomeIcon icon={faPhone} className="phone" />
              (+01) 999 888 777
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact" className="contact-btn-link">
              <button type="button">
                Contact Us <span><IoIosArrowForward /></span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
