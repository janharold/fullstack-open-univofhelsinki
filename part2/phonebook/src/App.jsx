import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const initialPersons = [
    { name: 'Arto Hellas', number: '040-123456',  id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523',  id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345',  id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    { name: 'Jan Harold', number: '63 916 875 7277', id: 5 }
  ];
  const [persons, setPersons] = useState(initialPersons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(initialPersons)

  useEffect(() => {
    const myFilteredContacts = initialPersons.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPersons(myFilteredContacts);
    
    console.log(myFilteredContacts.length)
    
    if(myFilteredContacts.length === 0) {
      alert('No contacts found')
    }

  }, [filter]);

  const addContact = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    } else {
      const newId = persons.length > 0 ? Math.max(...persons.map(p => p.id)) + 1 : 1
      const contact = {
        name: newName,
        number: newNumber,
        id: newId
      }
      setPersons(persons.concat(contact))
      setFilteredPersons(persons.concat(contact))
      setNewName('')
      setNewNumber('')
    }     
  }


  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  };
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange}/>
      
      <h2>add a new</h2>
      <PersonForm 
        addContact={addContact} 
        newName={newName} 
        newNumber={newNumber} 
        setNewName={setNewName} 
        setNewNumber={setNewNumber}
      />
      
      <h2>Contacts</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App
