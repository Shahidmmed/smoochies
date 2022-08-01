import React from "react";
import { NavLink } from "react-router-dom";
import "./TopNav.css";
import { HashLink as Link } from "react-router-hash-link";

function TopNav() {
  return (
    <div
      data-uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light"
      className="top-nav uk-dark"
    >
      <nav
        className="uk-navbar-container uk-navbar-transparent uk-padding uk-navbar uk-padding-small"
        data-uk-navbar="dropbar: true;"
      >
        <div className="uk-navbar-center">
          <div className="uk-navbar-center-left">
            <div>
              <ul className="uk-navbar-nav">
                <li>
                  <a href="#">Shop</a>
                  <div className="uk-navbar-dropdown nav-drop">
                    <ul className="uk-nav uk-navbar-dropdown-nav uk-flex dropbar">
                      <li className="uk-active">
                        <a href="#">Cakes</a>
                      </li>
                      <li>
                        <a href="#">Cupcakes</a>
                      </li>
                      <li>
                        <a href="#">Pastries</a>
                      </li>
                      <li>
                        <a href="#">Shop All</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="uk-active">
                  <a href="#">Gallery</a>
                </li>
                <li className="uk-active">
                  <a href="#">Order</a>
                </li>
              </ul>
            </div>
          </div>
          <Link className="uk-navbar-item uk-logo" to="/#home">
            Logo
          </Link>
          <div className="uk-navbar-center-right">
            <div>
              <ul className="uk-navbar-nav">
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="uk-navbar-right uk-margin-small-right">
          <ul className="uk-navbar-nav">
            <li>
              <NavLink to="" className="order-btn">
                <span data-uk-icon="icon: check"></span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default TopNav;
