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

    otherState: 'some other value',
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    let persons = null; // default

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hi, I'm a react app </h1>
        <p> React is cool </p>
        <button
          className="SwitchNameButton"
          onClick={this.togglePersonsHandler}> Toggle Persons
        </button>

        {persons}

      </div>
    );
  }
}

export default App;
