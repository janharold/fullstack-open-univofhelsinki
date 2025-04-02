import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    console.log('axios effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        setFilteredPersons(response.data)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {

    if(!isLoading) {
      const myFilteredContacts = persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredPersons(myFilteredContacts)
      
      //console.log(myFilteredContacts)
      
      if(myFilteredContacts.length === 0) {
        alert('No contacts found')
      }
    }
  }, [filter, persons, isLoading]);

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
    //console.log(event.target.value) 
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
