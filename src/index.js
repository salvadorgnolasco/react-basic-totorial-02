import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar/NavBar';
import PersonList from './PersonList/PersonList';
import Fragment from './Fragment/Fragment';
import Form from './Form/Form';

import './index.scss';


const Page = () => {
  return (
    <section>
      <NavBar key={0} />
      {/* <PersonList /> */}
      <Form />

    </section>
  );
}

ReactDOM.render(<Fragment key={0} />, document.getElementById('root'));

