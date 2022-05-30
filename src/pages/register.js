import * as React from "react"
import '../component/layout.css'
import RegisterApp from "../component/auth/RegisterApp"
import HeaderDoc from "../component/reuseable/HeaderDoc"
import Footer from "../component/reuseable/Footer"


const RegisterPage = (data) => {
  console.log(data);
  return (
    <div>
    <RegisterApp/>
    <Footer/>
    </div>
  )
}

export default RegisterPage
