import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader/Loader';
import { selectAuthentificated } from 'redux/authReducer';
import {
  deleteContactThunk,
  requestContactsThunk,
  selectContactsError,
  selectContactsIsLoading,
  selectUserContacts,
} from 'redux/contactsReducer';
import Phonebook from 'components/Phonebook/Phonebook';
import css from './ContactsPage.module.css';

const Contacts = () => {
  const authentificated = useSelector(selectAuthentificated);
  const contacts = useSelector(selectUserContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;

    dispatch(requestContactsThunk());
  }, [authentificated, dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  return (
    <div className={css.contacts}>
      <Phonebook/>
      {isLoading && <Loader />}
      {error && <p>Oops, some error occured... {error}</p>}
      <ul className={css.list_group}>
        {showContacts &&
          contacts.map(contact => {
            return (
              <li 
                key={contact.id}
                className={css.list_group_item}
              >
                <p>Name: {contact.name}</p>
                <p>Number: {contact.number}</p>
                <button
                  onClick={() => handleDeleteContact(contact.id)}
                  type="button"
                  aria-label="Delete contact"
                  className={css.btn_danger}
                >
                  &times;
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Contacts;
