import React from 'react'
import DashboardNavabar from './Includes/DashboardNavabar'

const dashboard = () => {
  return (
    <div className="sb-nav-fixed">
        <DashboardNavabar />

        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <Dashboardsidebar />
            </div>
        </div>
    </div>
  )
}

export default dashboard