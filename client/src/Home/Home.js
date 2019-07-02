import React, { Component } from 'react';
import Gametest from '../Game'

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() && (
              <Gametest />
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <button style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}>
                  Log In
                </button>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;
