import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo2 from '../../images/fin.png'
import Profile2 from '../../images/profile1.svg'
import cart2 from '../../images/cart2.svg'
import search2 from '../../images/search2.svg'

export default function Header() {
    return (
        <div id="header">
            <nav className="navbar navbar-expand navbar-light bg-theme">
            <div className="zoom1" >
                <Link to="/home" >
                    <img className="ms-5" src={Logo2} alt="VendurMart Logo" width="40px"/>
                </Link>  
            </div>

                <div className="container-fluid text-fluid justify-content-end" >
                    
                    <Link to="" className="nav-link text-dark zoom">
                        <img src={search2} alt="logo goes here mx-auto" width="25px"/>
                    </Link> 

                    <button className="nav-link btn text-dark zoom snipcart-checkout">
                        <img src={cart2} alt="btn logo goes here mx-auto" width="30px"/>
                    </button>
                    
                    <Link to="/Profile/" className="nav-link text-dark zoom">
                        <img src={Profile2} alt="logo goes here mx-auto bg-light" width="35px"/>
                    </Link>                  
                </div>    
            </nav>
        </div>
    )
}

