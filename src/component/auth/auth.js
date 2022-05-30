import firebase from 'firebase/compat/app';
import "firebase/compat/app"
import { provider } from '../../Firebase/firebase';
import {auth} from '../../Firebase/firebase'
import { db } from '../../Firebase/firebase';
import { async } from '@firebase/util';
  
export const register = async({email, password, customerName})=>{
  
  if (typeof email !== "undefined") {
    let lastAtPos = email.lastIndexOf("@");
    let lastDotPos = email.lastIndexOf(".");

    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        email.indexOf("@@") == -1 &&
        lastDotPos > 2 &&
        email.length - lastDotPos > 2
      )
    ) {
      return false;
    }
  }
  else{
    const resp = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(alert);
    const res = db.collection("user").doc(auth.currentUser.uid).set({
      Email : email,
      Name : customerName,
      Password : password
    }).catch(alert);
    return res;
  }
}
  
export const login = async({email, password})=>{
    const res = await firebase.auth()
      .signInWithEmailAndPassword(email, password).catch(alert);
      if (typeof email !== "undefined") {
        let lastAtPos = email.lastIndexOf("@");
        let lastDotPos = email.lastIndexOf(".");
    
        if (
          !(
            lastAtPos < lastDotPos &&
            lastAtPos > 0 &&
            email.indexOf("@@") == -1 &&
            lastDotPos > 2 &&
            email.length - lastDotPos > 2
          )
        ) {
          return false;
        }
      }
      else{
        return res;
      }
}

export const validation = async({email}) =>{
    let errors = {};
    let formIsValid = true;
    if (!email) {
      formIsValid = false;
      errors["email"] = "Cannotbe empty";
    }

    if (typeof email !== "undefined") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    return formIsValid;
}

export const googleLogin = async()=>{
  const res = await firebase.auth().signInWithPopup(provider).catch(alert);
  const doc = db.collection("user").doc(auth.currentUser.uid).set({
    Email : auth.currentUser.email,
    Name : auth.currentUser.displayName,
    Password : "gooogle login"
  }).catch(alert);
  return doc;
}

export const ResetPasswordMail = async({email})=>{
  const res = await firebase.auth().sendPasswordResetEmail(email).then(alert(`Check your Mail\npassword reset Link send on ${email}`)).catch(alert);
  return res;
}

export const facebookLogin = async() => {
  const FacebookAuth = new firebase.auth.FacebookAuthProvider();
  const loginFacebook=firebase.auth().signInWithPopup(FacebookAuth).catch(alert);
  return loginFacebook;
}

export const userDetail = async({customerName, password}) => {
  const res = db.collection("customersData").add({
    name : customerName,
    password : password
  })
  return res;
}

export const currentuser = async() =>{
  const uid = auth.currentUser
  return uid;
}