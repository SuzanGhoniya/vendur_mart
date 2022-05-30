import * as React from "react"
import '../component/layout.css'
import Footer from "../component/reuseable/Footer"
import HeaderDoc from "../component/reuseable/HeaderDoc"
import ShippingD from "../component/Documents/ShippingD"
import { Button } from "react-bootstrap"

const ShippingandDeliveryPolicy = () => {
  return (
    <div >
    <HeaderDoc/>
      <div className="container-fluid">
        <div className="row my-2">
          <div className="card col-10 mx-auto bg-light">
            <div className="card-body">
              <h5 className="card-title text-center">Shipping and Delivery Policy</h5>
              <h6 className="card-subtitle mb-2 text-muted text-center">vendurmart</h6>
              <p className="card-text"><ShippingD/></p>
              <center><a href="https://firebasestorage.googleapis.com/v0/b/vendur-mart.appspot.com/o/Shipping%20and%20Delivery%20Policy.pdf?alt=media&token=6725757a-358b-4b50-84a7-1d33ec5a5741" target="_blank" className=" text-center card-link btn border-0 bg-theme navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">Download Privacy Policy</a></center>
            </div>
          </div>
        </div>
        </div>
    <Footer/>
    </div>
  );
}

export default ShippingandDeliveryPolicy
