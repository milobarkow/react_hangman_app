import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LetterGuesser from "./LetterGuesser";
import Word from "./Word";
import Guessed from "./Guessed";


class Game extends React.Component {
  state = {
    guessed: [],
    WordList: require("word-list-json"),
    answer: [],
    gameNumber: 0,
    winner: false,
  };

  handleGuess = (i) => {
    const guessed = this.state.guessed;
    console.log(i);
    if (guessed.indexOf(i) > -1) {
      return;
    } else if (this.state.gameNumber !== 0) {
      this.setState({
        guessed: guessed.concat(i),
      });
      console.log("clicked");
    } else {
      return;
    }

    console.log(guessed);
  };

  choose = (choices) => {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

  restart = () => {
    console.log("New Game");
    this.setState({
      answer: this.choose(this.state.WordList).toUpperCase(),
      guessed: [],
      gameNumber: 1,
    });
    console.log(this.state.answer)
  };

  render() {
    const answer = this.state.answer.slice();
    const guessed = this.state.guessed;
    const restartButton = (
      <div>
        <button className='restart-button' onClick={() => this.restart()}>
          New
        </button>
      </div>
    );
    const word = <Word answer={answer} guessed={guessed} />;

    return (
      <div className='Game'>
        <span>HANGMAN</span>
        <div className='answer-box'>{word}</div>
        <div className='title'>
          <h1>Click New to start a new game</h1>
        </div>

        <div className='letters-guesser'>
          <LetterGuesser handleGuess={this.handleGuess} />
        </div>
        <div>{restartButton}</div>
        <div className='guessed-title'>
          <h1>Guessed</h1>
        </div>
        <div className='letters-guessed'>
          <Guessed guessed={guessed} />
        </div>
      </div>
    );
  }
}

/* ====================================================== */

ReactDOM.render(<Game />, document.getElementById("root"));


