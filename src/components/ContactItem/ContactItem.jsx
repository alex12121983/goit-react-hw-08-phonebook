import PropTypes from "prop-types";

import css from '../ContactItem/ContactItem.module.css';

const ContactItem = ({contact, handleDeleteContact}) => {
    
	return (
			<li 
            	key={contact.id} 
            	className={css.list_group_item}
            >
                <p>Name: {contact.name}</p>
                <p>Number: {contact.number}</p>
                <button 
                    type="button" 
                    aria-label="Delete contact"
                    className={css.btn_danger}
                    onClick={() => handleDeleteContact(contact.id)}
                >
                    &times;
                </button>
            </li>
	)
}

export default ContactItem;

ContactItem.propTypes = {
	contact: PropTypes.shape({
		  		name: PropTypes.string.isRequired,
		  		number: PropTypes.string.isRequired,
		  		id: PropTypes.string.isRequired,
		}).isRequired,
        handleDeleteContact: PropTypes.func.isRequired,
};
