import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const ac = anecdotes.length
  const [anecvotes, setVotes] = useState(Array(ac).fill(0))
  const randomInt = () => Math.floor(Math.random() * ac)
  const [selected, setSelected] = useState(randomInt())
  const [topVoted, setTopVoted] = useState(0)
  const [totalVotes, setTotalVotes] = useState(0)
 

  const voteThis = (selectedAnecdote) => {
    console.log('voted anecdotes no. ' + selectedAnecdote)
    const castedVotes = [...anecvotes]
    const updatedTotal = totalVotes + 1
    castedVotes[selectedAnecdote] += 1
    setVotes(castedVotes)
    setTotalVotes(updatedTotal)
    console.log(castedVotes)
    console.log(updatedTotal)
    const highestVotes = castedVotes.indexOf(Math.max(...castedVotes))
    setTopVoted(highestVotes)
  }

  if(totalVotes === 0) {
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <h2>{anecdotes[selected]}</h2>
        <p><i>Voted {anecvotes[selected]} times</i> <button onClick={() => voteThis(selected)}>Vote</button></p>
        <button onClick={() => setSelected(randomInt())}>View another anecdote</button>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <h2>{anecdotes[selected]}</h2>
        <p><i>Voted {anecvotes[selected]} times</i> <button onClick={() => voteThis(selected)}>Vote</button></p>
        <button onClick={() => setSelected(randomInt())}>View another anecdote</button>
        <p>Casted votes: {totalVotes}</p>
        <hr/>
        <h1>Most voted anecdote</h1>
        <h2>{anecdotes[topVoted]}</h2>
        <p><i>With {anecvotes[topVoted]} Votes</i></p>
      </div>
    )
  }
  
}

export default App