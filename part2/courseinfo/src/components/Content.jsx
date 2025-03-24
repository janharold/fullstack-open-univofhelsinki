const Part = (props) => <p>Name: {props.name} ! Exercises: {props.exercises}</p>

const Content = (props) => {
  const { parts } = props.course

  return(
    <>
      {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
    </>
  )
}


export default Content