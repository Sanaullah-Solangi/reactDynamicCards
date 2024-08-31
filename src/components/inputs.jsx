function Inputs({ getBgColor, getTxtColor, getText }) {
  return (
    <div className="inputContainer w-full border flex  items-center justify-center gap-4 ">
      <input
        onChange={getBgColor}
        className="cardBg border border-green-400 rounded-md flex-1 w-10"
        type="color"
      />
      <input
        onKeyPress={getTxtColor}
        placeholder="Enter text color"
        className="textColor border border-green-400 rounded-md flex-1 py-1 px-2"
        type="text"
      />
      <input
        onKeyPress={getText}
        placeholder="Enter your text"
        className="userText border border-green-400 rounded-md flex-1 py-1 px-2"
        type="text"
      />
      <button className=" text-white bg-black rounded-md py-1 px-2">add</button>
    </div>
  );
}

export default Inputs;
