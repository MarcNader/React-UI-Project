import { Fragment, useContext, useState } from "react"
import "./navigation.styles.scss"
import NavBar from "../../Components/NavBar/navbar.component"
import SideBar from "../../Components/SideBar/sidebar.component"

import { Outlet } from "react-router-dom"
const Navigation = () => {
    return (
       <Fragment>
            <div className="wrapper">
            <SideBar/>
            <div className="Second-col">
            <NavBar/>
            <Outlet/>
            </div>
            </div>
       </Fragment>
    )
}

export default Navigation