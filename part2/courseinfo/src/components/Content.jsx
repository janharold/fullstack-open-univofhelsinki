const Part = (props) => <p>{props.name} {props.exercises}</p>

const Content = (props) => {
  const { parts } = props
  //console.log(parts)
  return(
    <>
      {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
    </>
  )
}


export default Content