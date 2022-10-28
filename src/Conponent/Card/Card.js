import React from 'react';

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'}
        width="80%"
      />
      <h4>{props.shoese.title}</h4>
      <p>{props.shoese.price}</p>
    </div>
  );
}

export default Card;
