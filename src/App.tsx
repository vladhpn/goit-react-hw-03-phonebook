import { useState, useEffect } from 'react';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import shortid from 'shortid';
import { IContacts } from './interfaces';

const App = () => {
  const [contacts, setContacts] = useState<IContacts[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')  || '[]') as IContacts[];

    setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name:string, number:string) => {
    const contact: IContacts = {
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

  const deleteContact = (id:string) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const changeFilter = (event:React.ChangeEvent<HTMLInputElement>) => {
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
