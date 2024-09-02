import { useEffect, useState } from "react";
import Inputs from "./components/inputs";
import CardsContainer from "./components/cardsContainer";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [cardBg, setCardBg] = useState("black");
  const [textColor, setTextColor] = useState("white");
  const [userText, setUserText] = useState("heloo");

  function getBgColor(event) {
    setCardBg(event.target.value);
  }

  function getTxtColor(event) {
    setTextColor(event.target.value);
  }

  function getText(event) {
    setUserText(event.target.value);
  }

  function addCard() {
    const card = {
      cardBg,
      textColor,
      userText,
      createdAt: Date.now(),
    };
    setCards([...cards, card]);
  }
  return (
    <>
      <Inputs
        getBgColor={getBgColor}
        getTxtColor={getTxtColor}
        getText={getText}
        addCard={addCard}
      />
      {/* <CardsContainer/> */}
      <div className="flex items-center gap-4 mt-5">
        {cards.map((card) => {
          return <CardsContainer value={card} />;
        })}
      </div>
    </>
  );
}

export default App;
