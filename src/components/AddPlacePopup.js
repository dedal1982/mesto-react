import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const cardNameRef = React.useRef();
  const cardLinkRef = React.useRef();

  React.useEffect(() => {
    cardNameRef.current.value = "";
    cardLinkRef.current.value = "";
  }, [props.isOpen]);
  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: cardNameRef.current.value,
      link: cardLinkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="new-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="input-text"
        type="text"
        required=""
        placeholder="Название"
        minLength={2}
        maxLength={30}
        name="nameImg"
        className="popup__input popup__input_type_text"
        ref={cardNameRef}
      />
      <span className="popup__input-error" id="input-text-error" />
      <input
        id="input-link"
        type="url"
        required=""
        placeholder="Ссылка на картинку"
        name="linkImg"
        className="popup__input popup__input_type_link"
        ref={cardLinkRef || ""}
      />
      <span className="popup__input-error" id="input-link-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
