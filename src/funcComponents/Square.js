import React from 'react';

export const Square = (props) =>  {

    console.log(props)
    return (
      <div className="square-component" style={{background: props.colour}}>
          {props.word} {props.num}
      </div>
    );
  }


