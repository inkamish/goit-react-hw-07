import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./Contact.module.css";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id)); // Видаляє контакт за id
  };

  return (
    <div className={styles.contact}>
      <p>{name}</p>
      <p>{number}</p>
      <button className={styles.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
