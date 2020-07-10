import React, { Component } from 'react'
import Person from './Person';

const team = [
  { 
    id: 1,
    img: "https://randomuser.me/api/portraits/med/women/75.jpg",
    age: 26,
    info: "Quality engineer",
    name: "Karla Fox"
  },
  { 
    id: 2,
    img: "https://randomuser.me/api/portraits/med/women/26.jpg",
    age: 31,
    info: "Software engineer",
    name: "Alice"
  },
  { 
    id: 3,
    img: "https://randomuser.me/api/portraits/med/women/36.jpg",
    age: 34,
    name: "Yesi"
  },
];


export default class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: team,
    };
  }

  render() {
    return (
      <div>
        {this.state.people.map( (person) => <Person 
          key={person.id}
          person={person}
        >
        </Person>)}
      </div>
    )
  }
}
