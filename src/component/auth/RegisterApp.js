import React from 'react'
import { auth } from '../../Firebase/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import Register from './register';
import Index from '../../pages/index'
import { Redirect } from 'react-router-dom';
import { Link } from 'gatsby';
import HomePage from '../../pages/home';

function RegisterApp() {
    const [user] = useAuthState(auth);
    return (
      user ? <HomePage/> : <Register/>
    );
  }
    
export default RegisterApp;