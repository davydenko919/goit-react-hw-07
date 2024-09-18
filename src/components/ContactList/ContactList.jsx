import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from 'react-redux';


export default function ContactList() {
  const contacts = useSelector((state) => state.tasks.contacts.items);
  const filter = useSelector((state) => state.filters.filters.name); 
  // console.log(contacts);
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
 

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
