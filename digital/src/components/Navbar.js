import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setInput,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

import classes from  "../styling/Navbar.module.css";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("tech");
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();

  const logout = (response) => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };

  return (
    <div className={classes.navbar}>
      <h1 className={classes.navbar__header}>Digital Doodle 💬</h1>
      {isSignedIn && (
        <div className={classes.blog__search}>
          <input
            className={classes.search}
            placeholder="Search for a blog"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className={classes.submit} onClick={handleClick}>
            Search
          </button>
        </div>
      )}

      {isSignedIn ? (
        <div className={classes.navbar__user__data}>
          <Avatar
            className={classes.user}
            src={userData?.imageUrl}
            alt={userData?.name}
          />
          <h1 className={classes.signedIn}>{userData?.givenName}</h1>
          <GoogleLogout
            clientId=""
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className={classes.logout__button}
              >
                Logout
              </button>
            )}
            onLogoutSuccess={logout}
          />
        </div>
      ) : (
        <h1 className={classes.notSignedIn}>User not available 😞</h1>
      )}
    </div>
  );
};

export default Navbar;
