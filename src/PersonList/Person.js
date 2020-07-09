
import React from 'react';
import PropTypes from 'prop-types';

export default function Person({ img, name, age, info }) {
  return (
    <section>
      <img src={img} alt="Random" />
      <h2>{name}</h2>
      <h3>age: {age}</h3>
      <p>{info}</p>
    </section>
  )
}

Person.propTypes = {
  info: PropTypes.string.isRequired,
  age: PropTypes.number
};

Person.defaultProps = {
  info: "Undefined role"
}


