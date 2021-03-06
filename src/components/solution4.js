import React, { Component } from 'react';

export default class Exercise4 extends Component {
  render() {
    return (
      <div className="Exercise">
        <h1>Exercise #4</h1>
        <div className="alert alert-primary">
          <u>Iteration 1</u>: When the user type some information in the input, it should change the list of prime numbers.
        </div>
        <Application />
      </div>
    );
  }
}


class Application extends Component {
  constructor(props) {
    super(props)
    this.state = {
      limit: 42
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      limit: e.target.value
    })
  }
  render() {
    return (
      <div className="border">
        <h2>Application</h2>
        <BigInput limit={this.state.limit} onChange={this.handleChange} />
        <DisplayPrimeNumbers limit={this.state.limit} />
      </div>
    )
  }
}

class BigInput extends Component {
  render() {
    return (
      <div className="border">
        <h2>BigInput</h2>
        limit = <input type="number" value={this.props.limit} onChange={this.props.onChange} />
      </div>
    )
  }
}

class DisplayPrimeNumbers extends Component {
  render() {
    let primeNumbers = [];
    for (let n = 2; n <= this.props.limit; n++) {
      let isNPrime = true
      for (let index = 0; index < primeNumbers.length && isNPrime; index++) {
        if (n % primeNumbers[index] === 0)
          isNPrime = false
      }
      if (isNPrime) primeNumbers.push(n)
    }
    return (
      <div className="border">
        <h2>DisplayPrimeNumbers</h2>
        <strong>Prime numbers until limit = {this.props.limit}</strong>
        <br />
        {primeNumbers.map(n => (
          <span key={n}>{n} </span>
        ))}
      </div>
    )
  }
}