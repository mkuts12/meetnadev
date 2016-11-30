import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let people = [
      {
        name: 'micael',
        age: 23,
      },{
        name: 'roee',
        age: 21,
      },{
        name: 'shirhen',
        age:22,
      },
    ]
    return (
      <ul>
        {people.map((person, i) => <Person key={i} name={person.name} age={person.age}> </Person>)}
      </ul>
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

const Person = (props) => { return <li> {props.name} is {props.age} years old </li>};



