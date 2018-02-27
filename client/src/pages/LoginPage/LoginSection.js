import React from "react";
import loginLogo from "./llama-1.png";
import "./Login.css";

export default function LoginSection(props) {
  return (
    <section id="Login">
      <div className="container">
        <div className="row">
          <div className="login-col">
            <img className="login-logo" src={loginLogo} alt="login-logo" />
            <form className="form-signin" action="/login" method="post">
              <h2 className="login-title">Login </h2>
              <label for="username" className="sr-only">
                Username
              </label>
              <span className="fa fa-user" />
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                placeholder="Username"
                required
                autofocus
              />

              <label for="password" className="sr-only">
                Password
              </label>
              <span className="fa fa-lock" />
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
              />

              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                {" "}
                Login{" "}
              </button>
            </form>

            <div className="row">
              <div className="switch text-center">
                Don't have an account? Create a Free Account
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
