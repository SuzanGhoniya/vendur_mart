import React from "react";
import { Link } from "gatsby";
import { auth } from "../../Firebase/firebase";
import { db } from "../../Firebase/firebase";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../reuseable/Header";
import Footer from "../reuseable/Footer";

const Mainpage = () => {
  const [users, setGetData] = useState();
  let currentUser = auth.currentUser;

  const getUser = async () => {
    try {
      const documentSnapshot = await db
        .collection("user")
        .doc(currentUser.uid)
        .get();
      const userData = documentSnapshot.data();
      setGetData(userData);
    } catch {}
  };

  useEffect(() => {
    getUser();
  }, []);

  const testsomthing = () => {
    db.collection("user")
      .doc(currentUser.uid)
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.data().Name);
        return querySnapshot.data().Name;
      });
  };

  const logout = () => {
    auth.signOut();
  };
  return (
    <div>
      <Header />
      <div className="min-vh-100 my-auto">
        <center>
          <div className="display-4 mb-3">Profile</div>
          {currentUser.photoURL ? (
            <img
              src={currentUser.photoURL}
              className="pImage border-0 shadow-lg"
              alt=""
            />
          ) : (
            <img
              src={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
              className="pImage"
              alt=""
            />
          )}
          <br />
          <br />
          <span className="lead font-weight-bold mt-5">Name : </span>
          {currentUser.displayName ? (
            <span>{currentUser.displayName}</span>
          ) : (
            <span>{testsomthing()}</span>
          )}
          <br />
          <span className="lead font-weight-bold mt-5">Email : </span>
          {currentUser.email}
          <br />

          <Link to="/">
            <button
              className="btn border-0 borderRounded text-light bg-success px-5 mt-4 zoom1"
              onClick={logout}
            >
              LOGOUT
            </button>
          </Link>
          <br />
        </center>
      </div>
      <Footer />
    </div>
  );
};

export default Mainpage;
