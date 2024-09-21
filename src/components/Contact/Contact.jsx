import css from "./Contact.module.css";

const Contact = ({ contact, handleClick }) => {
  return (
    <div className={css.card}>
      <div className={css.cardOutline}>
        <div className={css.cardWrapper}>
          <svg className={css.icon} width={15} height={15}>
            <use xlinkHref="/src/img/icons.svg#icon-user"></use>
          </svg>
          <p>{contact.name}</p>
        </div>
        <div className={css.cardWrapper}>
          <svg className={css.icon} width={15} height={15}>
            <use xlinkHref="/src/img/icons.svg#icon-phone"></use>
          </svg>
          <p>{contact.number}</p>
        </div>
      </div>
      <button
        className={css.contactBtn}
        onClick={() => handleClick(contact.id)}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
