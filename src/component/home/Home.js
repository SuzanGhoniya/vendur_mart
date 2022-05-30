import * as React from "react"
import '../layout.css'
import Header from '../reuseable/Header'
import Footer from "../reuseable/Footer"
import { graphql } from "gatsby"
import Card from "../products/Card"
import Heading from "../reuseable/Heading"
import Dualinfoblock from "../reuseable/Dualinfoblock"
import Infoblock from "../reuseable/Infoblock"
import BackToTop from "../reuseable/BackToTop"
import TrandingImage from "../../images/Tranding.png"
import Social from "../reuseable/social"
import Nav from "../reuseable/Nav"
import Caro from "../reuseable/caro"

const Home = ({data}) => {
  return (
    <div>
    <Header />
    <Nav />
    <Caro />
    <br />
    <Heading title="Product" textcolor="text-dark " />
    </div>
  );
}

export default Home
