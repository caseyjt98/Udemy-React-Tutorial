import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a react app </h1>
        <p> React is cool </p>
        <Person name="Casey" age="20" > My Hobbies: Running </Person>
        <Person name="Claire" age="21" />
      </div>
    );
  }
}

export default App;
