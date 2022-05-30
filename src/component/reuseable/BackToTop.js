import React from 'react'
import { Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Button } from 'react-bootstrap'

export default function BackToTop() {
    return (
        <div className="row mx-2 mb-3" >
            <button className="borderRounded container-fluid text-center border-0 bg-theme text-decoration-none" onClick={() => scrollTo('#header')}>
                <div className="text-light py-3" >
                        Back to Top                    
                </div>
            </button>
        </div>
    )
}
