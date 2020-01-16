import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'azert1', name: 'Max', age: 28 },
      { id: 'ouyit1', name: 'Manu', age: 29 },
      { id: 'lmkgk1', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }
  // show persons
  showPersons = () => {
    const show = this.state.showPersons;
    this.setState ({showPersons : !show});
  }

  // delete person
  deletePerson = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons: persons});
  }

  render () {
    //style
 const style = {
  backgroundColor: 'green',
  color: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  ':hover':{
    backgroundColor:'lightgreen',
    color:'black'
  }
   }
   //add classes
   let classes = [];
   if(this.state.persons.length <= 2)
   {
     classes.push('red');
   }
   if(this.state.persons.length <= 1)
   {
     classes.push('bold');
   }
    let Persons = null;
    if(this.state.showPersons){
     Persons = ( 
     <div>
       {this.state.persons.map( (person,index) => {
         return <Person click={() => this.deletePerson(index)}
         name={person.name}
         age={person.age} 
         key={person.id}
         changed={(event) => this.nameChangedHandler(event, person.id)}
         />
       })}
     </div> );
     
     style.backgroundColor="red";
     style[':hover']= {
       backgroundColor: 'salmon',
       color:'black'
     }
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.showPersons}>Show Persons</button>
        {Persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
