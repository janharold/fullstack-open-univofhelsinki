const Header = (props) => {
  console.log(props)
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
  
}



const Content = (props) => {
  //console.log("Content:" + props.parts[0].name)
  return(
    <>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
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
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      { 
        name: 'Fundamentals of React', 
        exercises: 10 
      },
      { 
        name: 'Using props to pass data', 
        exercises: 7
      },
      { 
        name: 'State of a component', 
        exercises: 14 
      },
    ]
  }

  console.log(course.name)
  console.log(course.parts)

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total excount={course.parts}/>
    </div>
  )
}

export default App