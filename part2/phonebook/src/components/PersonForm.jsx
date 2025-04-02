const PersonForm = (props) => {

  console.log('App re-rendered')
  const { addContact, newName, newNumber, setNewName, setNewNumber } = props

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    if (newName.trim() === '' || newNumber.trim() === '') {
      alert('Please fill in both name and number fields.');
      return; // Stop submission if fields are empty
    }

    // If fields are not empty, proceed with adding the contact
    addContact(event);
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <div>
          name: <input name="name" value={newName} onChange={event => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input name="number" value={newNumber} onChange={event => setNewNumber(event.target.value)} />
        </div>
        <div>
          <button name="submit" type="submit" >add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm