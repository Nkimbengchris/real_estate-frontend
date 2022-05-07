import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaWhatsapp, FaTiktok} from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='social'>
            <FaFacebook className='icon' />
            <FaInstagram className='icon'/>
            <FaPinterest className='icon'/>
            <FaTwitter className='icon'/>
            <FaWhatsapp className='icon'/>
            <FaTiktok className='icon'/>
        </div>
        <div className='container'>
            <div className='col'>
                <h3>About</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About US</p>
            </div>
            <div className='col'>
                <h3>Company</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About US</p>
            </div>
            <div className='col'>
                <h3>Legal</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About US</p>
            </div>
            <div className='col'>
                <h3>information</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About US</p>
            </div>

        </div>
        
    </div>
  )
}

export default Footer