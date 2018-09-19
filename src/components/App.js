import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom'
import Exercise1 from './exercise1.js'
import Exercise2 from './exercise2.js'
import Exercise3 from './exercise3.js'
import Exercise4 from './exercise4.js'
import Exercise5 from './exercise5.js'
// import Exercise6 from './exercise6.js'

class App extends Component {
  render() {
    let exercises = [Exercise1, Exercise2, Exercise3, Exercise4, Exercise5]
    return (
      <div className="App">
        <nav className="navbar navbar-expand navbar-dark bg-primary">
          <div className="container">
            <Link to="/" className="navbar-brand"><img src="/react-logo.svg" alt="React logo" /></Link>
            {/* <Link to="/" className="navbar-brand">React Exercises</Link> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                {exercises.map((e, i) => (
                  <li key={i + 1} className="nav-item">
                    <NavLink className="nav-link" to={"/exercise/" + (i + 1)}>#{i + 1}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          {exercises.map((e, i) => (
            <Route key={i + 1} path={"/exercise/" + (i + 1)} component={e} />
          ))}
          <Route path="/" exact render={() => (
            <div>
              <h1>Home</h1>
              <ul>
                {exercises.map((e, i) => (
                  <li key={i + 1}>
                    <Link to={"/exercise/" + (i + 1)}>Exercise #{i + 1}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )} />
        </div>
      </div>
    );
  }
}

export default App;
