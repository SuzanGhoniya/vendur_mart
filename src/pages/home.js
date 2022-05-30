import * as React from "react"
import '../component/layout.css'
import LoginApp from "../component/auth/LoginApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase";
import Shome from "../component/home/Shome";
import Card from "../component/products/Card";
import { graphql } from "gatsby";
import Footer from "../component/reuseable/Footer";

const HomePage = ({data}) => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <LoginApp/>
      {
        user?<Card tranding={data.tranding}/> : <div/>
      }
      {
        user?<Shome/> : <div/>
      }
      <Footer/>
    </div>
  );
}

export const query = graphql`
  {
    tranding: allContentfulTranding {
      edges {
        node {
          id
          name
          price
          image {
            title
            gatsbyImageData(
             placeholder: BLURRED
             formats: [AUTO, WEBP, AVIF]
            )
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default HomePage
