import ContactListItem from 'components/ContactListItem/ContactListItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.value);
  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  
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