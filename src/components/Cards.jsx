import Card from "../components/Card";

function Cards({ cards }) {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1110px] mx-auto flex flex-col md:flex-row justify-center gap-3 lg:gap-7">
        {cards.map((card) => (
          <Card
            key={card.label}
            cardTitle={card.label}
            cardValue={card.value}
          />
        ))}
      </div>
    </section>
  );
}

export default Cards;
