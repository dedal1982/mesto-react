import { useState, useEffect } from "react";
import { api } from "../utils.js/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setInitialCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getDataUser(), api.getInitialsCards()])
      .then(([data, cards]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setInitialCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__edit-avatar" onClick={props.onEditAvatar}>
          <img src={userAvatar} alt="аватарка" className="profile__avatar" />
        </button>
        <div className="profile__item">
          <div className="profile__title">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__popup"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__button-plus"
          onClick={props.onAddPlace}
        />
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
