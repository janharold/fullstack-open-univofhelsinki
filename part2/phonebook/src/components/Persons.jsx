import Person from './Person'

const Persons = (props) => {
  //console.log(props)
  const { persons } = props
  
  return(
    <>
      {persons.map(person => <Person key={person.id} name={person.name} number={person.number} />)}
    </>
  )
}


export default Persons;