import React, { useState } from "react";
import { Card, Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined} from "@ant-design/icons";
import { Modal } from "@material-ui/core/";
import './dist/login.css'
// import SignUp from "../SIgn Up/index";

// import "../../Header/header.sass"
// import "./login.sass";
// import { Link } from "react-router-dom";

const Login = () => {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

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
  return (
    <div className="App" style={{ backgroundColor: "transparent" }}>
      {login ? (
        <Card
          style={{
            width: 440,
            height: 450,
            margin: "auto",
            marginTop: 178,
            marginBottom: 124,
            textAlign: "center",
          }}
          bordered={true}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button id="button1"
              style={{ backgroundColor: "transparent" }}
              onClick={handleOpenRegister}
            >
              Log In
            </Button>
            <Button id="button2"
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
            <h2 style={{ color: "#F49A00" }}>Welcome to Ouchi</h2>
            <span style={{display:"inline-block",paddingBottom:17}}>Let's build your dream house together</span>
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
                //   onChange={this.handleEmail}
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
                //   onChange={this.handlePassword}
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
                //   onChange={this.handlePassword}
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
                //   onClick={this.handleSubmit}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </Card>
      ) : (
        <Card
          style={{
            width: 440,
            height: 380,
            margin: "auto",
            marginTop: 178,
            marginBottom: 124,
            textAlign: "center",
          }}
          bordered={true}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button id="button3"
              style={{ backgroundColor: "transparent" }}
              onClick={handleOpenRegister}
            >
              Log In
            </Button>
            <Button id="button4"
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
            <h2 style={{ color: "#F49A00" }}>Welcome to Ouchi</h2>
            <span style={{display:"inline-block",paddingBottom:17}}>Let's build your dream house together</span>

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
                // onChange={this.handleEmail}
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
                // onChange={handlePassWord}
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
                // onClick={this.handleClick}
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

export default Login;
