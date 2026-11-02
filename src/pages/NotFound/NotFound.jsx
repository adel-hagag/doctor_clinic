import React from 'react'
import Banner from '../../components/Banner/Banner'
import { Link } from 'react-router-dom'
import './NotFound.css'


export default function NotFound() {
  return (
    <>
        <Banner title="Page Not Found" smtitle="Page Not Found"/>
    
        <div className="error">
            <h1>404</h1>
            <h4>The Page you were looking for, couldn't be found.</h4>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <div className="buttons">
  <Link to="/home" className="error-btn">
    Back
  </Link>

  <Link to="/home" className="error-btn">
    Back To Home
  </Link>
</div>
        </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
