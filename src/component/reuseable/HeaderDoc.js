import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo2 from '../../images/fin.png'

export default function HeaderDoc() {
    return (
        <div id="header">
            <div className="bg-theme mx-auto py-2">
            <center>
                <a className="navbar-brand text-light" href="/">
                    <img src={Logo2} alt="VendurMart Logo" width="20px"/>
                    <br/>
                    VendurMart
                </a>
            </center>
            </div>
        </div>
    )
}

