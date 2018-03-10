import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/users";
import { addList } from "../../actions/lists";
import { login } from "../../actions/auth";
import signupLogo from "../../assets/img/inca5.png";
import "./Signup.css";

class SignupSection extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  _onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _onSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };
    return this.props.dispatch(registerUser(user)).then(async () => {
      await this.props.dispatch(login(user.username, user.password));
      this.props.dispatch(addList(`${user.username} wish list`));
    });
  };

  render() {
    return (
      <section className="signup">
        <div className="container">
          <div className="row">
            <div className="signup-col">
              <form className="form-signup" onSubmit={this._onSubmit}>
                <a href="/">
                  <img
                    className="form-logo"
                    src={signupLogo}
                    alt="signup-logo"
                  />
                </a>
                <h3 className="signup-title">Please sign up </h3>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <span className="fa fa-user" />
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this._onChange}
                  required
                  autoFocus
                />

                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <span className="fa fa-envelope" />
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this._onChange}
                  required
                  autoFocus
                />

                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <span className="fa fa-lock" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this._onChange}
                />

                <button className="signup-btn" type="submit">
                  Sign Up
                </button>
              </form>

              <div className="row">
                <div className="signin-link">
                  Have an account? <a href="/signin">Sign In</a>
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
}

export default connect()(SignupSection);
