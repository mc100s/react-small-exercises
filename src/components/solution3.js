import React, { Component } from 'react';

export default class Exercise3 extends Component {
  render() {
    return (
      <div className="Exercise">
        <h1>Exercise #3</h1>
        <div className="alert alert-primary">
          <u>Iteration 1</u>: Give the value of "x" from <code>ComponentA</code> to <code>ComponentC</code> <br />
          <u>Iteration 2</u>: Change the "x" when clicking on the button "x++"<br />
        </div>
        <ComponentA />
      </div>
    );
  }
}

class ComponentA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 42
    }
  }
  render() {
    return (
      <div className="border">
        <h2>ComponentA</h2>
        x = {this.state.x}
        <ComponentB
          x={this.state.x}
          onXClick={e => this.setState({ x: this.state.x + 1 })} />
      </div>
    )
  }
}

class ComponentB extends Component {
  render() {
    return (
      <div className="border">
        <h2>ComponentB</h2>
        x = {this.props.x}
        <ComponentC
          x={this.props.x}
          onXClick={this.props.onXClick} />
      </div>
    )
  }
}

class ComponentC extends Component {
  render() {
    return (
      <div className="border">
        <h2>ComponentC</h2>
        x = {this.props.x}
        <br />
        <button
          className="btn btn-primary btn-sm"
          onClick={this.props.onXClick}>x++</button>
      </div>
    )
  }
}


