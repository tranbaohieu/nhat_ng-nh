import React, { Component } from 'react';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';
import  { Redirect } from 'react-router-dom'


const Login = () => {
  const responseFacebook = (response) => {
    localStorage.setItem('name', response.name);
    localStorage.setItem('avatar', response.picture.data.url)
    window.location.reload(true);
  }
  const redirectHome = () => {
    window.location.reload(true);
    return <Redirect to='/' />
  }
  const responseGoogle = (response) => {
    console.log(response)
    localStorage.setItem('name', response.Nw.profileObj.name);
    localStorage.setItem('avatar', response.Nw.profileObj.imageUrl);
    // window.location.reload(true);
  }
  // const responseGoogle = (response) => {
  //   console.log(response.Nw)
  //   // window.location.reload(true);
  // }
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
      clientId="116556632783-lcj18jn3usv1fp6mh77vvtjjapls8rhs.apps.googleusercontent.com"
      buttonText="LOGIN WITH GOOGLE"
      onSuccess={responseGoogle}
    />
    </div>
  );
};

export default Login;