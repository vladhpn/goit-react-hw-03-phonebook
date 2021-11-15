import { useState, useEffect } from 'react';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import shortid from 'shortid';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));

    setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
    )
      ? alert(`${name}`)
      : setContacts(prev => [contact, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const getVisibleContact = contacts.filter(contact => {
    if (filter === '') {
      return contacts;
    }
    return contact.name.toLowerCase().includes(filter.toLocaleLowerCase());
  });

  return (
    <>
      <Form onSubmit={addContact} />

      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContact}
        onDeleteContact={deleteContact}
      />
    </>
  );
};

export default App;
