import * as React from "react"
import '../component/layout.css'
import Footer from "../component/reuseable/Footer"
import HeaderDoc from "../component/reuseable/HeaderDoc"
import Tc from "../component/Documents/tc"
import { Button } from "react-bootstrap"

const TCPage = () => {
  return (
    <div >
    <HeaderDoc/>
      <div className="container-fluid">
        <div className="row my-2">
          <div className="card col-10 mx-auto bg-light">
            <div className="card-body">
              <h5 className="card-title text-center">Terms And Conditions</h5>
              <h6 className="card-subtitle mb-2 text-muted text-center">vendurmart</h6>
              <p className="card-text"><Tc/></p>
              <center><a href="https://firebasestorage.googleapis.com/v0/b/vendur-mart.appspot.com/o/Terms%20%26%20Conditions.pdf?alt=media&token=946db239-f1ad-4cb6-bc92-2b0b643f1caa" target="_blank" className=" text-center card-link btn border-0 bg-theme navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">Download Terms and condition</a></center>
            </div>
          </div>
        </div>
        </div>
    <Footer/>
    </div>
  );
}

export default TCPage
