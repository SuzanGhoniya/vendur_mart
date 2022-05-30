import React from "react";
import { useState } from "react";
import { register } from "./auth";
import { validation } from "./auth";
import { googleLogin } from "./auth";
import { Link } from "gatsby";
import loginbackgroundSVG from '../../images/loginBkg.svg'
import HeaderDoc from "../reuseable/HeaderDoc";
import Footer from "../reuseable/Footer";

const Register = () => {
  const [form,setForm] = useState({
      email:'',
      password:'',
      customerName:''
  })
  const handleSubmit = async(e)=>{
      e.preventDefault();
      await register(form);
  }

  const handleVelidation = async(e) =>{
    e.preventDefault();
    await validation(form);
  } 

  // const userInformation = async(e) => {
  //   e.preventDefault();
  //   db.collection("userData").add({
  //     name: customerName
  //   });
  
  //   setCustomerName("");
  // };

  const googleDirectLognin = async(e) =>{
    e.preventDefault();
    await googleLogin();
  }

  return (
    <div>
    <HeaderDoc/>
    <section className="d-flex align-items-center min-vh-100 py-md-0 "> 
    <div className="card container shadow-lg borderRounded border-0 bg-light">
        <div className="row d-flex align-items-center">
            <div className="no-gutters">
                <img
                    src={"https://firebasestorage.googleapis.com/v0/b/vendur-mart.appspot.com/o/login.jpg?alt=media&token=6948a2ff-1eac-442c-a34e-e6948289f5a0"}
                    className="img-fluid image-size borderRounded mx-auto login-card-img d-none d-lg-block"
                    alt="Phone image"
                />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 py-5 mx-auto">
                <center className="mb-3">
                    <div className="display-4">Register</div>
                </center>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                      <label className="form-label pl-3" for="emailid">
                        Name
                      </label>
                      <input
                        type="name"
                        className="form-control mt-1 borderRounded ps-3"
                        id="InputName"
                        placeholder="Enter Your Name"
                        onChange={(e) =>
                            setForm({ ...form, customerName: e.target.value })
                        }
                        required minLength={3}
                      />
                  </div>
                    <div className="form-outline mb-4">
                        <label className="form-label pl-3" for="emailid">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="emailid"
                            className="form-control borderRounded button-design shadow-sm pl-4"
                            placeholder="E-mail Address"
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                            required
                        />
                    </div>

                    <div className="form-outline mb-2">
                        <label className="form-label pl-3" for="Password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="Password"
                            className="form-control borderRounded button-design shadow-sm pl-4"
                            placeholder="Password"
                            onChange={(e) => 
                              setForm({...form, password: e.target.value})
                            }
                            required required minLength={6}
                        />
                    </div>

                    <div className="d-flex justify-content-around align-items-center mb-2">
                        <div className="form-check mt-2 ms-2">
                            <input type="checkbox" className="form-check-input" required minLength={6}/>
                            <label className="form-check-label" >
                                <a href="/t&c" target="_blank">Terms And Conditions</a>
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block button-design borderRounded">
                        Sign up
                    </button>
                </form>
                <center>
                    <h5 className="mt-4 ms-2"> Sign in with </h5>
                    <button className="bi bi-google border-0 borderRounded bg-light mt-1 icon text-danger" onClick={googleDirectLognin}></button> <span>    </span>
                    <button className="bi bi-facebook border-0 borderRounded bg-light mt-1 icon text-primary"></button> <span>    </span>
                    <button className="bi bi-apple border-0 borderRounded bg-light mt-1 icon text-secondary"></button> <span>    </span>
                </center>
                <center className="mt-3">
                    <span>Register already? </span>
                    <Link to="/home" className="border-0 text-decoration-none border-0 borderRounded bg-theme font-size1 text-light px-4 py-2 ms-3"> Login</Link>
                </center>
            </div>
        </div>
    </div>
</section>
</div>
  )
}

export default Register;