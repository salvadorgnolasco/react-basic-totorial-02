import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar/NavBar';

import './index.scss';


const Page = () => {
  return (
    <section>
      <NavBar key={0} />
      <div>
        otro contenido
    </div>
    </section>
  );
}

ReactDOM.render(<Page key={0} />, document.getElementById('root'));

