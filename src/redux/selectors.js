import { createSelector } from '@reduxjs/toolkit';

export const selectUserContacts = state => state.contacts.contacts;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectFilteredContact = createSelector(
  [selectUserContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// export const selectUserLoading = state => state.auth.isLoading;
// export const selectUserError = state => state.auth.error;
// export const selectToken = state => state.auth.token;
// export const selectUserData = state => state.auth.userData;
// export const selectAuthentificated = state => state.auth.authentificated;
