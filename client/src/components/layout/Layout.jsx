import React from "react";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <div style={{background: "var(--black)", overflow:"hidden"}}>
            <Header />
            <Outlet />
            <div>
                <Footer />
            </div>
        </div>
        </>
    )
}

export default Layout;