import { useState, useCallback } from "react";
import ImagePopup from "./ImagePopup";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

const App = () => {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditAvatarClick = useCallback(() => {
    setEditAvatarPopupOpen(true);
  }, []);

  const handleEditProfileClick = useCallback(() => {
    setEditProfilePopupOpen(true);
  }, []);

  const handleAddPlaceClick = useCallback(() => {
    setAddPlacePopupOpen(true);
  }, []);

  const handleCardClick = useCallback((card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }, []);

  const closeAllPopups = useCallback(() => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }, []);

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
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

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="avatar-url"
          type="url"
          required=""
          placeholder="Ссылка на изображение"
          name="avatar"
          className="popup__input popup__input_type_edit-avatar-link"
        />
        <span className="popup__input-error" id="avatar-url-error" />
      </PopupWithForm>

      <PopupWithForm
        name="new-card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
        />
        <span className="popup__input-error" id="input-text-error" />
        <input
          id="input-link"
          type="url"
          required=""
          placeholder="Ссылка на картинку"
          name="linkImg"
          className="popup__input popup__input_type_link"
        />
        <span className="popup__input-error" id="input-link-error" />
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      ></ImagePopup>
    </div>
  );
};

export default App;
