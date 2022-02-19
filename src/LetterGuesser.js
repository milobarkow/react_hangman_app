import React, { Component } from "react";
import Square from "./Square";

const LetterGuesser = (props) => {
  const letterButtons = [];
  const setter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const handleGuess = props.handleGuess;

  for (let i = 0; i < 26; i++) {
    const letterVal = setter[i];
    const letterButton = <Square value={letterVal} handleGuess={handleGuess} />;

    letterButtons.push(letterButton);
  }

  return <div>{letterButtons}</div>;
};

export default LetterGuesser;
