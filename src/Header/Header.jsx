import React, { useState, useEffect } from "react";
import "./header.sass";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { Modal } from '@material-ui/core/';
import { Button } from 'antd';
import Login from '../Pages/Login/Login';
import ModalBootstrap from "react-bootstrap/Modal";
import ButtonBootstrap from "react-bootstrap/Button";

const menu_list = [
  { text: "My House", link: "/" },
  { text: "Find Designer", link: "/designer" },
  { text: "Saved Ideas", link: "/idea" },
];

const signIn = (item) => {
  if (item.text === "Login/SignUp") {
    if (localStorage.getItem("user") != null) {
      return localStorage.getItem("user");
    } else {
      return item.text;
    }
  } else {
    return item.text;
  }
};

const Header = () => {
  const [user, setUser] = useState(null);
  const [logined, setLogined] = useState(false);

  useEffect(()=>{
    const userToken = localStorage.getItem("user");
    if (userToken) {
      setUser(JSON.parse(userToken));
      setOpen(false)
      setLogined(true)
    }  
  }, []);
  const [open, setOpen] = useState(false);
  const loggedIn = () => {
    const userToken = localStorage.getItem("user");
    if (userToken) {
      setUser(JSON.parse(userToken));
      setOpen(false)
      setLogined(true)
    }  
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [openLogout, setOpenLogout] = useState(false);
  const handleOpenLogout = () => {
    setOpenLogout(true)
  }

  const handleCloseLogout = () => {
    setOpenLogout(false)
  }

  const agreeLogout = () => {
    setOpenLogout(false)
    localStorage.removeItem("user");
    setUser(null);
    setLogined(false)
  }

  return (
    <div className="header">
      <div className="navigation">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="menu">
          <ul>
            {menu_list.map((item, index) => (
              <li>
                <NavLink exact activeClassName="active" to={item.link} className="item">
                  {signIn(item)}
                </NavLink>
              </li>
            ))}
            <li>
              {logined ? (
                <Button onClick={handleOpenLogout} className="item_login">
                  {user.email}
                </Button>) : (
                <Button onClick={handleOpen} className="item_login">
                  Login/Sign Up
                </Button>)
              }
            </li>
          </ul>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Login onChangeStateLogIn={loggedIn}/>
        </Modal>
      </div>

      <ModalBootstrap show={openLogout} onHide={handleCloseLogout}>
        <ModalBootstrap.Header closeButton>
            <ModalBootstrap.Title>Are you sure to logout?</ModalBootstrap.Title>
        </ModalBootstrap.Header>
        {/* <ModalBootstrap.Body>
          <b>Are you sure to logout?</b>
        </ModalBootstrap.Body> */}
        <ModalBootstrap.Footer>
          <ButtonBootstrap variant="secondary" onClick={handleCloseLogout}>
            No
          </ButtonBootstrap>
          <ButtonBootstrap variant="primary" onClick={agreeLogout}>
            Yes
          </ButtonBootstrap>
        </ModalBootstrap.Footer>
      </ModalBootstrap>
    </div>
  );
};

export default Header;