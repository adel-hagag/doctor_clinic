import React from 'react'
import MyNavbar from './components/Navbar/MyNavbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Contact from './pages/Contact/Contact';
import About from './pages/About/About'
import Team from './pages/Team/Team'
import Faq from './pages/FAQ/Faq'
import Booking from './pages/Booking/Booking'
import NotFound from './pages/NotFound/NotFound'
import Login from './pages/Login/Login'
import Services from './pages/Services/Services'
import ServicesDetails from './pages/ServicesDetails/ServicesDetails'
import Blog from './pages/Blog/Blog';
import BlogDetails from './pages/BlogDetails/BlogDetails'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="home" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="serviceDetails" element={<ServicesDetails />} />
      <Route path="services" element={<Services />} />
      <Route path="team" element={<Team />} />
      <Route path="faq" element={<Faq />} />
      <Route path="booking" element={<Booking />} />
      <Route path="notfound" element={<NotFound />} />
      <Route path="login" element={<Login />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blogDetails" element={<BlogDetails />} />
    </Route>
  )
);


export default function App() {
  return (
    <>
    
   <RouterProvider router={routes}/>
    </>
  )
}
