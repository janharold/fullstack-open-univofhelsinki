import { useState, useEffect } from 'react'

const App = () => {
  const initialPersons = [
    { name: 'Arto Hellas', number: '040-123456', address: 'Won', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', address: 'Wonton', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', address: 'Wonten', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', address: 'Won11', id: 4 }
  ];
  const [persons, setPersons] = useState(initialPersons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newAddress, setNewAddress] = useState('')
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
        address: newAddress,
        id: newId
      }
      setPersons(persons.concat(contact))
      setFilteredPersons(persons.concat(contact))
      setNewName('')
      setNewNumber('')
      setNewAddress('')
    }     
  }


  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  };
  

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filter} onChange={handleFilterChange}/>
      </div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={event => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={event => setNewNumber(event.target.value)} />
        </div>
        <div>
          address: <input value={newAddress} onChange={event => setNewAddress(event.target.value)}/>
        </div>
        <div>
          <button type="submit" onClick={addContact}>add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      
      
      <ul>
        {filteredPersons.map(person => <li key={person.id}>{person.name} - {person.number} - {person.address}</li>)}
      </ul>
      
    </div>
  )
}

export default App
