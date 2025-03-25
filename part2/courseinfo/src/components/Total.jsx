const Total = (props) => {
  const {exercises} = props
  //console.log("Totalcomponent:", exercises)

  return <p><strong>Total of {exercises.reduce((sum, excount) => sum + excount, 0)} exercises</strong></p> 
}

export default Total;
