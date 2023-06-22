import ContactListItem from 'components/ContactListItem/ContactListItem'
import { useSelector } from 'react-redux'
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  
  const visibleContacts = useSelector(selectVisibleContacts);
  
  return (
              <ul>
              {visibleContacts.map((contact) => (
                <ContactListItem
                  contact={contact}
                  key={contact.id}
                 
                  />
              ))}
</ul>
  
  )
}
export default ContactList