import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function Dualinfoblock({heading, img, TopicTitle, Price, imgTitle, iCaption, infomation }) {
    return (
        <section className="my-4 py-2 bg-theme borderRoundedCard mx-2">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <h5 class="card-title text-warning">{TopicTitle}</h5>
                        <div className="lead text-white mb-3">
                            {Price}
                        </div>
                        <div className="lead text-white mb-5 text-justify">
                            {infomation}
                        </div>
                        
                    </div>
                    <div className="col-4">
                        <div className="card bg-theme rounded zoom" style={{ border: 'none' }}>
                            <img src={img}/>
                            <div className="card-body">
                                <h5 className="card-title text-warning">{imgTitle}</h5>
                                <p className="card-text text-white">
                                    {iCaption}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
