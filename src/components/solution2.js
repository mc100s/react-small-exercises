import React, { Component } from 'react';

export default class Exercise2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 6,
      y: 7,
      operator: '*'
    }
  }
  handleClick(e, key) {
    e.preventDefault()
    this.setState({
      [key]: this.state[key] + 1
    })
  }
  handleChange(e) {
    this.setState({
      operator: e.target.value
    })
  }
  render() {
    return (
      <div className="Exercise">
        <h1>Exercise #2</h1>
        <div className="alert alert-primary">
          <u>Iteration 1</u>: Increment the number when you click on the buttons and display the result of the operation, for example by using <a href="https://www.w3schools.com/jsref/jsref_eval.asp"><code>eval</code></a>.<br />
          <strong>For this iteration, you must use only 3 states.</strong>
          <br />
        </div>
        <div className="alert alert-warning">
          <u>Warning</u>: The buttons are inside a form and the form will be submitted when you click on them. You will probably need to do <code>e.preventDefault()</code>.
        </div>
        <form className="form-inline">
          <button
            className="btn btn-primary mx-2"
            onClick={e => this.handleClick(e, 'x')}>
            {this.state.x}
          </button>
          <select
            className="form-control mx-2"
            value={this.state.operator}
            onChange={e => this.handleChange(e)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <button
            className="btn btn-primary mx-2"
            onClick={e => this.handleClick(e, 'y')}>
            {this.state.y}
          </button>
          =
          {eval(this.state.x + this.state.operator + this.state.y)}
        </form>
      </div>
    );
  }
}
