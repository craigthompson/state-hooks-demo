import "./dice.css";
import { useState } from "react";

export default function Die(props) {
  const [diceValue, setDiceValue] = useState("?");

  //  Function to calculate a random number between 1 and the number of sides (highest dice value).
  //    The number of sides will come from props (our parent will pass that number in).
  const getRandomNum = (highestValue) => {
    return Math.ceil(Math.random() * highestValue);
  };

  //  Need the button to calculate a random number between 1-props.sides, then we need to display that value. Will use a stat value.
  const roll = () => {
    const rollValue = getRandomNum(props.sides);
    setDiceValue(rollValue);
  };

  return (
    <button type="button" className="die" onClick={roll}>
      <i>Sides={props.sides}</i>
      <br />
      <b>{diceValue}</b>
    </button>
  );
}
