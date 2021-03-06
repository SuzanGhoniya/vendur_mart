import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function Infoblock({heading, info, btext}) {
    return (
        <section className="bg-theme my-5 py-4 borderRoundedCard mx-2 shadow-lg">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4 text-font text-justify">
                            {info}
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">{btext}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
