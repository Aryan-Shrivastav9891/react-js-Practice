import React from 'react'
import Header from './component/Header/Header.jsx'
import Footer from './component/Footer/Footer.jsx'
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Root