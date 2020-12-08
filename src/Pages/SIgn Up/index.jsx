import React, { Component } from "react";
import { Card, Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Redirect, Link } from "react-router-dom";

const register = () => {
  return (
    <div className="App">
      <Card
        style={{
          width: 340,
          margin: "auto",
          marginTop: 64,
          marginBottom:64,
          textAlign: "center",
        }}
        bordered={true}
      >
        <div style={{ textAlign: "center", marginBottom: 32, fontSize: 50 }}>
          Register
        </div>
        <Form
          name="register"
          className="register-form"
          initialValues={{
            remember: true,
          }}
        //   onFinish={this.onFinish}
        >
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
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            //   onChange={this.handlePassword}
            />
          </Form.Item>

          <Form.Item
            name="nickname"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            //   onChange={this.handleName}
            />
          </Form.Item>

          <Form.Item>
            <Link to="/login"> Already have an account? Login now</Link>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
            //   onClick={this.handleSubmit}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default register;
