import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="space-between">
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="150"
              height="150"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink
                to=""
                className="nav-link text-light"
                style={({ isActive }) => ({
                  fontWeight:
                    isActive && location.pathname === "/" ? "bold" : "",
                  borderBottom:
                    isActive && location.pathname === "/"
                      ? "2px solid white"
                      : "",
                })}
              >
                Anasayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="contact"
                className="nav-link text-light"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "",
                  borderBottom: isActive ? "2px solid white" : "",
                })}
              >
                İletişim
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="menus"
                className="nav-link text-light"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "",
                  borderBottom: isActive ? "2px solid white" : "",
                })}
              >
                Menüler
              </NavLink>
            </li>
          </ul>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
