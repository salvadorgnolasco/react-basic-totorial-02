
import React from 'react';
import PropTypes from 'prop-types';

export default function Person({person: { img, name, age, info }}) {
  return (
    <section>
      <img src={img} alt="Random" />
      <h2>{name}</h2>
      <h3>age: {age}</h3>
      <p>{info || "Undefined role"}</p>
    </section>
  )
}

Person.propTypes = {
  person: PropTypes.shape({
    // info: PropTypes.string.isRequired,
    info: PropTypes.string,
    age: PropTypes.number,
    img: PropTypes.string
  }),
};


