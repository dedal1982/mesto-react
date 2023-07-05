import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  cards,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__edit-avatar" onClick={onEditAvatar}>
          <img
            src={currentUser?.avatar}
            alt="аватарка"
            className="profile__avatar"
          />
        </button>
        <div className="profile__item">
          <div className="profile__title">
            <h1 className="profile__name">{currentUser?.name}</h1>
            <button
              type="button"
              className="profile__popup"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__job">{currentUser?.about}</p>
        </div>
        <button
          type="button"
          className="profile__button-plus"
          onClick={onAddPlace}
        />
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
