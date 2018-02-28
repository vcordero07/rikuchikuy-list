import React from "react";
import signinLogo from "../../assets/img/inca5.png";

import "./Signin.css";

export default function SigninSection(props) {
  return (
    <section className="signin">
      <div className="container">
        <div className="row">
          <div className="signin-col">
            <form className="form-signin" action="/signin" method="post">
              <a href="/">
                <img className="form-logo" src={signinLogo} alt="signin-logo" />
              </a>
              <h3 className="signin-title">Please sign in </h3>
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
                Sign in
              </button>
            </form>

            <div className="row">
              <div className="signup-link">
                New? <a href="/signup"> Create an account</a>
              </div>
            </div>
            <div className="copyright">
              <span className="fa fa-copyright">
                {" "}
                2018 Rikuchikuy-List by{" "}
                <a href="https://github.com/vcordero07/rikuchikuy-list">
                  Virgilio
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
