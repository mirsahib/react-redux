import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth-store";

const Header = () => {
  const dispatch = useDispatch()
  const logoutHandler = ()=>{
    dispatch(authAction.logOut())
  }

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button onClick={logoutHandler} className="logout-btn">Log Out</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
