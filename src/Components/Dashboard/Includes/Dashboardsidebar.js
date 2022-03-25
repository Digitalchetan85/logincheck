import React from "react";
import { Link } from "react-router-dom";

const Dashboardsidebar = () => {
  return (
    <div>
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <Link className="nav-link" to="/dashboard">
              <div className="sb-nav-link-icon">
                <i className="fas fa-home"></i>
              </div>
              Dashboard
            </Link>
            <Link className="nav-link" to="/dashboard">
              <div className="sb-nav-link-icon">
                <i className="fas fa-file-invoice-dollar"></i>
              </div>
              Payment
            </Link>
            <Link className="nav-link" to="/dashboard">
              <div className="sb-nav-link-icon">
                <i className="fas fa-home"></i>
              </div>
              Promotion Images
            </Link>
            <Link className="nav-link" to="/dashboard">
              <div className="sb-nav-link-icon">
                <i className="fas fa-images"></i>
              </div>
              Home Slider
            </Link>
            <Link className="nav-link" to="/dashboard">
              <div className="sb-nav-link-icon">
                <i className="fas fa-images"></i>
              </div>
              Popup Slider
            </Link>
            <Link className="nav-link" to="/dashboard">
              <div className="sb-nav-link-icon">
                <i className="fas fa-images"></i>
              </div>
              Mentoring Slider
            </Link>
            <Link className="nav-link" to="/dashboard">
              <div className="sb-nav-link-icon">
                <i className="fas fa-images"></i>
              </div>
              Coaching Slider
            </Link>
            <Link className="nav-link" to="/dashboard">
              <div className="sb-nav-link-icon">
              <i className="fas fa-calendar-alt"></i>
              </div>
              Course Schedule
            </Link>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
  );
};

export default Dashboardsidebar;
