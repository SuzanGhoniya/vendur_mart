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

const Shome = ({data}) => {
  return (
    <div>
    <Dualinfoblock
      heading="Trending Product"
      img={TrandingImage}
      TopicTitle="boAt Xtend Smartwatch"
      Price="Price ₹3,499.00"
      imgTitle=""
      iCaption=""
      infomation="Alexa built-in Voice Assistant that sets reminders, alarms and answers questions from weather forecasts to live cricket scores at your command! 42mm big square colour LCD display with a round dial features complete capacitive touch experience to let you take control, effortlessly.The watch comes with a stress monitor that reads your HRV (Heart Rate Variabilities) to indicate stress levels. Its 14 sports mode and 5 ATM dust, splash and sweat resistance makes it the perfect fitness companion to have.Receive all your important notifications right on your watch, without taking out your phone. From calls & texts, to hydration & alarm alerts, get it all in one place."
    />
    <Infoblock
      heading="About Vision"
      info="VendurMart is specially designed for small, 
        medium and large scale businesses by allowing 
        them to connect and grow together, find business 
        leads, track their own growth, connect with customers 
        directly and many more. It is  a simple solution to 
        every business related problem."
      btext="About Us"
    />
    <BackToTop />
    <Social />
    </div>
  );
}

export default Shome
