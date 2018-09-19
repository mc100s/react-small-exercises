import React, { Component } from 'react';

export default class Exercise1 extends Component {
  render() {
    return (
      <div className="Exercise">
        <h1>Exercise #1</h1>
        <div className="alert alert-primary">
          <u>Iteration 1</u>: Increment the number of like when you click on it <br />
          <u>Iteration 2</u>: Display the "s" of "likes" only when the number is greater or equal than 2<br />
        </div>
        <button className="btn btn-primary">0 likes</button>
      </div>
    );
  }
}
