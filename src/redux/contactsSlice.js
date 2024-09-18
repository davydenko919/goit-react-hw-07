import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const slice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
    }
  },
  reducers:{
    addContact: (state, action) => {
        const newContact = {
          id: nanoid(), 
          name: action.payload.name,
          number: action.payload.number
        };
        state.contacts.items.push(newContact); 
      },
    deleteContact: (state, action) => {
        state.contacts.items = state.contacts.items.filter((item) => item.id !== action.payload);
      },
  }

});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;