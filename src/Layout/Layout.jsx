import React from 'react'
import MyNavbar from '../components/Navbar/MyNavbar'
;
import Footer from '../components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

export default function Layout() {

   const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
    <ScrollToTop/>
  {!isLoginPage && <MyNavbar />}

      <Outlet />

      {!isLoginPage && <Footer />}
    </>
  )
}
