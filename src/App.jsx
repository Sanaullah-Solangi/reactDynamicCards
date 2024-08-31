import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Inputs from "./components/inputs";
import CardsContainer from "./components/cardsContainer";
function App() {
  const [cards, setCards] = useState(["sanaullah", "jamal"]);
  console.log(cards);

  const [cardBg, setCardBg] = useState("red");
  const [textColor, setTextColor] = useState("white");
  const [userText, setUserText] = useState("heloo");
  function addCard() {
    return;
  }
  function getBgColor(event) {
    console.log(event.target.value);
  }

  function getTxtColor(event) {
    if (event.code == "Enter") {
      console.log(event.target.value);
      event.target.value = "";
    }
  }

  function getText(event) {
    if (event.code == "Enter") {
      console.log(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <>
      <Inputs
        getBgColor={getBgColor}
        getTxtColor={getTxtColor}
        getText={getText}
      />

      <CardsContainer cards={cards} />
    </>
  );
}

export default App;
