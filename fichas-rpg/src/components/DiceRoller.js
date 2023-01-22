import { useState } from "react";
import diceStyles from "../styles/Dice.module.css";

const DiceRoller = () => {
  const [d6, setD6] = useState(0);
  const [d20, setD20] = useState(0);
  const [d100, setD100] = useState(0);

  const rollD6 = () => {
    setD6(Math.floor(Math.random() * 6) + 1);
  };

  const rollD20 = () => {
    setD20(Math.floor(Math.random() * 20) + 1);
  };

  const rollD100 = () => {
    setD100(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className={diceStyles.diceRoller}>
      <h2>Dice Roller</h2>
      <button onClick={rollD6}>Rolar d6</button>
      <span>{d6}</span>
      <br />
      <button onClick={rollD20}>Rolar d20</button>
      <span>{d20}</span>
      <br />
      <button onClick={rollD100}>Rolar d100</button>
      <span>{d100}</span>
    </div>
  );
};

export default DiceRoller;
