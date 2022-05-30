import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar2 bg-theme2 justify-content-start">
                
                <Link to="/grocery/" className="btn border-0 bg-theme rounded navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">
                    <b>Grocery</b>  
                </Link>

                <a href=" " className="btn border-0 bg-theme navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">
                    <b>Electronics</b> 
                </a>

                <a href=" " className="btn border-0 bg-theme navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">
                    <b>Stationery</b> 
                </a>

                <Link className="navbar-toggler" type="button" >
                    <Link to="/all/" className="btn border-0 bg-theme text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">
                        <b>All</b> 
                    </Link>
                </Link>

                

                <div className="collapse navbar-collapse">
                    
                    <a href=" " className="btn border-0 bg-theme navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">
                        <b>Pharmaceuticals</b> 
                    </a>

                    <a href=" " className="btn border-0 bg-theme navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">
                        <b>Fashion</b>  
                    </a>

                    <a href=" " className="btn border-0 bg-theme navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">
                        <b>Computer</b> 
                    </a>

                    <a href=" " className="btn border-0 bg-theme navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light align-content-end zoom1">
                        <b>All</b> 
                    </a>

                </div>
            </nav>
        )
    }
}
