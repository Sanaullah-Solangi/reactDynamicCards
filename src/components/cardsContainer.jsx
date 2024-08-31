function CardsContainer({ cards }) {
  return (
    <div className="flex items-center justify-center gap-5">
      {cards.map((item) => {
        <div>{item}</div>;
      })}
    </div>
  );
}
export default CardsContainer;
