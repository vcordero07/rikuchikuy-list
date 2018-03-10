import React, { Component } from "react";
import { connect } from "react-redux";
import { getList } from "../../actions/lists";
import { login } from "../../actions/auth";
import signinLogo from "../../assets/img/inca5.png";

// import "./Signins.css";

class SigninSection extends Component {
  state = {
    username: "",
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
      password: this.state.password
    };
    return this.props
      .dispatch(login(user.username, user.password))
      .then(async () => {
        await this.props.dispatch(getList());
      });
  };

  render() {
    return (
      <section className="signin">
        <div className="container">
          <div className="row">
            <div className="signin-col">
              <form className="form-signin" onSubmit={this._onSubmit}>
                <a href="/">
                  <img
                    className="form-logo"
                    src={signinLogo}
                    alt="signin-logo"
                  />
                </a>
                <h3 className="signin-title">Please sign in </h3>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <span className="fa fa-user" />
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="signin-username-input"
                  placeholder="Username"
                  value={this.state.username}
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
                  className="signin-password-input"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this._onChange}
                />

                <button className="signin-btn" type="submit">
                  Sign in
                </button>
              </form>

              <div className="row">
                <div className="signup-link">
                  New? <a href="/signup"> Create an account</a>
                </div>
              </div>

              <div className="demo-container">
                <div className="demo">
                  <h5>Username: demo</h5>
                  <h5>Password: demodemo11</h5>
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

export default connect()(SigninSection);
