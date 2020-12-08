import React, { Component } from "react";
import { Card, Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import FacebookLogin from "react-facebook-login";

import GoogleLogin from "react-google-login";
import { Redirect, Link } from "react-router-dom";

const Login = () => {
  const responseFacebook = (response) => {
    localStorage.setItem("name", response.name);
    localStorage.setItem("avatar", response.picture.data.url);
    window.location.reload(true);
  };
  const redirectHome = () => {
    window.location.reload(true);
    return <Redirect to="/" />;
  };
  const responseGoogle = (response) => {
    console.log(response);
    localStorage.setItem("name", response.Nw.profileObj.name);
    localStorage.setItem("avatar", response.Nw.profileObj.imageUrl);
    // window.location.reload(true);
  };
  // const responseGoogle = (response) => {
  //   console.log(response.Nw)
  //   // window.location.reload(true);
  // }
  return (
    <div className="App">
      <Card
        style={{
          width: 340,
          margin: "auto",
          marginTop:64,
          marginBottom: 64,
          textAlign: "center",
        }}
        bordered={true}
      >
        <div style={{ textAlign: "center", marginBottom: 32, fontSize: 50 }}>
          Login
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
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              // onChange={handlePassWord}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              // onClick={this.handleClick}
            >
              Log in
            </Button>
          </Form.Item>
          <Form.Item>
            <FacebookLogin
              appId="782795008940031"
              fields="name,email,picture"
              callback={responseFacebook}
            />
          </Form.Item>
          <Form.Item>
            <GoogleLogin
              clientId="116556632783-lcj18jn3usv1fp6mh77vvtjjapls8rhs.apps.googleusercontent.com"
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
            />
          </Form.Item>
          <Form.Item>
            <Link to="/register">Not have an account? Register now</Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
