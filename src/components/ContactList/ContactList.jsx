import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filtersSlice";
import { Contact } from "../Contact/Contact";
import s from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  if (!contacts.length) {
    return <h2>No contacts found</h2>;
  }
  return (
    <ul className={s.contactsList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
