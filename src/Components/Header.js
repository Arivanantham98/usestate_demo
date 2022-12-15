import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-success" : "text-primary"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link 
                style={{
                  textDecoration: "none",
                  color: "#000",
                  padding: "0 1em",
                }}
                to={"/"}
              >
                Home
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#000",
                  padding: "0 1em",
                }}
                to={"/login"}
              >
                Login
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#000",
                  padding: "0 1em",
                }}
                to={"/register"}
              >
                Register
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
