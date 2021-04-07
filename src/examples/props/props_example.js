import React from 'react';

function Human(props)
{
  return(
    <div>
      <h1> I am a {props.height} tall and {props.weight} weight </h1>
      {props.children}
    </div>
  )
}

export default Human;
