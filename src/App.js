import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './userList.js';
import volunteers from '../data/volunteers.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserList users={volunteers.volunteers} userHeight={70} listWidth={500} listHeight={500}/>
      </div>
    );
  }
}

export default App;

// class Person extends Component {
//   render() {
//     return (
//       <li> {this.props.name} is {this.props.age} years old </li>
//     )
//   }
// }