import React, { Component } from 'react'
import Servey from '../component/Form/Servey'
import '../component/layout.css'
import Footer from "../component/reuseable/Footer"
import HeaderDoc from "../component/reuseable/HeaderDoc"

export default class form extends Component {
    render() {
        return (
            <div>
                <HeaderDoc/>
                <Servey/>
                <Footer/>
            </div>
        )
    }
}
