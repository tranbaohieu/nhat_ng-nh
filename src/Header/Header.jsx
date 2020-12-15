import React, { useState } from "react";
import "./header.sass";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { Modal } from '@material-ui/core/';
import { Button } from 'antd'
import Login from '../Pages/Login/Login'

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
  // const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);
  const [logined, setLogined] = useState(false);


  // const userToken = localStorage.getItem("user")
  // const user = userToken ? JSON.parse(userToken) : null;
  // const logined = userToken ? true : false;
  // const [show, setShow] = useState(false);
  // const toggleModal = () => {
  //   setShow(!show);
  // }
  // const [modalStyle] = React.useState(getModalStyle);

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

  const handleLogOut = () =>{
    localStorage.removeItem("user");
    setUser(null);
    setLogined(false)
  }
  const handleClose = () => {
    setOpen(false)
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
          {menu_list.map((item, index) =>
            index === 0 ? (
              <Link key={item.link} to={item.link} className="item active">
                {signIn(item)}
              </Link>
            ) : (
                <Link key={item.link} to={item.link} className="item disabled">
                  {signIn(item)}
                </Link>
              ))}
          <div className="item disabled">
            {
              logined ? (
                <Button onClick={handleLogOut}>
                  {user.email}
                </Button>) : (
                <Button onClick={handleOpen}>
                  Login/Sign Up
                </Button>)
            }

          </div>

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
    </div>
  );
};

export default Header;