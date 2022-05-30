import * as React from "react";

import "../component/layout.css";
import HeaderDoc from "../component/reuseable/HeaderDoc";
import Footer from "../component/reuseable/Footer";
import ResetPassword from "../component/auth/resetPassword";

const ForgotPasswordpage = () => {
  return (
    <div>
      <HeaderDoc />
      <div>
        <div className="container-fluid">
          <div className="row my-2">
            <div className="card col-10 mx-auto bg-light">
              <div className="card-body my-auto">
                <h5 className="card-title text-center mt-5">
                  Reset Password
                </h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">
                </h6>
                <ResetPassword/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPasswordpage;
