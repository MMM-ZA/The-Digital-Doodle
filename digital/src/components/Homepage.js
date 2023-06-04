import React from 'react';
import GoogleLogin from 'react-google-login';
import {useDispatch, useSelector} from 'react-redux';
import  classes from '../styling/Homepage.module.css';

import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

const Homepage = () => {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  return (
    <div className={classes.home__page } style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn ? (
        <div className={classes.login__message}>
          <h2>📗</h2>
          <h1>Exploring a World of Ideas</h1>
          <p> Sign up and read some quality blogs.
          </p>
          <GoogleLogin
            clientId=""
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className={classes.login__button}
              >
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true }
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage
