import Contact from '../Contact/Contact';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { selectContactsFilter } from '../../redux/filters/selectors'
import { deleteContact } from '../../redux/contacts/operations';
import css from './ContactList.module.css';

export default function ContactList() {
    const dispatch = useDispatch();
    const useFilteredContacts = () => {
        const contacts = useSelector(selectContacts);
        const filterValue = useSelector(selectContactsFilter).toLowerCase().trim();

        const filteredContacts = useMemo(() => {
            return contacts.filter(item =>
                item.name.toLowerCase().trim().includes(filterValue) ||
                item.phone.toLowerCase().trim().includes(filterValue)
            );
        }, [contacts, filterValue]);

        return filteredContacts;
    };

    const contacts = useFilteredContacts();

    const handleDelete = (contactId) => {
        dispatch(deleteContact(contactId));
    }
    return (
        <ul className={css.list}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact contact={contact} onDelete={handleDelete} />
                </li>
            ))}
        </ul>
    )
}