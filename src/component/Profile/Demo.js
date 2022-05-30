import React from "react";
import { Link } from "gatsby";
import { auth } from "../../Firebase/firebase";
import Header from "../reuseable/Header";
import Footer from "../reuseable/Footer";

const Demopage = () => {
  const logout = () => {
    auth.signOut();
  };
  return (
    <div>
      <Header />
      <div className="min-vh-100 my-auto">
        <center>
          <Link to="/">
            <button
              className="btn border-0 borderRounded text-light bg-success px-5 mt-4 zoom1"
              onClick={logout}
            >
              Login
            </button>
          </Link>
          <br />
        </center>
      </div>
      <Footer />
    </div>
  );
};

export default Demopage;
