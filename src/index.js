import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar/NavBar';
import PersonList from './PersonList/PersonList';

import './index.scss';


const Page = () => {
  return (
    <section>
      <NavBar key={0} />
      <PersonList />
    </section>
  );
}

ReactDOM.render(<Page key={0} />, document.getElementById('root'));

