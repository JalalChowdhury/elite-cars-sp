import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import useAuth from "../../../hook/useAuth";

import './Navigation.css';

const Navigation = () => {

  const { user, logout } = useAuth();

  return (
    <div style={{ marginBottom: '60px' }}    >

      <Navbar
        collapseOnSelect
        expand="xl"
        variant="light shadow"
        bg="light"
        fixed="top"
      // sticky='top'

      >
        <Container
        >
          <Navbar.Brand>
            <h3 className="fs-4 fw-bold header-text text-uppercase">
             Elite_cars
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/home"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Products
              </Link>

              {
                user?.email ?
                  <>
                    <Link
                      to="/dashboard"
                      className="text-decoration-none fs-5 me-3 header-text fw-bold"
                    >
                      Dashboard
                    </Link>

                    <Button onClick={logout} className="logout-btn text-decoration-none fs-5 me-3 header-text fw-bold">Log Out</Button>


                  </>
                  :
                  <Link
                    to="/login"
                    className="text-decoration-none fs-5 me-3 header-text fw-bold"
                  >
                    Login
                  </Link>
              }







            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;