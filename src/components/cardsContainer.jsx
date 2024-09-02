function CardsContainer({ value }) {
  return (
    <div
      id={value.createdAt}
      style={{ backgroundColor: value.cardBg, height: "200px" }}
      className="h-72 w-72 flex flex-wrap items-center justify-center shadow-lg rounded-md"
    >
      <h1 className="text-2xl capitalize " style={{ color: value.textColor }}>
        {value.userText}
      </h1>
    </div>
  );
}
export default CardsContainer;
