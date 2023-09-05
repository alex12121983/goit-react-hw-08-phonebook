import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContactThunk } from 'redux/contacts/operations';
import { selectFilteredContact } from 'redux/filter/selectors';


import PropTypes from "prop-types";

import ContactItem from '../ContactItem/ContactItem';

import css from './ContactList.module.css';

const ContactList = () => {
    const filteredContact = useSelector(selectFilteredContact);
    const dispatch = useDispatch();

    const handleDeleteContact = contactId => {
        dispatch(deleteContactThunk(contactId));
      };

    return (
        <ul className={css.list_group}>
            {filteredContact &&
                filteredContact.map(contact => {
                return (<ContactItem 
                            key={contact.id}
                            contact={contact}
                            handleDeleteContact={handleDeleteContact}
                        />);
                })}
        </ul>
    )
}

export default ContactList











ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired
    ),
    handleDeleteContact: PropTypes.func.isRequired,
};
