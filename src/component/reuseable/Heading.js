import React from 'react'

export default function Heading({title,textcolor}) {
    return (
        <div className="container-fluid row">
            <div className="col text-center mb-4">
                <div className="text-size3 text-warning">
                    <div className={textcolor}>
                        {title}
                    </div>
                </div>
            </div>
        </div>
    )
}
