import React from "react";
import DashboardFooter from "./Includes/DashboardFooter";
import DashboardNavabar from "./Includes/DashboardNavabar";
import Dashboardsidebar from "./Includes/Dashboardsidebar";
import "./assets/js/scripts";

const Dashboard = () => {
  return (
    <div className="sb-nav-fixed py-5">
      <DashboardNavabar />

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Dashboardsidebar />
        </div>

        <div id="layoutSidenav_content">
          <main>
            <h1 className="text-primary text-center" >Welcome To Digital Agility Institute Dashboard</h1>
          </main>

          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
