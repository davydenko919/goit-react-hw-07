import { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from "../../redux/contactsOps.js";
import { selectError, selectLoading } from "../../redux/contactsSlice.js";

export default function App() {

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading tasks, please wait</p>}
      {error && <p>Error message</p>}
      <ContactList />
    </div>
  );
}