import React, { Component } from 'react'
import FeedbackServey from '../component/techExpoForm/FeedbackForm'
import '../component/layout.css'
import Footer from "../component/reuseable/Footer"
import HeaderDoc from "../component/reuseable/HeaderDoc"

export default class TechExpoFeedbackForm extends Component {
    render() {
        return (
            <div>
                <HeaderDoc/>
                <FeedbackServey/>
                <Footer/>
            </div>
        )
    }
}
