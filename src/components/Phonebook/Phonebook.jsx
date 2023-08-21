import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContactThunk, selectUserContacts } from 'redux/contactsReducer';

import css from './Phonebook.module.css'

const Phonebook = () => {
    const contacts = useSelector(selectUserContacts);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (evt) => {
        switch (evt.target.name) {
            case 'contactName':
                setName( evt.target.value );
                break;
            case 'contactNumber':
                setNumber( evt.target.value );
                break;
            default:
                break;
        }
    }
    const handleSubmit = evt => {
        evt.preventDefault();

        const form = evt.currentTarget;

        const name = form.elements.contactName.value;
        const number = form.elements.contactNumber.value;

        if (contacts.some(contact => contact.name === name))
            return alert(`Contact with name ${name} already exists!`);
        
        dispatch(addContactThunk({ name, number }));
        
        reset();
    }
    const reset = () => {
        setName('');
        setNumber('');
    }
    return (
        <form className={css.phonebook} onSubmit={handleSubmit}>
            <div className={css.phonebook_input}>
                <label 
                    htmlFor="inputName" 
                    className="form-label"
                >
                    <p>Name:</p>
                </label>
                <input 
                    name="contactName"
                    type="text" 
                    className={css.form_control} 
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={handleChange}
                    value={name}
                    required
                />
            </div>
            <div className={css.phonebook_input}>
                <label 
                    htmlFor="inputNumber" 
                    className={css.form_label}
                >
                    <p>Number:</p>
                </label>
                <input 
                    name="contactNumber"
                    type="text" 
                    className={css.form_control} 
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={handleChange}
                    value={number}
                    required
                />
            </div>
            <button 
                type="submit" 
                className={css.btn_primary}
                disabled={ !name || !number }
            >
                Add contact
            </button>
        </form>
    )
}

export default Phonebook