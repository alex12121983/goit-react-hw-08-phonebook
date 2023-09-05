import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader/Loader';
import { requestContactsThunk } from 'redux/contacts/operations';
import { selectContactsError, selectContactsIsLoading } from 'redux/contacts/selectors';
import { selectAuthentificated } from 'redux/auth/selectors';

import ContactList from 'components/ContactList/ContactList';
import Phonebook from 'components/Phonebook/Phonebook';
import Filter from 'components/Filter/Filter';
import css from './ContactsPage.module.css';

const Contacts = () => {
  const authentificated = useSelector(selectAuthentificated);

  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;

    dispatch(requestContactsThunk());
  }, [authentificated, dispatch]);

  return (
    <div className={css.contacts}>
      <Phonebook/>
      <Filter />
      {isLoading && <Loader />}
      {error && <p>Oops, some error occured... {error}</p>}
      <ContactList/>
    </div>
  );
};

export default Contacts;
