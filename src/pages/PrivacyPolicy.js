import * as React from "react"
import '../component/layout.css'
import Footer from "../component/reuseable/Footer"
import HeaderDoc from "../component/reuseable/HeaderDoc"
import Privacy from "../component/Documents/Privacy"
import { Button } from "react-bootstrap"

const PrivacyPolicyPage = () => {
  return (
    <div >
    <HeaderDoc/>
      <div className="container-fluid">
        <div className="row my-2">
          <div className="card col-10 mx-auto bg-light">
            <div className="card-body">
              <h5 className="card-title text-center">Privacy Policy</h5>
              <h6 className="card-subtitle mb-2 text-muted text-center">vendurmart</h6>
              <p className="card-text"><Privacy/></p>
              <center><a href="https://firebasestorage.googleapis.com/v0/b/vendur-mart.appspot.com/o/Privacy%20Policy.pdf?alt=media&token=3b0a6d87-02da-4aeb-96eb-0f7fc33ad8dd" target="_blank" className=" text-center card-link btn border-0 bg-theme navbar-brand text-fluid ms-5 text-size2 text-decoration-none text-light zoom1">Download Privacy Policy</a></center>
            </div>
          </div>
        </div>
        </div>
    <Footer/>
    </div>
  );
}

export default PrivacyPolicyPage
