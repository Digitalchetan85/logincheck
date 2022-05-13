import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import logo from "../../Images/dashboard-logo.png";
import axios from "axios";

const DashboardNavabar = () => {
  const logout = () => {
    axios.post("/api/logout").then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        localStorage.removeItem("admin");
        swal("Success", res.data.message, "success");
      }
    });
  };
  return (
    <div>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* <!-- Navbar Brand--> */}
        <Link className="navbar-brand ps-3" to="/dashboard">
          <Image src={logo} alt="Logo" className="img-fluid" />
        </Link>
        {/* <!-- Sidebar Toggle--> */}
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          to="#!"
        >
          <i className="fas fa-bars"></i>
        </button>
        {/* <!-- Navbar Search--> */}
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        {/* <!-- Navbar--> */}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            {/* <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </Link> */}
            <Link to="/" className="btn btn-primary text-white" onClick={logout}>
              Logout
            </Link>
            {/* <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link className="dropdown-item" to="#!">
                  Settings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#!">
                  Activity Log
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="#!">
                  Logout
                </Link>
              </li>
            </ul> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNavabar;
