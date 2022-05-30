import * as React from "react"
import { graphql } from "gatsby"
import '../component/layout.css'
import Footer from "../component/reuseable/Footer"
import Header from "../component/reuseable/Header"
import Nav from "../component/reuseable/Nav"
import Infoblock from "../component/reuseable/Infoblock"
import Dualinfoblock from "../component/reuseable/Dualinfoblock"
import Author from "../component/about_us/author"
import HeaderDoc from "../component/reuseable/HeaderDoc"

const AboutPage = () => {
  return (
    <div>
      <HeaderDoc/>
      <br/>
      <Author/>
      <Footer/>
    </div>
  )
}

export default AboutPage
