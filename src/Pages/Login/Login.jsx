import React, { Component } from 'react';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';


const Login = () => {
  const responseFacebook = (response) => {
    localStorage.setItem('name', response.name);
    localStorage.setItem('avatar', response.picture.data.url)
  }

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className="App">
      <h1>Please login</h1>

    <FacebookLogin
      appId="782795008940031"
      fields="name,email,picture"
      callback={responseFacebook}
    />
    <br />
    <br />
    <GoogleLogin
      clientId=""
      buttonText="LOGIN WITH GOOGLE"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
    </div>
  );
};

export default Login;