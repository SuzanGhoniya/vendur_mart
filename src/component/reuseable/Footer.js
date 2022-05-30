import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
    return (
        <footer>
        <div className="footer-block bg-theme text-font">
          <div className="container-fluid">
            <div className="row mb-4">
              <div className="col-md-8 col-12 mx-auto pt-3 text-light">
                <Link to="/t&c" className="mr-2 text-fluid text-size2 text-decoration-none text-light ">
                  Terms & Conditions
                </Link>
                <span className="mr-2 text-warning">
                  |
                </span>
                <Link to="/refund" className="mr-2 text-fluid text-size2 text-decoration-none text-light">
                  Refund Policy
                </Link>
                <span className="mr-2 text-warning">
                  |
                </span>
                <Link to="/PrivacyPolicy" className="mr-2 text-fluid text-size2 text-decoration-none text-light">
                  Privacy Policy
                </Link>
                <span className="mr-2 text-warning">
                  |
                </span>
                <Link to="/ShippingandDeliveryPolicy" className="mr-2 text-fluid text-size2 text-decoration-none text-light">
                  Shipping And Delivery Policy
                </Link>
              </div> 
              <div className="col-md-4 col-7 mx-auto pt-3 text-light">
                <Link to="/" className="mx-auto text-size2 text-decoration-none text-light main_documents text-right">
                  <h6>Copyright &copy;2021 <b className="text-warning">VendurMart</b></h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}