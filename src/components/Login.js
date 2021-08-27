import React from "react";
import "./Login.css";
import { loginUrl } from "./Spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://www.soydemac.com/wp-content/uploads/2019/10/logo-spotify.jpg.webp"
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
