import React, { Component } from 'react'
import { Link } from 'gatsby'
import Mail from '../../images/Mail.svg'

export default function Social() {
    return (
        <div id="header">
            <div className="bg-theme2 mx-auto py-1 text-center">
                <span className='text-light mx-3'>Contact Us</span>
                <a className="navbar-brand text-light" href="tel://8488080983" target="_blank">
                    <i alt="facebook logo" className="bi bi-telephone"/>
                </a>
                <a className="navbar-brand text-light" href="mailto:vendurmart@gmail.com" target="_blank">
                    <i alt="facebook logo" className="bi bi-envelope"/>
                </a>
                <a className="navbar-brand text-light" href="https://www.facebook.com/VendurMart" target="_blank">
                    <i alt="facebook logo" className="bi bi-facebook"/>
                </a>
                <a className="navbar-brand text-light" href="https://www.instagram.com/VendurMart/" target="_blank">
                    <i alt="instagram logo" className="bi bi-instagram"/>
                </a>
            </div>
        </div>
    )
}

