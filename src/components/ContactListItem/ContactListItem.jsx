import PropTypes from 'prop-types'
import css from './ContactListItem.module.css'
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

const ContactListItem = ({contact}) => {
 
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  
   return (
     <li  className={css.contact__item}>
      <p>{contact.name} {contact.number}</p>
      <button className={css.contact__btn}
        onClick={handleDelete}
        type="button">Delete</button>
    </li>  
  )
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string
  }).isRequired,
  
}

export default ContactListItem