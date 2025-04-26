function Card({ cardTitle, cardValue }) {
  return (
    <div className="card p-4 lg:p-6 border border-[rgba(255,255,255,0.20)] w-full md:max-w-[255px] flex items-center justify-between md:block">
      <h4 className="opacity-50">{cardTitle}</h4>
      <h2>{cardValue}</h2>
    </div>
  );
}

export default Card;
