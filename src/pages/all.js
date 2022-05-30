import React from "react";
import Header from "../component/reuseable/Header";
import HeaderDoc from "../component/reuseable/HeaderDoc";
import Footer from "../component/reuseable/Footer";
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from "../Firebase/firebase";
import '../component/layout.css'
import All from "../component/products/all";
import { graphql } from "gatsby";

const AllPage = ({data}) => {
    const user = useAuthState(auth);
  return (
    <section>
        {user?<Header/> : <HeaderDoc/>}
        <All tranding={data.tranding}/>
        <Footer/>
    </section>
  );
};

export const query = graphql`
  {
    tranding: allContentfulAll {
      edges {
        node {
          id
          name
          price
          image {
            title
            gatsbyImageData(height: 200, width: 200)
            file {
              url
            }
          }
        }
      }
    }
  }
`
export default AllPage;
