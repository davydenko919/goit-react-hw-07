import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from "../../redux/contactsSlice.js";

export default function ContactList() {

  const filterContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactList}>
      {filterContacts.map((contact) => (
        <Contact 
          key={contact.id}
          data={contact}
        />
      ))}
    </div>
  );
}
