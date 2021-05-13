import React, { Component } from 'react';
import CoolButton from '../coolButton/CoolButton';
import 'bulma/css/bulma.css';
import './Navbar.css'

export default class Navbar extends Component {
    render() {
      return (
        <nav class="navbar is-transparent">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <div
              class="navbar-burger"
              data-target="navbarExampleTransparentExample"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
  
          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="https://bulma.io/">
                Home
              </a>
            </div>
  
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="field is-grouped">
                  <p class="control">
                    <CoolButton isLight>Login</CoolButton>
                  </p>
                  <p class="control">
                    <CoolButton isPrimary>Sign up</CoolButton>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    }
}
