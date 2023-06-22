import { useState } from 'react'
import css from './ContactForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const ContactForm = () => {
    const contacts = useSelector(selectContacts)
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
const handleChange = ({ currentTarget: { value, name } }) => {
    if (name === 'name') {
        setName(value);
    } else if (name === 'number') {
        setNumber(value);
        }
    }
const  handleSubmit = (evt) => {
    evt.preventDefault();
     const {
    elements: { name, number }
    } = evt.currentTarget;
    if (contacts.some(contact => contact.name.toLowerCase() === name.value.toLowerCase())) {
        alert(`${name} is already in contacts`) 
      reset();  
    } else {
        dispatch(addContact({ name:name.value, number:number.value }));
    reset();
    }
    }
const reset = () => {
    setName('')
    setNumber('')
    }
return    (
            <form onSubmit={handleSubmit} className={css.form__container}>
                <label className={css.form__label}>
                    Name
                    <input className={css.form__input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                    value={name}
                    />
                </label>
                <label className={css.form__label}>
                    Number
                    <input className={css.form__input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                     onChange={handleChange}
                    value={number}
                    />
                </label>
        <button className={css.form__button} type="submit" >Add contact</button>
            </form>
        )
    }
export default ContactForm;