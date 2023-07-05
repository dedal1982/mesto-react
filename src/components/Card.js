import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ card, onCardLike, onCardClick, onCardDelete }) => {
  const currentUser = useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `${isOwn ? "element__button-trash" : ""}`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((item) => item._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__button ${
    isLiked && "element__button-active"
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleCardClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

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
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          />
          <p className="element__counter-likes">{card.likes.length}</p>
        </div>
      </div>
      {isOwn && (
        <button
          type="button"
          className={cardDeleteButtonClassName}
          onClick={handleDeleteClick}
        />
      )}
    </div>
  );
};

export default Card;
