import React, { Component } from 'react';

export default class Exercise2 extends Component {
  render() {
    return (
      <div className="Exercise">
        <h1>Exercise 2</h1>
        <div className="alert alert-info">
          Increment the number when you click on the buttons and display the result of the operation.
          <br />
          You can only use 3 states.
        </div>
        <form class="form-inline">

          <button className="btn btn-primary mx-2">0</button>
          <select className="form-control mx-2">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <button className="btn btn-primary mx-2">0</button>
          =
          0
        </form>
      </div>
    );
  }
}
