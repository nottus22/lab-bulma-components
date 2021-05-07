import React, { Component } from "react";

export default class CoolButton extends Component {
    render() {
        const buttonClasses = ['button'];
        if (this.props.className) {
          buttonClasses.push(this.props.className);
        }
        Object.keys(this.props).forEach((propName) => {
          if (this.bulmaClasses[propName]) {
            buttonClasses.push(this.bulmaClasses[propName]);
          }
        });
        console.log(this.props);
        return (
          <button className={buttonClasses.join('')}>{this.props.children}</button>
        );
      }
    }