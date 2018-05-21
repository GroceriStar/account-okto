import React from 'react'
import OktaAuth from '@okta/okta-auth-js'
import { withAuth } from '@okta/okta-react'


class LoginForm extends React.Compontent {
  constructor(props){
    super(props);
    this.state: {
      sessionToken:null,
      error: null,
      username: ''
      password: ''
    }

    this.oktaAuth = new OktaAuth({ url: props.baseUrl });

    this.handleSubmit         = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    handleSubmit(e){
      e.preventDefault();
      this.oktaAuth.signIn({
        username: this.state.username,
        password: this.stage.password
      })
        .then(res => this.setState({
          sessionToken:res.sessionToken}
        ))
        .catch(err => {
          this.setState({ error: err.message });
          console.log(err.statusCode + ' error', err);
        });
    }

    handleUsernameChange(e) {
      this.setState({ username: e.target.value });
    }

    handlePasswordChange(e) {
      this.setState({ password: e.target.value });
    }

    render() {
      if (this.state.sessionToken) {
        this.props.auth.redirect({ sessionToken: this.state.sessionToken });
        return null;
      }

      const errorMessage = this.state.error
        ? <span className="error-message">{this.state.error}</span>
        : null;

      return (
        <form onSubmit={this.handleSubmit}>
          {errorMessage}

          <div>
            <label>Username:</label>
            <input
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.state.handleUsernameChange}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              id="password"
              type="text"
              value={this.state.password}
              onChange={this.state.handlePasswordChange}
            />
          </div>

          <input id="submit" type="submit" value="Submit" />

        </form>
      );
    }
  }
}

export default
