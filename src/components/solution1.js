import React, { Component } from 'react';

export default class Exercise1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      x: this.state.x + 1
    })
  }
  render() {
    return (
      <div className="Exercise">
        <h1>Exercise #1</h1>
        <div className="alert alert-primary">
          <u>Iteration 1</u>: Increment the number of like when you click on it <br />
          <u>Iteration 2</u>: Display the "s" of "likes" only when the number is greater or equal than 2<br />
        </div>
        <button className="btn btn-primary" onClick={this.handleClick}>
          {this.state.x} like{this.state.x >= 2 && 's'}
        </button>
      </div>
    );
  }
}
