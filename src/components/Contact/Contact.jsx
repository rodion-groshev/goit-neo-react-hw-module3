import css from "./Contact.module.css";

const Contact = ({ contact, handleClick }) => {
  return (
    <div className={css.card}>
      <div className={css.cardOutline}>
        <div className={css.cardWrapper}>
          <svg width={15} height={15}>
            <use href="./src/img/icons.svg#icon-name"></use>
          </svg>
          <p>{contact.name}</p>
        </div>
        <div className={css.cardWrapper}>
          <svg width={15} height={15}>
            <use href="./src/img/icons.svg#icon-phone"></use>
          </svg>
          <p>{contact.number}</p>
        </div>
      </div>
      <button
        className={css.contactBtn}
        onClick={() => handleClick(contact.id)}
        type="click"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
