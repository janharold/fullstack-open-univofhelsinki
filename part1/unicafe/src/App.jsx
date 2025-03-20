import { useState } from 'react'

const Button = (props) => {
  const { onClick, text } = props
  
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = (props) => {
  const {text, value} = props
  return (
    <tr>
      <td style={{paddingRight: 24 + 'px'}}>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad, all, ave } = props.feedback;
  
  const computeAverage = () => {
    if (all === 0) {
      return 0
    } 
    return ave/all
  }

  const computePositive = () => {
    if (all === 0) {
      return 0
    } 
    return good/all*100
  }

  if (all === 0) {
    return (
      <>
      <h2>No feedback given</h2>
      <p>Give feedback by clicking a button above</p>
      </>
    )
  } else {
    return ( 
      <>
        <h2>Statistics</h2>
        <table>

          <tbody>
            <StatisticLine text={"Good"} value={good}/>
            <StatisticLine text={"Neutral"} value={neutral}/>
            <StatisticLine text={"Bad"} value={bad}/>
            <StatisticLine text={"All"} value={all}/>
            <StatisticLine text={"Average"} value={computeAverage()}/>
            <StatisticLine text={"Positive"} value={computePositive() + '%'}/>
          </tbody>
        </table>
        
      </>
    )
  }
}

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    ave: 0
  });

  const handleFeedback = (type) => {
    console.log('this is a ' + type + ' feedback')
    setFeedback(prev => {
      const updatedFeedback = { ...prev, [type]: prev[type] + 1, all: prev.all + 1}
      
      if(type === "good") {
        updatedFeedback.ave = prev.ave + 1
      } else if(type === "bad") {
        updatedFeedback.ave = prev.ave - 1
      }

      return updatedFeedback
    })
  }
  
  return (
    <div>
      <h1>UnivCAFE QuickFeedback</h1>
      <Button onClick={() => handleFeedback("good")} text='Good'/>
      <Button onClick={() => handleFeedback("neutral")} text='Neutral'/>
      <Button onClick={() => handleFeedback("bad")} text='Bad'/>
      <Statistics feedback={feedback} /> 
    </div>
  )
}

export default App