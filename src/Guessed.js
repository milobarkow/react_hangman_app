import React, { Component } from "react";
import AnswerSquare from "./AnswerSquare";

const Guessed = (props) => {
  const guessed = props.guessed;
  const wordSquares = [];
  if (guessed.length > 0) {
    for (let i = 0; i < guessed.length; i++) {
      const empty = <AnswerSquare value={guessed[i]} />;
      wordSquares.push(empty);
    }
  }
  return <div>{wordSquares}</div>;
};

export default Guessed;
