import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/users";
import { addList } from "../../actions/lists";
import { login } from "../../actions/auth";
import signupLogo from "../../assets/img/inca5.png";
// import "./Signup.css";
import { ToastContainer, toast } from "react-toastify";

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
    this._fetchData();
  };

  //fix this here

  _fetchData = async () => {
    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };
    await this.props.dispatch(registerUser(user));
    await this.props.dispatch(login(user.username, user.password));
    await this.props.dispatch(addList(`${user.username} wish list`));

    //only works when the password is less than 10
    if (this.props.signupError) {
      // console.log("this.props.signupError test:");
      this._notify();
    }
  };

  _notify = () => {
    // console.log("_notify call:", true);
    let code = this.props.formSignupError.code;
    let message;
    if (code === 422) {
      message = `${this.props.formSignupError.location}: ${
        this.props.formSignupError.message
      }`;
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
      <section className="signup">
        <div className="container">
          <div className="row nomargin">
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
                  className="signup-username-input"
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
                  className="signup-email-input"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this._onChange}
                  required
                />

                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <span className="fa fa-lock" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="signup-password-input"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this._onChange}
                />

                <button className="signup-btn" type="submit">
                  Sign Up
                </button>
              </form>

              <div className="row nomargin">
                <div className="signin-link">
                  Have an account? <a href="/signin">Sign In</a>
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
  signupError: state.user.error !== null,
  formSignupError: state.user.error
});

export default connect(mapStateToProps)(SignupSection);
