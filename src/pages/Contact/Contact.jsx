import React from 'react'
import Banner from '../../components/Banner/Banner'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelope, faGlobe, faHeart, faMap, faMobile  } from "@fortawesome/free-solid-svg-icons";
import './Contact.css'
import FormContact from '../FormContact/FormContact';

export default function Contact() {
  return (
    <>
    
    <Banner title='Contact Us' smtitle='Contact Us' />

    <section className='contact-us'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
        <FormContact/>
          </div>

    <div className="col-lg-6 col-md-6">
      <div className="side">
        <div className="overlay">
          <h3>Contact Us For Any Informations</h3>
          <li><FontAwesomeIcon icon={faMap} />Location</li>
          <hr />
          <p>2005 stokes Isle Apt. 896, venaville 10010, USA</p>
               <li><FontAwesomeIcon icon={faEnvelope} />Email & Phone</li>
               <hr />
               <p>mohamedelrafey@gmail.com</p>
               <p>01017696485</p>
                    <li><FontAwesomeIcon icon={faGlobe} />Follow Us</li>
                    <hr />
                    <ul>
                      <li><FontAwesomeIcon icon={faHeart} /></li>
                      <li><FontAwesomeIcon icon={faGlobe} /></li>
                      <li><FontAwesomeIcon icon={faMobile} /></li>
                    </ul>
        </div>
      </div>
    </div>


        </div>
      </div>

    </section>
    
    
    
    
    
    </>
  )
}
