import { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser?.name);
    setDescription(currentUser?.about);
  }, [currentUser, isOpen]);


  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        value={name || ""}
        onChange={handleChangeName}
        id="input-name"
        type="text"
        required=""
        placeholder="Имя"
        minLength={2}
        maxLength={40}
        name="name"
        className="popup__input popup__input_type_name"
      />
      <span className="popup__input-error" id="input-name-error" />
      <input
        value={description || ""}
        onChange={handleChangeDescription}
        id="input-job"
        type="text"
        required=""
        placeholder="О себе"
        minLength={2}
        maxLength={200}
        name="about"
        className="popup__input popup__input_type_job"
      />
      <span className="popup__input-error" id="input-job-error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
