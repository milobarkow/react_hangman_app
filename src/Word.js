import React, { Component } from "react";
import AnswerSquare from "./AnswerSquare";

const Word = (props) => {
  const answer = props.answer;
  const guessed = props.guessed;
  const wordSquares = [];
  const winna = [];
  const winningState = "WINNER WINNER";

  for (let i = 0; i < answer.length; i++) {
    if (guessed.includes(answer[i])) {
      const empty = <AnswerSquare value={answer[i]} />;
      wordSquares.push(empty);
    } else {
      const empty = <AnswerSquare value={"_"} />;
      wordSquares.push(empty);
    }
  }
  return <div>{wordSquares}</div>;

};

export default Word;
