import React from 'react'
import DashboardFooter from './Includes/DashboardFooter'
import DashboardNavabar from './Includes/DashboardNavabar'
import Dashboardsidebar from './Includes/Dashboardsidebar'
import './assets/css/styles.css';
import './assets/js/scripts'

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

                </main>

                <DashboardFooter />
            </div>
        </div>
    </div>
  )
}

export default Dashboard