import React, { Component } from 'react';

export default class Greeting extends Component {
  render() {
    return (
      <div className="greeting">
        <h2>Hello there!</h2>
        <h4 className="text-center">Looks like you followed a broken link</h4>
        <h4 className="text-center">Please contact <a href="mailto:you@email.com?subject=Assessment%20Link%20Query">The Goal Getting Club</a> for a new link to the assessment you are looking for</h4>
      </div>
    );
  }
}