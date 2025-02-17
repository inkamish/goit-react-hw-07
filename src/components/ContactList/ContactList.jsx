import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";

const getFilteredContacts = (contacts, filter) => {
  if (!contacts || contacts.length === 0) return [];
  const normalizedFilter = filter ? filter.toLowerCase() : "";
  return contacts.filter((contact) =>
    contact?.name?.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.name);

  const visibleContacts = getFilteredContacts(contacts, filter);

  return (
    <>
      {visibleContacts.length > 0 ? (
        <ul className={styles.contactList}>
          {visibleContacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts available</p>
      )}
    </>
  );
};

export default ContactList;
