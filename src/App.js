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

  // takes in index of element to be removed
  // remove person upon click
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // slice creates a COPY of the persons array 
    const persons = [...this.state.persons]; // equivalent of slice - creates a copy of original array
    persons.splice(personIndex, 1); // removes 1 element @ index 'personIndex' in persons array and returns the removed  element 
    this.setState({ persons: persons }); // update persons array in state
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
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)} />
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
