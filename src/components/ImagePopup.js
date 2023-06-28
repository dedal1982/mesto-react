const ImagePopup = ({ card, isOpen, onClose }) => {
  return (
    <div className={`popup popup-fullScreen ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup-fullScreen__container">
        <button
          type="button"
          className="popup__close popup-fullScreen__close"
          onClick={onClose}
        />
        <img
          className="popup-fullScreen__img"
          src={card.link}
          alt={card.name}
        />
        <p className="popup-fullScreen__caption">{card.name}</p>
      </div>
    </div>
  );
};
export default ImagePopup;
