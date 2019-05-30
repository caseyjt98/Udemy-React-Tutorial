import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// class component 
// stateful component 
class App extends Component {

  state = {
    persons: [
      { name: 'Casey', age: 20 },
      { name: 'Claire', age: 21 },
      { name: 'Elana', age: 21 }
    ],

    otherState: 'some other value'
  }

  // event handler function for button click, pass as a reference to onClick
  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0] = 'Quesarito';
    // setState will merge the new state with the old state
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'Claire', age: 21 },
        { name: 'Elana', age: 21 }
      ]
    })
  }

  // event handler for input onChange 
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Casey', age: 20 },
        { name: event.target.value, age: 21 },
        { name: 'Elana', age: 21 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a react app </h1>
        <p> React is cool </p>
        <button onClick={this.switchNameHandler.bind(this, 'Quesarito')}> Switch Name </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Quesarito!!')} > My Hobbies: Running </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
