import React, { Component } from 'react';

export default class Exercise1 extends Component {
  render() {
    return (
      <div className="Exercise">
        <h1>Exercise 1</h1>
        <div className="alert alert-info">
          Increment the number of like when you click on it
        </div>
        <button className="btn btn-primary">0 likes</button>
      </div>
    );
  }
}
