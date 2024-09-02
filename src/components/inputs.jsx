function Inputs({ getBgColor, getTxtColor, getText, addCard }) {
  return (
    <div className="inputContainer w-full  flex  items-center justify-center gap-4 ">
      <input
        onChange={getBgColor}
        className="cardBg border border-green-400 rounded-md flex-1 w-10"
        value={"black"}
        type="color"
      />
      <input
        onChange={getTxtColor}
        placeholder="Enter text color"
        className="textColor border border-black-400 rounded-md flex-1 "
        value={"white"}
        type="color"
      />
      <input
        onInput={getText}
        placeholder="Enter your text"
        className="userText border border-black-400 rounded-md flex-1 py-1 px-2"
        type="text"
      />
      <button
        onClick={addCard}
        className=" text-white bg-black rounded-md py-1 px-2"
      >
        add
      </button>
    </div>
  );
}

export default Inputs;
