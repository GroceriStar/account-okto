import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import {
  SecureRoute, ImplicitCallback
} from '@okta/okta-react'

import Navigation  from './components/shared/Navigation'
import HomePage    from './components/pages/HomePage'
import RegistrationForm from './components/auth/RegistrationForm'
import config      from './app.config'
import LoginPage   from './components/auth/LoginPage'
import ProfilePage from './components/auth/ProfilePage'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Navigation />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/*<Route       path="/login" render={ () => <LoginPage baseUrl={config.url} /> } /> */}
            <Route       path="/implicit/callback" component={ImplicitCallback} />
            <Route       path="/register" component={RegistrationForm} />
            <SecureRoute path="/profile" component={ProfilePage} />
          </Switch>
        </main>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
