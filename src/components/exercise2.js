import React, { Component } from 'react';

export default class Exercise2 extends Component {
  render() {
    return (
      <div className="Exercise">
        <h1>Exercise #2</h1>
        <div className="alert alert-primary">
          <u>Iteration 1</u>: Increment the number when you click on the buttons and display the result of the operation. <strong>You can only use 3 states.</strong>
          <br />
        </div>
        <div className="alert alert-warning">
          <u>Warning</u>: The buttons are inside a form and the form will be submitted when you click on them. You will probably need to do <code>e.preventDefault()</code>.
        </div>
        <form className="form-inline">

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
