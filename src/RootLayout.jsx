import React from 'react'
import { Outlet } from "react-router";
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';


const RootLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout