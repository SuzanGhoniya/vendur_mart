import * as React from "react"
import '../component/layout.css'
import Footer from "../component/reuseable/Footer"
import HeaderDoc from "../component/reuseable/HeaderDoc"
import Refund from "../component/Documents/Refund"
import { Button } from "react-bootstrap"

const RefundPage = () => {
  return (
    <div >
    <HeaderDoc/>
      <div className="container-fluid">
        <div className="row my-2">
          <div className="card col-10 mx-auto bg-light">
            <div className="card-body">
              <h5 className="card-title text-center">Refund Policy</h5>
              <h6 className="card-subtitle mb-2 text-muted text-center">vendurmart</h6>
              <p className="card-text"><Refund/></p>
              <center><a href="https://firebasestorage.googleapis.com/v0/b/vendur-mart.appspot.com/o/Return%20%26%20Refund%20Policy.pdf?alt=media&token=fdd7786b-d7e7-47cb-b0c0-8589a577207f" target="_blank" className=" text-center card-link btn border-0 bg-theme navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">Download Refund Policy</a></center>
            </div>
          </div>
        </div>
        </div>
    <Footer/>
    </div>
  );
}

export default RefundPage
