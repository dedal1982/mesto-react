const Card = ({ card, onCardClick }) => {
  const handleCardClick = () => {
    onCardClick(card);
  };

  return (
    <div className="element">
      <img
        className="element__img"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="element__item">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__likes-info">
          <button type="button" className="element__button" />
          <p className="element__counter-likes">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="element__button-trash" />
    </div>
  );
};

export default Card;
