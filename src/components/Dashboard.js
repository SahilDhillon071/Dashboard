import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Dashboard = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    }
  return (
    <>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
    </>
  )
}

export default Dashboard