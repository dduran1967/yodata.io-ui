import React from 'react';

const Literal = (value) => {
  console.log('value=', value);
  if (Array.isArray(value)) {
    if (value.length > 0) {
      return `[${ value.value.join(' ')}]`
    }
    return null;
  }
  return <span className="Literal">{value.value || value}</span>
}

export default Literal;