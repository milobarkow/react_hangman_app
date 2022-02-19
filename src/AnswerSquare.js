import React, { Component } from "react";

const AnswerSquare = (props) => {
  const value = props.value;
  return <div className='square'>{value}</div>;
};

export default AnswerSquare;
