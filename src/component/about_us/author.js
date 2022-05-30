import React from 'react'
import { Link } from 'gatsby'
import Heading from '../reuseable/Heading'
import Infoblock from '../reuseable/Infoblock'

export default function author() {
    return (
        <div>
            <div className="col-9 mx-auto">
                <Heading title="Authors" textcolor="text-color-theme"/>
                <div className="row row-cols-1 row-cols-md-3 g-3 ">
                <div className="col">
                    <Link to="" className="card h-100 zoom1 shadow bg-theme borderRounded" style={{ textDecoration: 'none' }}>
                    <div className="card-body text-white text-center m-3">
                        <h5 className="card-title">Jignesh Baria</h5>
                        <p className="card-text">B.Tech-Computer Science Engineering</p>
                        <Link to="https://github.com/Jignesh220" className="btn bg-warning text-white btn-block" target="_blank">
                            <div className="text-color-theme">GitHub</div> 
                        </Link>
                    </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to="" className="card h-100 zoom1 shadow bg-theme borderRounded" style={{ textDecoration: 'none' }}>
                    <div className="card-body text-white text-center m-3">
                        <h5 className="card-title">Suzan Ghoniya</h5>
                        <p className="card-text">B.Tech-Computer Science Engineering</p>
                        <Link to="https://github.com/SuzanGhoniya" className="btn bg-warning text-white btn-block" target="_blank">
                            <div className="text-color-theme">GitHub</div> 
                        </Link>
                    </div>
                    </Link>
                </div>
                <div>
                    
                </div>
                
            </div>
        </div>
        <Infoblock heading="About us"
      info="VendurMart is an E-commerce platform where you can list your business 
      and connect with businesses worldwide and grow together.
      It supports small, medium and large businesses. Through VendurMart 
      one gets buyleads which helps user to contact any other vendur and 
      turn it into a business deal. Users can also shop from the listed 
      products Want to increase your outreach? Register now"
      btext="Authors"
      />
        </div>
    )
}
