import { createSelector } from '@reduxjs/toolkit';
import { selectUserContacts } from '../contacts/selectors';

export const selectFilter = state => state.filter;

export const selectFilteredContact = createSelector(
  [selectUserContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
