import React from 'react';
import GoogleLogin from 'react-google-login';
import {useDispatch, useSelector} from 'react-redux';
import '../styling/Homepage.css';

import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";




const Homepage = () => {
  return (
    <div>Homepage</div>
  )
}

export default Homepage
