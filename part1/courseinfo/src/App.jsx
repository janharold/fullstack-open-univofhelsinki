const Header = (props) => {
  console.log(props)
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
  
}



const Content = (props) => {
  console.log("Content:" + props.parts[0].part)


  return(
    <>
      <Part name={props.parts[0].part} exercises={props.parts[0].exercises}/>
      <Part name={props.parts[1].part} exercises={props.parts[1].exercises}/>
      <Part name={props.parts[2].part} exercises={props.parts[2].exercises}/>
    </>
  )
  
}

const Part = (props) => {
  console.log("Part:" + props.name + ":" + props.exercises)
  return(
    <p>Name: {props.name} | Exercises: {props.exercises}</p>
  )
}

const Total = (props) => {
  //console.log(props)
  return(
    <>
      <p>Total exercises: {props.excount[0].exercises + props.excount[1].exercises + props.excount[2].exercises}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total excount={parts}/>
    </div>
  )
}

export default App