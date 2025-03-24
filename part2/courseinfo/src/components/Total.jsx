const Total = (props) => {
  const {parts} = props.course

  return <p>Total exercises: {parts.reduce((sum, excount) => sum + excount.exercises, 0)}</p> 
}

export default Total;
