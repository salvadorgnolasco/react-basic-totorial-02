import React, { Component } from 'react';
import './form.scss';

export default class Form extends Component {


  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      email: '',
      person: []
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    
    const firstName = this.state.firstName;
    const password = this.refs.password.value;
    const email = this.state.email;
    const person = ` ${firstName}-${password}-${email}: `;
    
    this.setState({
      firstName: '',
      email: '',
      person: [...this.state.person, person],
    });

    this.refs.password.value = '';

  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          user name
          <input type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleOnChange} />
          password
          <input type="password" ref="password"/>
          email
          <input type="text" 
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange} />
          <button type="submit" >submit</button>
        </form>
        <div>
          {this.state.person}
        </div>
      </section>
    )
  }
}
