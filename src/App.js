import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Casey', age: 20 },
      { name: 'Claire', age: 21 },
      { name: 'Elana', age: 21 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a react app </h1>
        <p> React is cool </p>
        <button> Switch Name </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} > My Hobbies: Running </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
