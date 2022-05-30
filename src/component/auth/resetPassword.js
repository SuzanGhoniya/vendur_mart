import { Link } from "gatsby";
import * as React from "react";
import { useState } from "react";
import { ResetPasswordMail } from "./auth";

const ResetPassword = () => {
    const [form,setForm] = useState({
        email:'',
        password:''
    })
  const ResetPasswordWithEmail = async (e) => {
    e.preventDefault();
    await ResetPasswordMail(form);
  };
  return (
    <div className="text-justify min-vh-100 mx-auto my-auto">
      <form className="col-12 mx-auto" onSubmit={ResetPasswordWithEmail}>
        <div className="form-group mt-5 align-bottom">
          <input
            type="email"
            id="emailid"
            className="form-control col-md-8 mx-auto borderRounded button-design shadow-sm pl-4"
            placeholder="Enter your E-mail Address"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <center>
            <button
              type="submit"
              className="btn bg-theme2 button-design borderRounded mt-4 px-4 text-light"
            >
              Reset password
            </button>
            </center>
            <center>
            <div className="mt-5">
                <b>Goto sign in page</b><br/>
                <Link to="/" className="btn bg-theme text-light button-design borderRounded mt-4 px-lg-5 px-sm-3">Sign In</Link>            </div></center>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
