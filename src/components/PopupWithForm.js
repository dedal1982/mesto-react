function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? `popup_opened` : ""
      }`}
      onClick={props.onCloseClick}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={props.onClose}
        />
        <h3 className={`popup__title popup__title_type_${props.name}`}>
          {props.title}
        </h3>
        <form
          className="popup__form"
          name={props.form}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button type="submit" className="popup__submit" title="Сохранить">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
