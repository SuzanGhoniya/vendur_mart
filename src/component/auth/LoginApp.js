import React from 'react'
import { auth } from '../../Firebase/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import Login from './login';
import Home from '../home/Home';
import Shome from '../home/Shome';

function LoginApp() {
    const [user] = useAuthState(auth);
    return (
      user ? <Home/> : <Login/>
    );
  }
    
export default LoginApp;