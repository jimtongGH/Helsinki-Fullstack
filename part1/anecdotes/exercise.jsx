import { useState } from 'react'

// exercise 1.12
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

// exercise 1.12
const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const [selected, setSelected] = useState(0)
    // exercise 1.12
    const randomAnecdote = () => {
        const randomIndex = Math.floor(Math.random() * anecdotes.length)
        setSelected(randomIndex)
    }

    // exercise 1.13
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
    const voteAnecdote = () => {
        const newVotes = [...votes]
        newVotes[selected] += 1
        setVotes(newVotes)
    }

    // exercise 1.14
    const maxVotes = Math.max(...votes)
    const maxIndex = votes.indexOf(maxVotes)

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <Button text='vote' handleClick={voteAnecdote} />
            <Button text='next anecdote' handleClick={randomAnecdote} />
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[maxIndex]}</p>
        </div>
    )
}

export default App