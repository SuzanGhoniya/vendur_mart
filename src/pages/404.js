import * as React from "react"
import { Link } from "gatsby"
import ErrorImage from '../images/lostinspace.png'
import '../component/layout.css'


// markup
const NotFoundPage = () => {
  return (
    <div>
      <div className="card cardHeight border-0 shadow-lg min-vh-100">
        <img src={ErrorImage} alt="404 image" height="300px" width="400px" className="img-fluid mx-auto d-block mt-5"/>
        <div className="mx-auto mt-3 text-error-font">
          <span className="display-4 text-light">Lost In Space ?</span><br/>
          <Link to="/" className="btn my-1 bg-primary text-light mx-auto d-block mt-4 borderRounded col-6">Home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
