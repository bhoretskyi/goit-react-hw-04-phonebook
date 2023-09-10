import { useState, useEffect } from 'react';
import { UserForm } from './Form/Form';
import { nanoid } from 'nanoid';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addName = newName => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newName.name.toLowerCase()
    );
    if (existingContact) {
      window.alert(`Contact with name '${newName.name}' already exists!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: newName.name,
      number: newName.number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const updateFilter = filterText => {
    setFilter(filterText);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <section>
      <h1>Phonebook</h1>
      <UserForm addName={addName} />

      <div>
        <h2>Contacts</h2>
        <ContactFilter filter={filter} updateFilter={updateFilter} />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </section>
  );
};
