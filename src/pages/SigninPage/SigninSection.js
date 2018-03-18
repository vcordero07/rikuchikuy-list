import React, { Component } from "react";
import { connect } from "react-redux";
import { getList } from "../../actions/lists";
import { login } from "../../actions/auth";

import { ToastContainer, toast } from "react-toastify";
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
    this._fetchData();
  };

  _fetchData = async () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    await this.props.dispatch(login(user.username, user.password));
    await this.props.dispatch(getList());

    if (this.props.signinError) {
      this._notify();
    }
  };

  _notify = () => {
    let code = this.props.formSigninError.code;
    let message;
    if (code === 401) {
      message = "Incorrect username or password";
    } else {
      message = "Unable to login, please try again";
    }
    // console.log("code:", code);
    // console.log("message:", message);
    toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  };

  render() {
    return (
      <section className="signin">
        <div className="container">
          <div className="row nomargin">
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

              <div className="row nomargin">
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
                  <a
                    href="https://github.com/vcordero07/rikuchikuy-list"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Virgilio Cordero
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  signinError: state.auth.error !== null,
  formSigninError: state.auth.error
});

export default connect(mapStateToProps)(SigninSection);
