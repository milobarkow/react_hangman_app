import React, { Component } from "react";

const Square = (props) => {
  const letterVal = props.value;

  return (
      <button className='square-button' onClick={() => props.handleGuess(letterVal)}>
        {letterVal}
      </button>
  );
};

export default Square;
