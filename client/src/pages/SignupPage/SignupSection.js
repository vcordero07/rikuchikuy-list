import React from "react";

import "./Signup.css";

export default function SignupSection(props) {
  return (
    <section id="Signup">
      <div className="container">
        <div className="row">
          <div className="login-col">
            <form className="form-signin" action="/login" method="post">
              <label for="username" className="">
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

              <label for="email" className="">
                Email
              </label>
              <span className="fa fa-email" />
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
                required
                autofocus
              />

              <label for="password" className="">
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
                Login
              </button>
            </form>

            <div className="row">
              <div className="">
                Don't have an account?{" "}
                <a href="/signup">Create a Free Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
