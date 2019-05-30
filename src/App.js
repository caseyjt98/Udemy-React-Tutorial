import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// class component 
// stateful component 
class App extends Component {

  state = {
    persons: [
      { id: 'oasn', name: 'Casey', age: 20 },
      { id: 'dsfjn', name: 'Claire', age: 21 },
      { id: 'dsfji ', name: 'Elana', age: 21 }
    ],

    otherState: 'some other value',
    showPersons: false
  }


  // event handler for input onChange , takes in id of name to change
  nameChangedHandler = (event, id) => {
    // get index of person with matching id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    });
    // personIndex now holds the index of the desired person

    // create COPY of desired person object (with all the same properties) using spread operator...
    const person = {
      ...this.state.persons[personIndex]
    };

    // now update name of this copy 

    person.name = event.target.value;

    // now update a COPY of the array with updated person, at correct index

    const persons = [...this.state.persons]; // ... spread operator creates copy
    persons[personIndex] = person; // updates copy of array with updated person object

    this.setState({ persons: persons }); // finally, update state using the mutated copy 

  }
  // takes in index of element to be removed
  // remove person upon click
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // slice creates a COPY of the persons array, updates state without mutating original state first 
    const persons = [...this.state.persons]; // equivalent of slice - creates a COPY of original array
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
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
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
