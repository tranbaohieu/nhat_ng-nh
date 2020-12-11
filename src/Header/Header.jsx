import React, { useState } from "react";
import "./header.sass";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { Button, Modal } from "@material-ui/core";
// import Modal from "antd/lib/modal/Modal";
import Login from "../Pages/Login/Login";

const menu_list = [
  { text: "My House", link: "/" },
  { text: "Find Designer", link: "/designer" },
  { text: "Saved Ideas", link: "/idea" },
  // { text: "Register",link:"/register"}
];

const signIn = (item) => {
  if (item.text === "Login/SignUp") {
    if (localStorage.getItem("name") != null) {
      return localStorage.getItem("name");
    } else {
      return item.text;
    }
  } else {
    console.log(localStorage.getItem("name"));
    return item.text;
  }
};

const Header = () => {

  return (
    <div className="header">
      <div className="navigation">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="menu">
          {menu_list.map((item, index) =>
            index === 0 ? (
              <Link key={item.link} to={item.link} className="item active">
                {signIn(item)}
              </Link>
            ) : (
              <Link key={item.link} to={item.link} className="item disabled">
                {signIn(item)}
              </Link>
            )
          )}

          <Link to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
