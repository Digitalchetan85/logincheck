import React from "react";
import DashboardFooter from "./Includes/DashboardFooter";
import DashboardNavabar from "./Includes/DashboardNavabar";
import Dashboardsidebar from "./Includes/Dashboardsidebar";
import "./assets/js/scripts";

const Dashboard = () => {
  return (
    <div className="sb-nav-fixed">
      <DashboardNavabar />

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Dashboardsidebar />
        </div>

        <div id="layoutSidenav_content">
          <main>
            <h1>Welcome</h1>
          </main>

          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
