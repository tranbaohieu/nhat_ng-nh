import React, { useState } from "react";
import { Card, Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Modal } from "@material-ui/core/";
import "./dist/login.css";
// import SignUp from "../SIgn Up/index";

// import "../../Header/header.sass"
// import "./login.sass";
// import { Link } from "react-router-dom";

const Login = () => {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const email = useFormInput("");
  const password = useFormInput("");
  const confirmPassword = useFormInput("");

  const handleOpenLogin = () => {
    setLogin(true);
    setRegister(false);
  };
  const handleOpenRegister = () => {
    setLogin(false);
    setRegister(true);
  };
  const handleClose = () => {
    setRegister(false);
    setLogin(false);
  };

  const handleSignUp = () => {
    let signUpForm = {
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    };
    console.log(signUpForm);
  };

  const handleSignIn = () => {
    let signInForm = {
      email:email.value,
      password:password.value
    };
    console.log(signInForm)
  };

  return (
    <div className="App" style={{ backgroundColor: "transparent" }}>
      {login ? (
        /* sign up form */
        <Card
          style={{
            width: 440,
            height: 470,
            margin: "auto",
            marginTop: 178,
            marginBottom: 124,
            textAlign: "center",
          }}
          bordered={true}
        >
          <div>
            <Button
              id="button1"
              style={{ backgroundColor: "transparent" }}
              onClick={handleOpenRegister}
            >
              Log In
            </Button>
            <Button
              id="button2"
              style={{ backgroundColor: "transparent" }}
              onClick={handleOpenLogin}
            >
              Sign Up
            </Button>
            <Modal
              open={register}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            ></Modal>
          </div>

          <Form
            // id="components-form-demo-normal-login"
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            // onFinish={this.onFinish}
          >
            <h2 style={{ color: "#F49A00", paddingTop: 20 }}>
              Welcome to Ouchi
            </h2>
            <span style={{ display: "inline-block", paddingBottom: 17 }}>
              Let's build your dream house together
            </span>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input
                style={{ height: "50px", borderRadius: "30px" }}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                value={email}
                {...email}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                style={{ height: "50px", borderRadius: "30px" }}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                value={password}
                {...password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                style={{ height: "50px", borderRadius: "30px" }}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                {...confirmPassword}
                // onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Button
                style={{
                  display: "block",
                  width: "100%",
                  height: "50px",
                  borderRadius: "30px",
                  backgroundColor: "#F49A00",
                  border: "none",
                }}
                type="primary"
                htmlType="submit"
                onClick={handleSignUp}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </Card>
      ) : (
        /* login form */
        <Card
          style={{
            width: 440,
            height: 400,
            margin: "auto",
            marginTop: 178,
            marginBottom: 124,
            textAlign: "center",
          }}
          bordered={true}
        >
          <div>
            <Button
              id="button3"
              style={{ backgroundColor: "transparent" }}
              onClick={handleOpenRegister}
            >
              Log In
            </Button>
            <Button
              id="button4"
              style={{ backgroundColor: "transparent" }}
              onClick={handleOpenLogin}
            >
              Sign Up
            </Button>
            <Modal
              open={login}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            ></Modal>
          </div>

          <Form
            // id="components-form-demo-normal-login"
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            // onFinish={this.onFinish}
          >
            <h2 style={{ color: "#F49A00", paddingTop: 20 }}>
              Welcome to Ouchi
            </h2>
            <span style={{ display: "inline-block", paddingBottom: 17 }}>
              Let's build your dream house together
            </span>

            <Form.Item
              name="userEmail"
              rules={[
                {
                  required: true,
                  message: "Please input your User Email!",
                },
              ]}
            >
              <Input
                style={{ height: "50px", borderRadius: "30px" }}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                value={email}
                {...email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                style={{ height: "50px", borderRadius: "30px" }}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                value={password}
                {...password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Button
                style={{
                  display: "block",
                  width: "100%",
                  height: "50px",
                  borderRadius: "30px",
                  backgroundColor: "#F49A00",
                  border: "none",
                }}
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={handleSignIn}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      )}
    </div>
  );
};

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
