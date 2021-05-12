import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { signInWithGoogle, auth } from "./../../firebase/utils";
import "./styles.scss";

import AuthWrapper from "../AuthWrapper/index";
import FromInput from "../Forms/FromInput/index";
import Buttons from "../Forms/Buttons/index";

const initialState = {
  email: "",
  password: "",
};

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState = {
        ...initialState,
      };
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { email, password } = this.state;

    const configAuthWrapper = {
      headLine: 'LogIn'
    }

    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          <form onSubmit={this.handleSubmit}>
            <FromInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={this.handleChange}
            />

            <FromInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              handleChange={this.handleChange}
            />

            <Buttons type="submit">LogIn</Buttons>

            <div className="socialSignin">
              <div className="row">
                <Buttons onClick={signInWithGoogle}>
                  Sign in with Google
                </Buttons>
              </div>
            </div>

            <div className="links">
              
              <Link to="/recovery">
                Reset Password
              </Link>
            </div>

          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default Signin;
