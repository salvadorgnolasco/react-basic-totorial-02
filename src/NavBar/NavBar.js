import React, { Component } from 'react';
import './NavBar.scss';

export default class NavBar extends Component {
  render() {
    return (
      <section className='navigation-bar'>
        <img src="./img/2code.png" alt="2code.com.mx" className='brand' />
        <ul className="links">
          <li>
            <a href="/" className="link">home</a>
          </li>
          <li>
            <a href="/" className="link">cursos</a>
          </li>
        </ul>
        <div className='login'>
          <img src='./img/user-icon.png' alt='login' className='login-icon' />
          <a href="/" className="link">login</a>
        </div>
      </section>
    )
  }
}
