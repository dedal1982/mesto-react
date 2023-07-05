import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarInput.current?.value,
    });
  }

  useEffect(() => {
    avatarInput.current.value = " ";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarInput}
        id="avatar-url"
        type="url"
        required=""
        placeholder="Ссылка на изображение"
        name="avatar"
        className="popup__input popup__input_type_edit-avatar-link"
      />
      <span className="popup__input-error" id="avatar-url-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
